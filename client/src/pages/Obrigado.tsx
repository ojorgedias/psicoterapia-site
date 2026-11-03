import { useEffect, useMemo, useState } from "react";

import { Link } from "wouter";

import { motion } from "framer-motion";

import { Calendar, Clock, MessageCircle, Zap, HelpCircle, ArrowLeft, ShieldCheck } from "lucide-react";

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

// 2) SEUS HORÁRIOS DISPONÍVEIS por dia da semana.
//    0 = Domingo | 1 = Segunda | 2 = Terça | 3 = Quarta | 4 = Quinta | 5 = Sexta | 6 = Sábado
//    Quando um horário for preenchido (agenda cheia), basta removê-lo da lista aqui.
const AGENDA: Record<number, string[]> = {
  1: ["08:00", "09:00", "18:00", "19:00"],
  2: ["08:00", "09:00", "14:00", "15:00"],
  3: ["08:00", "09:00", "18:00", "19:00"],
  4: ["08:00", "09:00", "14:00", "15:00"],
  5: ["08:00", "09:00", "14:00"],
};

// 3) Quantos dias para frente a página deve procurar horários
const DIAS_A_FRENTE = 14;

// 4) CONVERSÃO DO GOOGLE ADS — já configurada com o send_to do /obrigado original.
const CONVERSION_SEND_TO = "AW-18119858794/atendimento_whatsapp";

// 5) MENSAGENS PRONTAS ENVIADAS PELO WHATSAPP
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

export default function Obrigado() {

  const [diaSelecionado, setDiaSelecionado] = useState(0);

  const [horaSelecionada, setHoraSelecionada] = useState<string | null>(null);

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

  // Gera a lista dos próximos dias que possuem horários configurados
  const diasDisponiveis = useMemo(() => {

    const lista: { data: Date; horarios: string[] }[] = [];

    const hoje = new Date();

    for (let i = 0; i < DIAS_A_FRENTE; i++) {

      const data = new Date(hoje);

      data.setDate(hoje.getDate() + i);

      const horarios = AGENDA[data.getDay()] ?? [];

      if (horarios.length > 0) {
        lista.push({ data, horarios });
      }

    }

    return lista.slice(0, 8); // exibe no máximo 8 dias com horários

  }, []);

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
      <header className="py-6 border-b border-border/40 bg-background/95 backdrop-blur-md">
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

      <main className="container py-12 md:py-16 max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Obrigado pela confiança!
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
            Estamos a um passo de começar. Escolha abaixo <strong>como você prefere começar</strong>:
            selecionando um horário na agenda, solicitando atendimento imediato ou conversando
            comigo primeiro sobre o processo.
          </p>
        </motion.div>

        {/* ================================================================= */}
        {/* OPÇÃO 1: AGENDAR NA AGENDA                                        */}
        {/* ================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-border/50 rounded-2xl shadow-sm p-6 md:p-8 mt-10"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Calendar size={20} />
            </span>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
              Escolher dia e horário
            </h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6">
            Selecione um dia da agenda e um horário disponível. A mensagem será enviada já
            pronta para o meu WhatsApp.
          </p>

          {diasDisponiveis.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-foreground/70 mb-4">
                Minha agenda está sendo atualizada neste momento. Fale comigo pelo WhatsApp
                e encontramos um horário juntos.
              </p>
              <a
                href={waLink("Olá Jorge! Gostaria de verificar os horários disponíveis para sessão.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-3 px-6 rounded-md font-semibold text-sm uppercase tracking-wider"
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
                    className={`shrink-0 py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-200 ${
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
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-3">
                    <Clock size={14} />
                    Horários para {formatarDataExtenso(diaAtual.data)}
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {diaAtual.horarios.map((hora) => (
                      <button
                        key={hora}
                        onClick={() => setHoraSelecionada(hora)}
                        className={`py-2.5 rounded-lg border text-sm md:text-base font-semibold transition-all duration-200 ${
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

              {/* Prévia da mensagem */}
              <div className="mt-6 bg-secondary/20 border border-border/40 rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/50 mb-2">
                  Mensagem que será enviada
                </p>
                <p className="text-sm italic text-foreground/80 leading-relaxed mb-0">
                  {mensagemFinal
                    ? mensagemFinal
                    : "Selecione um dia e um horário acima para montar a mensagem."}
                </p>
              </div>

              {/* Botão confirmar */}
              <a
                href={mensagemFinal ? waLink(mensagemFinal) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!mensagemFinal) e.preventDefault();
                }}
                className={`mt-6 w-full flex items-center justify-center gap-2 py-4 px-6 rounded-md font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  mensagemFinal
                    ? "bg-primary text-primary-foreground hover:bg-accent hover:text-primary shadow-lg"
                    : "bg-foreground/10 text-foreground/40 cursor-not-allowed"
                }`}
              >
                <MessageCircle size={18} />
                Confirmar agendamento no WhatsApp
              </a>
            </>
          )}
        </motion.section>

        {/* ================================================================= */}
        {/* OPÇÃO 2: ATENDIMENTO IMEDIATO (PLANTÃO)                           */}
        {/* ================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary text-primary-foreground rounded-2xl shadow-xl p-6 md:p-8 mt-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-2 bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  <Zap size={12} />
                  Plantão agora
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white mb-2">
                Atendimento imediato
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-0">
                Precisa falar agora? Estou de plantão aguardando você. Clique no botão e sua
                mensagem chega direto no meu WhatsApp — eu atendo assim que chegar.
              </p>
            </div>
            <a
              href={waLink(mensagemImediata)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center gap-2 bg-white text-primary hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-8 rounded-md font-semibold text-sm uppercase tracking-wider shadow-lg"
            >
              <MessageCircle size={18} />
              Chamar agora
            </a>
          </div>
        </motion.section>

        {/* ================================================================= */}
        {/* OPÇÃO 3: DÚVIDAS SOBRE O PROCESSO                                 */}
        {/* ================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-border/50 rounded-2xl shadow-sm p-6 md:p-8 mt-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
              <HelpCircle size={20} />
            </span>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
              Tenho dúvidas sobre o processo terapêutico
            </h2>
          </div>
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6">
            Totalmente normal — e até recomendado. Se você ainda está avaliando se este é o
            momento certo, ou como o trabalho funciona, me chame para conversar. Sem
            compromisso de agendar.
          </p>
          <a
            href={waLink(mensagemDuvidas)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 py-3.5 px-8 rounded-md font-semibold text-sm uppercase tracking-wider"
          >
            <MessageCircle size={18} />
            Conversar e tirar dúvidas
          </a>
        </motion.section>

        {/* Nota de sigilo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-start justify-center gap-3 text-center mt-10"
        >
          <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-foreground/50 leading-relaxed max-w-md mb-0">
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
