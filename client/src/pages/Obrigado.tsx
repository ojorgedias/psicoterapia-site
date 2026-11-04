import { useEffect, useRef, useState } from "react";

import { Link } from "wouter";

import { motion } from "framer-motion";

import { Calendar, Clock, MessageCircle, Zap, HelpCircle, ArrowLeft, ShieldCheck, Video, Wallet, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// ==============================================================================
// CONFIGURAÇÃO — EDITE APENAS ESTE BLOCO
// ==============================================================================

// 1) SEU NÚMERO DE WHATSAPP no formato internacional: 55 + DDD + número (só dígitos)
const WHATSAPP_NUMBER = "5541985155583";

// 2) ESPELHO DA SUA AGENDA DO GOOGLE (Apps Script).
//    Cole aqui a URL gerada na implantação (termina em /exec).
//    É ela quem diz em tempo real quais horários estão livres.
const URL_DISPONIBILIDADE = "https://script.google.com/macros/s/AKfycbwnU-ae8_f0GG3WLpwkYqccb8Xz9W_srCZUCvksYfP26X_3jrofgSNr0xCJbtLbz6vx/exec";

// 3) AGENDA DE RESERVA — mesmo molde do script. Só é usada se o script
//    estiver fora do ar (a página nunca fica sem agenda). Se seus
//    horários fixos mudarem, edite aqui E no script.
const AGENDA: Record<number, string[]> = {
  1: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  2: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  3: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  4: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  5: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
};

// 4) Quantos dias para frente a página deve procurar horários
const DIAS_A_FRENTE = 14;

// 5) CONVERSÃO DO GOOGLE ADS — já configurada com o send_to do /obrigado original.
const CONVERSION_SEND_TO = "AW-18119858794/atendimento_whatsapp";

// 6) MENSAGENS PRONTAS ENVIADAS PELO WHATSAPP
const mensagemAgendamento = (data: string, hora: string) =>
  `Olá Jorge, gostaria de agendar uma sessão de psicoterapia no dia ${data} às ${hora}.`;

const mensagemImediata =
  "Olá Jorge! Gostaria de um atendimento imediato. Podemos conversar agora?";

const mensagemDuvidas =
  "Olá Jorge! Tenho algumas dúvidas sobre o processo terapêutico e gostaria de conversar com você antes de agendar.";

// ==============================================================================
// A PARTIR DAQUI NÃO É PRECISO EDITAR
// ==============================================================================

const waLink = (mensagem: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(mensagem)}`;

const formatarDataExtenso = (d: Date) => {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const diaSemana = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(d);
  return `${dd}/${mm} (${diaSemana})`;
};

const formatarDiaCurto = (d: Date) =>
  new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "short" }).format(d);

// Modo de reserva: gera os dias a partir da AGENDA estática
const gerarDiasDaReserva = () => {
  const lista: { data: Date; horarios: string[] }[] = [];
  const hoje = new Date();
  for (let i = 0; i < DIAS_A_FRENTE; i++) {
    const data = new Date(hoje);
    data.setDate(hoje.getDate() + i);
    const horariosBrutos = AGENDA[data.getDay()] ?? [];
    const horarios =
      i === 0
        ? horariosBrutos.filter((h) => parseInt(h, 10) > hoje.getHours() + 1)
        : horariosBrutos;
    if (horarios.length > 0) lista.push({ data, horarios });
  }
  return lista.slice(0, 8); // exibe no máximo 8 dias com horários
};

// Converte a resposta do Apps Script ("2026-11-05") em Date
const mapearDiasDaApi = (dias: { data: string; horarios: string[] }[]) =>
  dias.map((d) => {
    const [ano, mes, dia] = d.data.split("-").map(Number);
    return { data: new Date(ano, mes - 1, dia), horarios: d.horarios };
  });

export default function Obrigado() {

  const [diaSelecionado, setDiaSelecionado] = useState(0);

  const [horaSelecionada, setHoraSelecionada] = useState<string | null>(null);

  const [diasDisponiveis, setDiasDisponiveis] = useState<{ data: Date; horarios: string[] }[]>([]);

  const [carregando, setCarregando] = useState(true);

  // Referências para a auto-rolagem
  const agendaRef = useRef<HTMLElement | null>(null);
  const rolagemFeita = useRef(false);

  useEffect(() => {

    const tituloAnterior = document.title;
    document.title = "Agende sua sessão | Jorge Dias — Psicoterapia Clínica";

    // Bloqueia indexação para não sujar os dados do Google Ads no SEO
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // RASTREAMENTO — lógica idêntica ao /obrigado original:
    // 1. Dispara a conversão do Google Ads quando o gtag está disponível...
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': CONVERSION_SEND_TO
      });
    } else {
      // 2. ...ou empurra o evento para o dataLayer (fallback GTM), como no original.
      //    O if/else garante contagem ÚNICA — nunca os dois caminhos ao mesmo tempo.
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'obrigado_page_view' });
    }
    // O redirecionamento automático do código original foi removido de propósito:
    // agora esta página é a central de agendamento e o usuário escolhe o caminho.
    // Sem redirect, o evento de conversão tem tempo de sobra para ser enviado.

    return () => {
      if (document.head.contains(meta)) {
        document.head.removeChild(meta);
      }
      document.title = tituloAnterior;
    };

  }, []);

  // Busca o espelho da agenda do Google (Apps Script).
  // Se o script falhar, usa a AGENDA estática de reserva — nunca fica sem agenda.
  useEffect(() => {
    let ativo = true;

    const carregar = async () => {
      try {
        const resposta = await fetch(URL_DISPONIBILIDADE);
        if (!resposta.ok) throw new Error("resposta inválida");
        const dados = await resposta.json();
        if (!ativo) return;
        setDiasDisponiveis(mapearDiasDaApi(dados.dias ?? []));
      } catch {
        if (!ativo) return;
        setDiasDisponiveis(gerarDiasDaReserva());
      } finally {
        if (ativo) setCarregando(false);
      }
    };

    carregar();
    return () => { ativo = false; };
  }, []);

  // AUTO-ROLAGEM (mobile): quando os horários carregam, desce suavemente
  // até a agenda encostar no alto da tela — assim ela e o bloco de
  // atendimento imediato (que vem logo depois) aparecem juntos.
  // Acontece uma única vez por visita. No desktop, não rola (tudo já cabe).
  useEffect(() => {
    if (carregando || rolagemFeita.current) return;
    rolagemFeita.current = true;

    const atraso = window.setTimeout(() => {
      if (window.innerWidth >= 768) return; // desktop: já vê tudo
      const secao = agendaRef.current;
      if (!secao) return;

      const topoDaAgenda = secao.getBoundingClientRect().top + window.scrollY;
      // 0.15 = a agenda fica quase colada no topo da tela, revelando também
      // o atendimento imediato logo abaixo. Ajuste fino aqui:
      // maior (ex.: 0.3) rola menos; menor (ex.: 0.05) rola mais.
      const alvo = Math.max(0, topoDaAgenda - window.innerHeight * 0.15);
      const suave = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      window.scrollTo({ top: alvo, behavior: suave });
    }, 450); // pequena pausa para as animações de entrada terminarem

    return () => window.clearTimeout(atraso);
  }, [carregando]);

  const diaAtual = diasDisponiveis[diaSelecionado];

  const mensagemFinal =
    diaAtual && horaSelecionada
      ? mensagemAgendamento(formatarDataExtenso(diaAtual.data), horaSelecionada)
      : null;

  const trocarDia = (index: number) => {
    setDiaSelecionado(index);
    setHoraSelecionada(null);
  };

  return (

    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-primary">

      {/* Header simples */}
      <header className="py-4 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="container flex items-center justify-between">
          <Link href="/" className="logo">
            Jorge Dias
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="container py-6 md:py-10 max-w-3xl">

        {/* Info rápida: formato e valor (badges grandes e evidentes) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold shadow-md">
              <Video size={18} strokeWidth={2.5} className="text-accent" />
              Online · Google Meet
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-50 text-zinc-800 text-primary px-4 py-2 text-sm font-bold shadow-md">
              <Wallet size={18} strokeWidth={2.5} />
              Sessão: R$ 130
            </span>
          </div>
          <ChevronDown size={16} className="text-foreground/30 animate-bounce" />
        </motion.div>

        {/* ================================================================ */}
        {/* 1º BLOCO: AGENDA — ESCOLHER DIA E HORÁRIO (topo)                 */}
        {/* ================================================================ */}
        <motion.section
          ref={agendaRef}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-border/50 rounded-2xl shadow-sm p-4 md:p-8 mt-5"
        >
          <div className="flex items-center gap-2.5 mb-1">
            <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Calendar size={18} />
            </span>
            <h2 className="font-display text-lg md:text-2xl font-semibold text-primary">
              Escolher dia e horário
            </h2>
          </div>
          <p className="text-xs md:text-sm text-foreground/60 mb-4">
            Toque no dia e no horário — a mensagem chega pronta no meu WhatsApp.
          </p>

          {carregando ? (
            <div className="text-center py-5">
              <p className="text-foreground/70 text-sm">Carregando horários disponíveis…</p>
            </div>
          ) : diasDisponiveis.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-foreground/70 text-sm mb-4">
                Minha agenda está sendo atualizada neste momento. Fale comigo pelo WhatsApp
                e encontramos um horário juntos.
              </p>
              <a
                href={waLink("Olá Jorge! Gostaria de verificar os horários disponíveis para sessão.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-3 px-6 rounded-md font-semibold text-xs uppercase tracking-wider"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </div>
          ) : (
            <>
              {/* Dias */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {diasDisponiveis.map((dia, index) => (
                  <button
                    key={index}
                    onClick={() => trocarDia(index)}
                    className={`shrink-0 py-2 px-3 md:px-4 rounded-lg border text-xs md:text-sm font-semibold transition-all duration-200 ${
                      index === diaSelecionado
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-white text-foreground/70 border-border/50 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {formatarDiaCurto(dia.data)}
                  </button>
                ))}
              </div>

              {/* Horários */}
              {diaAtual && (
                <div className="mt-3">
                  <div className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-2.5">
                    <Clock size={12} />
                    Horários para {formatarDataExtenso(diaAtual.data)}
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2">
                    {diaAtual.horarios.map((hora) => (
                      <button
                        key={hora}
                        onClick={() => setHoraSelecionada(hora)}
                        className={`py-2 rounded-lg border text-xs md:text-sm font-semibold transition-all duration-200 ${
                          horaSelecionada === hora
                            ? "bg-accent text-primary border-accent shadow-md"
                            : "bg-white text-foreground/80 border-border/50 hover:border-accent/60 hover:text-primary"
                        }`}
                      >
                        {hora}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Botão confirmar */}
              <a
                href={mensagemFinal ? waLink(mensagemFinal) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!mensagemFinal) e.preventDefault();
                }}
                className={`mt-5 w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-md font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                  mensagemFinal
                    ? "bg-primary text-primary-foreground hover:bg-accent hover:text-primary shadow-lg"
                    : "bg-foreground/10 text-foreground/40 cursor-not-allowed"
                }`}
              >
                <MessageCircle size={16} />
                Confirmar agendamento no WhatsApp
              </a>
            </>
          )}
        </motion.section>

        {/* ================================================================ */}
        {/* 2º BLOCO: ATENDIMENTO IMEDIATO (meio — bloco único e claro)      */}
        {/* ================================================================ */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-primary/10 border border-primary/20 rounded-2xl shadow-sm p-5 md:p-6 mt-5 text-center"
        >
          {/* Selo + ponto pulsante centrados */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 bg-green-600 text-primary text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              <Zap size={11} />
              Online Agora
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
          <h2 className="font-display text-base md:text-xl font-semibold text-primary leading-tight">
            Atendimento imediato
          </h2>
          <p className="text-xs md:text-sm text-foreground/70 leading-snug mt-1">
            Precisa falar agora? Me chame no WhatsApp.
          </p>
          {/* Botão embaixo, em verde escuro sóbrio */}
          <a
            href={waLink(mensagemImediata)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/85 transition-colors duration-300 py-3 px-8 rounded-lg font-semibold text-xs md:text-sm uppercase tracking-wider shadow-md"
          >
            <MessageCircle size={16} />
            Chamar agora
          </a>
        </motion.section>

        {/* ================================================================ */}
        {/* 3º BLOCO: DÚVIDAS SOBRE O PROCESSO (final)                       */}
        {/* ================================================================ */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-border/50 rounded-2xl shadow-sm p-4 md:p-8 mt-5"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
              <HelpCircle size={18} />
            </span>
            <h2 className="font-display text-lg md:text-2xl font-semibold text-primary">
              Tenho dúvidas sobre o processo
            </h2>
          </div>
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-4">
            Ainda avaliando se é o momento certo? Me chame para conversar.
          </p>
          <a
            href={waLink(mensagemDuvidas)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 py-3 px-6 rounded-md font-semibold text-xs md:text-sm uppercase tracking-wider"
          >
            <MessageCircle size={16} />
            Conversar e tirar dúvidas
          </a>
        </motion.section>

        {/* Nota de sigilo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-start justify-center gap-2 text-center mt-8"
        >
          <ShieldCheck size={16} className="text-accent shrink-0 mt-0.5" />
          <p className="text-[11px] text-foreground/50 leading-relaxed max-w-md mb-0">
            Toda conversa é sigilosa. Seus dados e o que você compartilhar são tratados com
            o mesmo cuidado do atendimento clínico.
          </p>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40">
        <div className="container text-center">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0">
            &copy; {new Date().getFullYear()} Jorge Dias — Psicoterapia Clínica.
          </p>
        </div>
      </footer>

    </div>

  );

}
