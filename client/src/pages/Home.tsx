import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, Award, Clock, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const paraQuem = [
  {
    title: "Quero me conhecer melhor",
    text: "Às vezes lidamos com uma sensação de estranheza ou desconexão com os próprios pensamentos e sentimentos. Esse incômodo é um primeiro passo importante para questionar e reconstruir. Aqui você não será encaixado em um rótulo: vamos direcionar juntos suas perguntas e percepções por um caminho filosófico construtivo.",
  },
  {
    title: "Sentimento de vazio existencial",
    text: "O vazio tem muito a dizer. Pode ser o “piloto automático”, a perda de algo ou alguém, o cansaço de viver sempre as mesmas coisas, a vontade de mudança ou a dificuldade de nomear algo ainda não compreendido. A abordagem existencial ajuda a sentir, nomear e elaborar esse vazio de forma saudável.",
  },
  {
    title: "Crise existencial",
    text: "Em geral, indica um período de transição: as bases que sustentavam sua visão de mundo já não bastam como antes. É uma oportunidade de se aprofundar em si e criar novas bases, mais fiéis aos seus valores, ações e movimentos.",
  },
  {
    title: "Dificuldade em fazer escolhas",
    text: "Viver e agir não é de graça: a cada escolha abrimos mão de algo. Compreender e lidar com o peso de escolher faz parte da experiência humana. O autoconhecimento ajuda a entender as dinâmicas de ação e consequência que atravessam a existência de cada um.",
  },
];

