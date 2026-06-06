import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, Award, Clock, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Jorge Dias — Terapêuta Especialista em Narcisismo";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Atendimento clínico com Jorge Dias, Psicoterapeuta especialista em narcisismo. Terapia online para quem sofre em relações narcisistas ou reconhece esses padrões em si mesmo."
    );

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "A Dinâmica", href: "#dinamica" },
    { name: "O Profissional", href: "#profissional" },
    { name: "A Clínica", href: "#clinica" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/obrigado");
  };

  const toggleAccordion = (id: string) =>
    setOpenAccordion(openAccordion === id ? null : id);
  const toggleFaq = (id: string) =>
    setOpenFaq(openFaq === id ? null : id);

  const accordions = [
    {
      id: "apagamento",
      title: "O controle pelo apagamento",
      body: "Críticas constantes, invalidação, manipulação e comportamentos que te fazem <strong>duvidar de si mesmo</strong>. Sua vontade é substituída pela do outro de forma tão gradual que você não percebe quando deixou de pensar em si.",
    },
    {
      id: "cuidado",
      title: 'O controle pelo excesso de cuidado',
      body: 'Atenção excessiva, presença constante, "ajuda" que nunca foi pedida. Esse padrão é mais difícil de reconhecer — porque <strong>parece amor</strong>. Com o tempo, a dependência se instala e qualquer movimento de autonomia é lido como <strong>abandono ou ingratidão</strong>.',
    },
  ];

  const faqs = [
    {
      id: "outro",
      title: '"Busco ajuda para meu companheiro, não para mim"',
      body: 'Essa é uma das formas mais comuns de chegar até aqui — e faz todo sentido. É importante ressaltar que o processo terapêutico só funciona quando a pessoa que vai ser atendida <strong>deseja iniciar o processo terapeutico</strong>. A terapia especializada ajuda a entender como surgiram os comportamentos e como eles se mantém.',
    },
    {
      id: "eu",
      title: '"Posso ser eu o narcisista sem saber?"',
      body: "Essa pergunta, por si só, já diz muito. Quem está genuinamente preso num padrão narcisista patológico raramente se faz essa pergunta. O fato de você questionar indica que <strong>sua empatia está ativa</strong>. O objetivo não é entregar um rótulo — é entender de onde vêm esses padrões e como eles afetam suas relações.",
    },
    {
      id: "crise",
      title: '"Terapia é para quem está em crise grave?"',
      body: "Não. A terapia é para quem percebe que as ferramentas que tem não estão sendo suficientes para lidar com o que está vivendo. Você não precisa estar no fundo do poço para merecer ajuda especializada.",
    },
    {
      id: "reproduzir",
      title: '"Posso reproduzir comportamentos narcisistas?"',
      body: "Sim — e isso é muito mais comum do que parece. A reprodução de comportamentos narcisistas está quase sempre ligada à dependência emocional. A diferença entre reproduzir um comportamento e ter o transtorno está na capacidade de reconhecer o próprio impacto. Esses casos respondem muito bem ao processo terapêutico.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Lora', Georgia, serif",
        background: "#F7F5F0",
        color: "#2E2C28",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }

        body { margin: 0; }

        .font-sans { font-family: 'DM Sans', sans-serif; }

        /* NAV LINKS */
        .nav-link-organic {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #5C5951;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-link-organic:hover { color: #3C4A32; }

        /* BUTTONS */
        .btn-primary-organic {
          display: inline-block;
          background: #5B6B4E;
          color: #F0EDE6;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 15px 32px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s;
          cursor: pointer;
          border: none;
        }
        .btn-primary-organic:hover { background: #3C4A32; color: #F0EDE6; }

        .btn-ghost-organic {
          display: inline-block;
          background: transparent;
          color: #5B6B4E;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 13px 32px;
          border-radius: 6px;
          border: 1px solid #A8B89A;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }
        .btn-ghost-organic:hover { background: #EEF2EA; border-color: #5B6B4E; }

        /* SYMPTOM CARDS */
        .symptom-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #FFFFFF;
          border: 0.5px solid #E0DBD0;
          border-radius: 10px;
          padding: 16px 18px;
        }

        /* ACCORDION */
        .accordion-organic {
          background: #FFFFFF;
          border: 0.5px solid #E0DBD0;
          border-radius: 10px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .accordion-organic:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .accordion-header-organic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          cursor: pointer;
          user-select: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          gap: 12px;
        }
        .accordion-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #2E2C28;
          margin: 0;
          flex: 1;
        }
        .accordion-body-organic {
          padding: 0 20px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #5C5951;
          line-height: 1.75;
          border-top: 0.5px solid #EDE9E1;
          padding-top: 14px;
          margin-top: 0;
        }

        /* STEPS */
        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #5B6B4E;
          color: #F0EDE6;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* CRED CARDS */
        .cred-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          border: 0.5px solid #E0DBD0;
          border-radius: 8px;
          padding: 12px 14px;
        }

        /* SECTION ALTERNATION */
        .section-cream  { background: #FAF8F4; }
        .section-sage   { background: #EEF2EA; }
        .section-white  { background: #FFFFFF; }
        .section-hero   { background: #EEE9DF; }
        .section-dark   { background: #3C4A32; }

        /* ANNOTATION */
        .annotation-tag {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6B7C5E;
          background: #EEF2EA;
          border-left: 2px solid #8A9E7C;
          padding: 8px 14px;
          border-radius: 0 6px 6px 0;
          margin-top: 16px;
          font-style: italic;
        }

        /* MOBILE MENU */
        .mobile-nav-link {
          font-family: 'Lora', serif;
          font-size: 26px;
          font-weight: 400;
          color: #2E2C28;
          text-decoration: none;
          display: block;
          padding: 8px 0;
        }
        .mobile-nav-link:hover { color: #5B6B4E; }

        /* QUOTE BLOCKS */
        .quote-block {
          border-left: 2px solid #A8B89A;
          padding: 14px 18px;
          border-radius: 0 8px 8px 0;
          background: #FFFFFF;
        }

        /* FAB */
        .fab-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 100;
          background: #5B6B4E;
          color: #F0EDE6;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(91,107,78,0.35);
          transition: transform 0.2s, background 0.2s;
          border: none;
          cursor: pointer;
        }
        .fab-btn:hover { transform: scale(1.08); background: #3C4A32; }

        .fab-label {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%);
          background: #3C4A32;
          color: #F0EDE6;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 14px;
          white-space: nowrap;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
        }
        .fab-btn:hover .fab-label { opacity: 1; }

        @media (max-width: 768px) {
          .fab-label { display: none; }
        }

        /* SCROLL ANIMATIONS */
        .fade-up {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ─── HEADER ─── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s",
          background: isScrolled ? "rgba(247,245,240,0.96)" : "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          borderBottom: isScrolled ? "0.5px solid #E0DBD0" : "none",
          padding: isScrolled ? "12px 0" : "22px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'Lora', serif",
              fontSize: 16,
              fontWeight: 500,
              color: "#2E2C28",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Jorge Dias{" "}
            <span
              style={{
                fontWeight: 400,
                color: "#7A7570",
                fontSize: 14,
                fontStyle: "italic",
              }}
            >
              — Psicoterapeuta
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link-organic">
                {link.name}
              </a>
            ))}
            <a
              href="#clinica"
              className="btn-primary-organic"
              style={{ padding: "10px 22px" }}
            >
              Agendar sessão
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2E2C28",
              padding: 4,
            }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <style>{`
        @media (min-width: 769px) {
          button[aria-label="Abrir menu"] { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              background: "#FAF8F4",
              display: "flex",
              flexDirection: "column",
              padding: "32px 28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 40 }}>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#2E2C28" }}
                aria-label="Fechar menu"
              >
                <X size={26} />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div style={{ marginTop: "auto" }}>
              <a
                href="#clinica"
                className="btn-primary-organic"
                style={{ display: "block", textAlign: "center" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar sessão
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* ─── HERO ─── */}
        <section
          className="section-hero"
          style={{
            minHeight: "90svh",
            display: "flex",
            alignItems: "center",
            paddingTop: 100,
            paddingBottom: 64,
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ maxWidth: 640 }}
            >
              <span
                className="font-sans"
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6B7C5E",
                  background: "#D6DFD0",
                  padding: "5px 14px",
                  borderRadius: 20,
                  marginBottom: 24,
                }}
              >
                Terapeuta especialista em narcisismo · Atendimento online
              </span>

              <h1
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "clamp(28px, 5vw, 48px)",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: "#2E2C28",
                  marginBottom: 20,
                  letterSpacing: "-0.01em",
                }}
              >
                Relacionamentos narcisistas prendem as duas pessoas envolvidas —{" "}
                <em>cada uma à sua maneira.</em>
              </h1>

              <p
                className="font-sans"
                style={{
                  fontSize: 17,
                  color: "#5C5951",
                  lineHeight: 1.7,
                  marginBottom: 36,
                  maxWidth: 520,
                }}
              >
                Quem sofre não consegue sair. Quem machuca não consegue parar.
                A terapia especializada existe para quebrar esse ciclo, de
                qualquer lado que você esteja.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#clinica" className="btn-primary-organic">
                  Agendar uma sessão
                </a>
                <a href="#dinamica" className="btn-ghost-organic">
                  Entender o que está acontecendo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── VALIDAÇÃO ─── */}
        <section className="section-cream" style={{ padding: "56px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <span
              className="font-sans"
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8A9E7C",
                marginBottom: 24,
              }}
            >
              Você se reconhece nisso?
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Sente que algo está errado na relação, mas não consegue resolver.",
                "Percebe que alguém próximo a você repete padrões que machucam, mas não sabe como ajudar.",
                "Quer mudar comportamentos seus que prejudicam as pessoas que ama, mas não sabe por onde começar.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="symptom-item"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#8A9E7C",
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                  <p
                    className="font-sans"
                    style={{
                      fontSize: 15,
                      color: "#3C3A35",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <span className="annotation-tag">
              Esse é o ponto de partida. Não precisa ter tudo claro para começar.
            </span>
          </div>
        </section>

        {/* ─── A DINÂMICA ─── */}
        <section
          id="dinamica"
          className="section-white"
          style={{ padding: "64px 24px" }}
        >
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <span
              className="font-sans"
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8A9E7C",
                marginBottom: 16,
              }}
            >
              A dinâmica
            </span>

            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: 500,
                color: "#2E2C28",
                lineHeight: 1.35,
                marginBottom: 28,
              }}
            >
              O que mantém esse ciclo funcionando
            </h2>

            <div
              className="font-sans"
              style={{
                fontSize: 16,
                color: "#5C5951",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p>
                Nas relações com padrões narcisistas, existe uma dinâmica que
                se repete de forma constante.
              </p>
                <p>
                De um lado, quem convive com esses comportamentos vai aos poucos
                perdendo a referência de si mesmo. <strong>As decisões passam a girar em
                torno do outro</strong>.
                </p> 
                <p>
                O medo de reagir, a culpa constante e o
                isolamento gradual não aparecem de uma vez — chegam tão
                devagar que <strong>parecem normais</strong>.
              </p>
              <p>
                Do outro lado, quem reproduz esses comportamentos também sofre
                — mas de forma diferente. Há uma dificuldade real em <strong>tolerar a
                 vontade do outro</strong>, em lidar com o limite, em sustentar uma
                relação sem precisar ocupar o centro dela.
              </p>
              <p>
                O que mantém os dois presos é a{" "}
                <strong style={{ color: "#3C3A35", fontWeight: 500 }}>
                  Dependência Emocional
                </strong>{" "}
                — um vínculo construído não sobre afeto, mas sobre necessidade.
              </p>
            </div>

            {/* Dois tipos de controle */}
            <h3
              style={{
                fontFamily: "'Lora', serif",
                fontSize: 20,
                fontWeight: 500,
                color: "#2E2C28",
                marginTop: 48,
                marginBottom: 16,
              }}
            >
              Como esse padrão se repete
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {accordions.map(({ id, title, body }) => (
                <div key={id} className="accordion-organic">
                  <button
                    className="accordion-header-organic"
                    onClick={() => toggleAccordion(id)}
                    aria-expanded={openAccordion === id}
                  >
                    <span className="accordion-title">{title}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: "#8A9E7C",
                        flexShrink: 0,
                        transition: "transform 0.3s",
                        transform:
                          openAccordion === id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openAccordion === id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-body-organic">{body}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Fechamento */}
            <div
              className="font-sans"
              style={{
                fontSize: 16,
                color: "#5C5951",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginTop: 32,
              }}
            >
              <p>
                Nos dois casos, o resultado é o mesmo: <strong>a relação passa a
                funcionar em torno de uma pessoa só</strong>. E quem está fora desse
                centro perde, aos poucos, o sentido de quem é.
              </p>
              <p>
                A terapia especializada não começa pelo outro. Começa por você
                — entendendo o que aconteceu, o que ainda acontece, e o que é
                possível mudar.
              </p>
            </div>

            {/* Quote blocks */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 14,
                marginTop: 36,
              }}
            >
              <div className="quote-block">
                <p
                  className="font-sans"
                  style={{
                    fontSize: 14,
                    color: "#4A4843",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  "Se você impõe um limite, é interpretado como ofensa. O medo
                  é usado para causar{" "}
                  <strong style={{ fontStyle: "normal" }}>
                    Dependência Emocional.
                  </strong>
                  "
                </p>
              </div>
              <div className="quote-block">
                <p
                  className="font-sans"
                  style={{
                    fontSize: 14,
                    color: "#4A4843",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  "Se você recusa a ajuda oferecida, é interpretado como ingratidão. A culpa é
                  usada para causar{" "}
                  <strong style={{ fontStyle: "normal" }}>
                    Dependência Emocional.
                  </strong>
                  "
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROCESSO ─── */}
        <section className="section-sage" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <span
              className="font-sans"
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6B7C5E",
                marginBottom: 16,
              }}
            >
              O processo
            </span>

            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: 500,
                color: "#2E2C28",
                lineHeight: 1.35,
                marginBottom: 36,
              }}
            >
              Como a terapia funciona
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Entender a dinâmica da relação e o que ela fez com você.",
                "Trabalhar os padrões que te mantêm preso nesse ciclo.",
                "Construir autonomia e critério para suas próprias decisões.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div className="step-num">{i + 1}</div>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: 15,
                      color: "#3C3A35",
                      lineHeight: 1.65,
                      margin: 0,
                      paddingTop: 5,
                    }}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: 40, textAlign: "center" }}>
              <a href="#clinica" className="btn-primary-organic">
                Quero iniciar meu processo
              </a>
            </div>
          </div>
        </section>

        {/* ─── DÚVIDAS ─── */}
        <section className="section-white" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <span
              className="font-sans"
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8A9E7C",
                marginBottom: 16,
              }}
            >
              Dúvidas frequentes
            </span>

            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: 500,
                color: "#2E2C28",
                lineHeight: 1.35,
                marginBottom: 28,
              }}
            >
              Perguntas que chegam com frequência
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map(({ id, title, body }) => (
                <div key={id} className="accordion-organic">
                  <button
                    className="accordion-header-organic"
                    onClick={() => toggleFaq(id)}
                    aria-expanded={openFaq === id}
                  >
                    <span
                      className="accordion-title"
                      style={{ fontSize: 15, fontStyle: "italic", fontFamily: "'Lora', serif", fontWeight: 400 }}
                    >
                      {title}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: "#8A9E7C",
                        flexShrink: 0,
                        transition: "transform 0.3s",
                        transform:
                          openFaq === id ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-body-organic">{body}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── O PROFISSIONAL ─── */}
        <section
          id="profissional"
          className="section-cream"
          style={{ padding: "64px 24px" }}
        >
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <span
              className="font-sans"
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8A9E7C",
                marginBottom: 24,
              }}
            >
              O profissional
            </span>

            <div
              style={{
                background: "#F0EDE6",
                borderRadius: 14,
                padding: "24px 24px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                marginBottom: 20,
                border: "0.5px solid #E0DBD0",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "2px solid #FFFFFF",
                }}
              >
                <img
                  src="JorgeDias.jpeg"
                  alt="Jorge Dias - Psicoterapeuta Clínico"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#2E2C28",
                    margin: "0 0 6px",
                  }}
                >
                  Jorge Dias
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: 14, color: "#6B6660", lineHeight: 1.6, margin: 0 }}
                >
                  Psicólogo clínico com foco em relacionamentos narcisistas e
                  dependência emocional.
                </p>
              </div>
            </div>

            <p
              className="font-sans"
              style={{
                fontSize: 15,
                color: "#5C5951",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              
              O atendimento é conduzido sem julgamento moral. O foco não é
              definir quem tem razão na relação — é entender o que está
              acontecendo e construir um <strong>caminho de resolução</strong>.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="cred-item">
                <GraduationCap size={20} style={{ color: "#8A9E7C", flexShrink: 0 }} />
                <p
                  className="font-sans"
                  style={{ fontSize: 13, color: "#3C3A35", margin: 0 }}
                >
                  Graduado em Psicologia — <strong>Universidade Estadual de Londrina</strong>
                </p>
              </div>
              <div className="cred-item">
                <Award size={20} style={{ color: "#8A9E7C", flexShrink: 0 }} />
                <p
                  className="font-sans"
                  style={{ fontSize: 13, color: "#3C3A35", margin: 0 }}
                >
                  Especialista em <strong>Narcisismo e Dependência Emocional</strong>
                </p>
              </div>
              <div className="cred-item">
                <Clock size={20} style={{ color: "#8A9E7C", flexShrink: 0 }} />
                <p
                  className="font-sans"
                  style={{ fontSize: 13, color: "#3C3A35", margin: 0 }}
                >
                  <strong>+3.000</strong> horas de atendimento clínico
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── A CLÍNICA / CTA ─── */}
        <section
          id="clinica"
          className="section-dark"
          style={{ padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span
              className="font-sans"
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#A8B89A",
                marginBottom: 16,
              }}
            >
              Atendimento online
            </span>

            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 500,
                color: "#F0EDE6",
                lineHeight: 1.35,
                marginBottom: 48,
              }}
            >
              Como funciona o atendimento
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 32,
                alignItems: "start",
              }}
            >
              {/* Processo */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  {
                    num: "1",
                    title: "A primeira sessão",
                    body: "Um espaço para você contar o que está vivendo, sem pressa e sem julgamento. O objetivo é entender sua história e o que te trouxe até aqui.",
                  },
                  {
                    num: "2",
                    title: "O acompanhamento",
                    body: "Sessões semanais de 50 minutos, online via Google Meet, com total sigilo. O ritmo respeita o seu processo — não existe fórmula pronta.",
                  },
                ].map(({ num, title, body }) => (
                  <div key={num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div
                      className="step-num"
                      style={{ background: "#8A9E7C", color: "#F0EDE6" }}
                    >
                      {num}
                    </div>
                    <div>
                      <p
                        className="font-sans"
                        style={{
                          fontSize: 15,
                          fontWeight: 500,
                          color: "#F0EDE6",
                          margin: "0 0 6px",
                        }}
                      >
                        {title}
                      </p>
                      <p
                        className="font-sans"
                        style={{
                          fontSize: 14,
                          color: "#C8D4BF",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card de agendamento */}
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  padding: "32px 28px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <span
                  className="font-sans"
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9A9590",
                    marginBottom: 16,
                    display: "block",
                  }}
                >
                  Atendimento Particular <strong>100% online</strong>
                </span>

                <p
                  className="font-sans"
                  style={{ fontSize: 13, color: "#7A7570", marginBottom: 6 }}
                >
                  Valor da sessão
                </p>
                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#2E2C28",
                    marginBottom: 28,
                  }}
                >
                  R$100
                </p>

                <button
                  onClick={handleContactClick}
                  className="btn-primary-organic"
                  style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
                >
                  Consultar disponibilidade
                </button>

                <p
                  className="font-sans"
                  style={{
                    fontSize: 12,
                    color: "#9A9590",
                    fontStyle: "italic",
                    marginTop: 12,
                  }}
                >
                  Agendamento direto via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: "#F7F5F0",
          borderTop: "0.5px solid #E0DBD0",
          padding: "28px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            className="font-sans"
            style={{ fontSize: 11, color: "#9A9590", letterSpacing: "0.04em" }}
          >
            © {new Date().getFullYear()} Jorge Dias — Psicoterapia Clínica.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link
              href="/politica-privacidade"
              className="font-sans"
              style={{ fontSize: 11, color: "#9A9590", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Privacidade
            </Link>
            <Link
              href="/termos-uso"
              className="font-sans"
              style={{ fontSize: 11, color: "#9A9590", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Termos
            </Link>
          </div>
        </div>
      </footer>

      {/* ─── FAB ─── */}
      <button
        className="fab-btn"
        onClick={handleContactClick}
        aria-label="Consultar disponibilidade"
      >
        <span className="fab-label">Consultar disponibilidade</span>
        <MessageCircle size={24} fill="currentColor" />
      </button>
    </div>
  );
}