const faqs = [
  {
    q: "Preciso estar em crise para fazer terapia existencial?",
    a: "Não. Atendo tanto quem passa por sofrimento ou crise quanto quem busca autoconhecimento sem queixa específica. Muita gente procura a terapia justamente em momentos de relativa estabilidade, para se conhecer melhor e pensar nos rumos da vida.",
  },
  {
    q: "Terapia existencial é filosofia? Vou receber respostas sobre o sentido da vida?",
    a: "A abordagem tem base filosófica, mas o atendimento é psicoterapia clínica, com ética e sigilo profissionais. Não existe uma resposta pronta sobre o sentido da vida. O trabalho é ajudar você a compreender o sentido que as experiências têm para você.",
  },
  {
    q: "Qual a diferença para outras abordagens, como a TCC?",
    a: "A TCC é estruturada e trabalha pensamentos, comportamentos e sintomas definidos, sendo muito eficaz em vários quadros. A terapia existencial parte da experiência vivida de cada pessoa, sem protocolos fixos. São caminhos distintos e, em alguns casos, complementares.",
  },
  {
    q: "Quanto tempo dura a terapia?",
    a: "Não há duração pré-definida. As sessões são semanais e, periodicamente, conversamos sobre objetivos e andamento, para que o processo continue fazendo sentido para você.",
  },
  {
    q: "Posso usar IA (como o ChatGPT) no lugar da terapia?",
    a: "Pode ser um apoio para organizar pensamentos, mas não substitui o acompanhamento psicológico: não tem responsabilidade clínica nem ética profissional, e a terapia depende do vínculo e da constância entre duas pessoas. Em momentos de crise, procure ajuda humana.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Psicoterapia Existencial e Autoconhecimento | Jorge Dias";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Psicoterapia existencial online para quem quer se conhecer melhor e pensar o sentido da própria vida. Psicólogo com especialização em existencialismo fenomenológico."
    );

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Para quem é", href: "#para-quem" },
    { name: "A terapia", href: "#terapia" },
    { name: "Sobre mim", href: "#profissional" },
    { name: "Atendimento", href: "#clinica" },
    { name: "Dúvidas", href: "#duvidas" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/obrigado");
  };

  return (
    <div className="selection:bg-accent/30 selection:text-primary">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <nav className="container flex items-center justify-between">
          <Link href="/" className="font-display text-lg md:text-xl font-bold tracking-tighter text-primary">
            Jorge Dias — <span className="font-normal opacity-70">Psicoterapia existencial e autoconhecimento</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menu">
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO */}
        <section className="relative min-h-[90svh] lg:min-h-[85vh] flex items-end lg:items-center pb-16 pt-32 lg:pt-16 lg:pb-0 bg-background overflow-hidden">
          {/* Imagem de fundo (mobile) — cinza suave: ajuste grayscale-[50%] entre 0% e 100% */}
          <div className="absolute inset-0 z-0 lg:hidden">
            <img
              src="jorge-background.webp"
              alt="Jorge Dias - Psicólogo"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-top grayscale-[50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>
          </div>

          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/80 lg:text-accent uppercase text-xs md:text-sm tracking-widest font-semibold mb-4 block">
                Psicoterapia existencial · Online
              </span>

              <h1 className="font-display text-white lg:text-foreground mb-6 lg:mb-4">
                Terapia existencial para <br className="hidden md:block" />
                <span className="italic">autoconhecimento e busca de sentido</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 lg:text-accent font-serif leading-relaxed mb-10 max-w-xl">
                Acompanhamento com base filosófica para quem busca se aprofundar no conhecimento de si e construir raízes sólidas no mundo.
              </p>

              <a
                href="#terapia"
                className="btn-high-ticket !bg-white !text-black hover:!bg-gray-200 lg:!bg-primary lg:!text-primary-foreground lg:hover:!bg-accent lg:hover:!text-primary shadow-2xl lg:shadow-none"
              >
                entenda a abordagem
              </a>
            </motion.div>

            {/* Imagem lateral (desktop) — cinza suave, cor total ao passar o mouse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-secondary overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-700 shadow-2xl"
            >
              <img
                src="jorge-background.webp"
                alt="Jorge Dias - Psicólogo"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </motion.div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section id="para-quem" className="section-padding bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-center mb-12">Para quem é</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paraQuem.map((item) => (
                  <div key={item.title} className="bg-secondary/10 border border-border/40 rounded-xl p-8">
                    <h3 className="text-xl font-display font-semibold text-primary mb-4">{item.title}</h3>
                    <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-0">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* A TERAPIA + DASEINSANÁLISE */}
        <section id="terapia" className="section-padding bg-[#ECEEEF] border-y border-border/30">
          <div className="container">
            <div className="max-w-3xl mx-auto manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
              <h2 className="text-center mb-10">O que é a terapia existencial</h2>
              <p>
                Costumo dizer que <strong>cada ser humano é como um universo</strong>. A terapia existencial não parte da ideia de que todos temos a mesma base e de que o mundo a modifica. Parte do fato de que temos origens, famílias e contextos diferentes, e busca compreender <strong>o que o mundo é para você</strong>.
              </p>
              <p>
                Mesmo com experiências e caminhos parecidos, cada pessoa vive e interpreta o que passa de forma única. Por isso, o trabalho é compreender o sentido que cada experiência tem em você: um processo constante de viver, sentir e compreender a si mesmo e a relação com o ambiente.
              </p>

              <h3 className="pt-6 text-center">Como são as primeiras sessões</h3>
              <p>
                As primeiras sessões buscam criar uma conexão com <strong>leveza e transparência</strong>. Você não precisa trazer um tema organizado nem uma demanda específica: basta se sentir confortável para falar sobre o que estiver vivendo.
              </p>
              <p>
                Você conhece minha forma de trabalhar, eu conheço sua forma de se expressar e sentir, e juntos criamos o ritmo da terapia.
              </p>

              <div className="bg-white p-8 rounded-xl border border-border/40 shadow-sm mt-10">
                <h3 className="text-xl md:text-2xl font-display text-primary mb-4 pt-0">Daseinsanálise</h3>
                <p className="text-base md:text-lg mb-4">
                  Perspectiva de terapia baseada na filosofia de Martin Heidegger. “Dasein” significa <strong>ser-no-mundo</strong>. O ponto de partida é romper com a separação entre sujeito e objeto, pela qual costumamos olhar o mundo: o ser humano não é alguém isolado que interage com um mundo externo. A existência humana é relacional.
                </p>
                <p className="text-base md:text-lg mb-0">
                  Nessa visão, o ser humano não é quem cria, nomeia e molda a existência, mas uma das formas pelas quais a própria existência experiencia a si mesma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O PROFISSIONAL */}
        <section id="profissional" className="section-padding bg-white">
          <div className="container">
            <div className="max-w-1xl mx-auto">
              <h2 className="text-center mb-12">Sobre o profissional</h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-secondary/20 p-8 md:p-12 rounded-2xl border border-border/40 shadow-sm">
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative w-48 h-48 md:w-full md:h-64 rounded-full md:rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src="JorgeDias.jpeg"
                      alt="Jorge Dias - Psicólogo"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <h4 className="text-2xl font-display text-primary mb-2">Jorge Dias</h4>
                  <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                    <p>
                      Sou Jorge Dias, psicólogo (CRP 08/31462), graduado pela Universidade Estadual de Londrina, com especialização em <strong>Fenomenologia Existencialista, Neuropsicologia e Transtornos de Personalidade</strong>.
                    </p>
                    <p>
                      Atuo com uma perspectiva que não reduz a experiência humana a padrões, comportamentos ou transtornos. Os padrões que enxergamos e nomeamos estão presentes em todos nós, e os vejo como <strong>resultado da experiência humana</strong>, não como base fixa ou definidora. A formação em neuropsicologia e transtornos de personalidade me ajudou a compreender esses resultados com profundidade.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">
                      <GraduationCap className="text-accent shrink-0" size={24} />
                      <span className="text-sm font-semibold text-foreground/90">Graduado em <strong>Psicologia</strong> pela Universidade Estadual de Londrina</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">
                      <Award className="text-accent shrink-0" size={24} />
                      <span className="text-sm font-semibold text-foreground/90">Especialização em Fenomenologia Existencialista, Neuropsicologia e Transtornos de Personalidade</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50 sm:col-span-2">
                      <Clock className="text-accent shrink-0" size={24} />
                      <span className="text-sm font-semibold text-foreground/90">+3.000 horas de atendimento clínico</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ATENDIMENTO */}
        <section className="section-padding bg-primary text-primary-foreground" id="clinica">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 p-10 md:p-14 shadow-2xl rounded-2xl">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-lg mb-1">Primeira sessão</h4>
                      <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Acolhimento, apresentação da abordagem e alinhamento do que você busca. Ao final, decidimos juntos se o formato faz sentido para você.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-lg mb-1">Acompanhamento</h4>
                      <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Atendimento individual, sessões semanais de 50 minutos, por videochamada (Google Meet), com sigilo conforme o Código de Ética do Psicólogo.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center h-full shadow-xl">
                  <span className="uppercase tracking-widest text-xs font-bold text-foreground/50 mb-4 block">
                    Atendimento 100% online
                  </span>
                  <span className="text-sm text-foreground/80 mb-10 block">Valor da sessão: <strong>R$130</strong></span>
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-6 rounded-md font-semibold text-sm uppercase tracking-wider mb-4"
                  >
                    Agendar primeira sessão
                  </button>
                  <p className="text-xs text-foreground/50 italic mb-0">Agendamento direto via WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIMITES DA TERAPIA */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto border border-border/50 rounded-xl p-8 bg-secondary/10">
              <h3 className="text-xl font-display font-semibold text-primary mb-3 mt-0">O que a terapia não faz</h3>
              <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-0">
                A terapia existencial não substitui avaliação psiquiátrica quando ela é necessária, nem atendimento de emergência. Se você estiver em sofrimento agudo ou pensando em se machucar, procure ajuda imediata: <strong>CVV, 188</strong>, ou um serviço de urgência. Quando o quadro pede, o encaminhamento faz parte do cuidado.
              </p>
            </div>
          </div>
        </section>

        {/* PERGUNTAS FREQUENTES */}
        <section id="duvidas" className="section-padding bg-white !pt-4">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-10">Dúvidas frequentes</h2>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none"
                  >
                    <summary className="font-display text-lg md:text-xl font-semibold text-primary list-none flex justify-between items-center">
                      <span>{item.q}</span>
                      <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>
                    </summary>
                    <div
                      className="mt-6 text-base md:text-lg text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="mb-0">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-[#ECEEEF] border-t border-border/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-display text-primary leading-relaxed mb-8">
                Para agendar sua primeira sessão ou tirar dúvidas, fale comigo pelo WhatsApp.
              </p>
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-10 rounded-md font-semibold text-sm uppercase tracking-wider shadow-lg"
              >
                Agendar primeira sessão
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Jorge Dias — Psicologia Clínica · CRP 08/31462 · Em caso de crise, ligue 188 (CVV)
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold">
            <Link href="/politica-privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="/termos-uso" className="hover:text-primary transition-colors">Termos</Link>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <button
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("clinica")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="fixed bottom-8 right-8 z-[100] bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
        aria-label="Ver valor e agendar"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block uppercase tracking-widest font-bold">
          Ver valor e agendar
        </span>
      </button>
    </div>
  );
}
