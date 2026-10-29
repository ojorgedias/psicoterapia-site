import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
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

const credenciais = [
  "Graduação em Psicologia, Universidade Estadual de Londrina",
  "Especialização em Fenomenologia Existencialista",
  "Especialização em Neuropsicologia",
  "Especialização em Transtornos de Personalidade",
  "+3.000 horas de atendimento clínico",
];

const navLinks = [
  { name: "Para quem é", href: "#para-quem" },
  { name: "A terapia", href: "#terapia" },
  { name: "Sobre mim", href: "#profissional" },
  { name: "Atendimento", href: "#clinica" },
  { name: "Dúvidas", href: "#duvidas" },
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

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/obrigado");
  };

  return (
    <div className="selection:bg-primary/20">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "py-3 border-b border-border" : "py-6 border-b border-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between">
          <Link href="/" className="font-display text-lg md:text-xl text-foreground">
            Jorge Dias<span className="hidden sm:inline text-muted-foreground"> — Psicoterapia existencial e autoconhecimento</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>
          <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menu">
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
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
                  className="text-2xl font-display text-foreground"
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
        <section className="pt-32 pb-20 lg:pt-44 lg:pb-32">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1 lg:col-span-7"
            >
              <h1>Terapia existencial para autoconhecimento e busca de sentido</h1>
              <p className="text-xl text-muted-foreground max-w-xl mb-10">
                Acompanhamento com base filosófica para quem busca se aprofundar no conhecimento de si e construir raízes sólidas no mundo.
              </p>
              <a href="#terapia" className="btn-high-ticket">
                Entenda a abordagem
              </a>
            </motion.div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <img
                src="jorge-background.webp"
                alt="Jorge Dias, psicólogo"
                fetchPriority="high"
                className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section id="para-quem" className="section-padding">
          <div className="container">
            <h2 className="mb-16">Para quem é</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
              {paraQuem.map((item) => (
                <div key={item.title} className="border-t border-border pt-6">
                  <h3>{item.title}</h3>
                  <p className="text-base text-foreground/80 mb-0">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A TERAPIA + DASEINSANÁLISE */}
        <section id="terapia" className="section-padding bg-secondary">
          <div className="container">
            <div className="manifesto-text">
              <h2>O que é a terapia existencial</h2>
              <p>
                Costumo dizer que cada ser humano é como um universo. A terapia existencial não parte da ideia de que todos temos a mesma base e de que o mundo a modifica. Parte do fato de que temos origens, famílias e contextos diferentes, e busca compreender o que o mundo é para você.
              </p>
              <p>
                Mesmo com experiências e caminhos parecidos, cada pessoa vive e interpreta o que passa de forma única. Por isso, o trabalho é compreender o sentido que cada experiência tem em você: um processo constante de viver, sentir e compreender a si mesmo e a relação com o ambiente.
              </p>

              <h3 className="mt-16">Como são as primeiras sessões</h3>
              <p>
                As primeiras sessões buscam criar uma conexão com leveza e transparência. Você não precisa trazer um tema organizado nem uma demanda específica: basta se sentir confortável para falar sobre o que estiver vivendo.
              </p>
              <p>
                Você conhece minha forma de trabalhar, eu conheço sua forma de se expressar e sentir, e juntos criamos o ritmo da terapia.
              </p>

              <div className="border-l-2 border-primary/40 pl-6 mt-16">
                <h3>Daseinsanálise</h3>
                <p className="text-base md:text-lg">
                  Perspectiva de terapia baseada na filosofia de Martin Heidegger. “Dasein” significa ser-no-mundo. O ponto de partida é romper com a separação entre sujeito e objeto, pela qual costumamos olhar o mundo: o ser humano não é alguém isolado que interage com um mundo externo. A existência humana é relacional.
                </p>
                <p className="text-base md:text-lg mb-0">
                  Nessa visão, o ser humano não é quem cria, nomeia e molda a existência, mas uma das formas pelas quais a própria existência experiencia a si mesma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O PROFISSIONAL */}
        <section id="profissional" className="section-padding">
          <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-4">
              <img
                src="JorgeDias.jpeg"
                alt="Jorge Dias, psicólogo"
                decoding="async"
                className="w-full max-w-xs md:max-w-none aspect-[4/5] object-cover rounded-2xl"
              />
            </div>
            <div className="md:col-span-8">
              <h2>Sobre o profissional</h2>
              <p>
                Sou Jorge Dias, psicólogo (CRP 08/31462), graduado pela Universidade Estadual de Londrina, com especialização em Fenomenologia Existencialista, Neuropsicologia e Transtornos de Personalidade.
              </p>
              <p>
                Atuo com uma perspectiva que não reduz a experiência humana a padrões, comportamentos ou transtornos. Os padrões que enxergamos e nomeamos estão presentes em todos nós, e os vejo como resultado da experiência humana, não como base fixa ou definidora. A formação em neuropsicologia e transtornos de personalidade me ajudou a compreender esses resultados com profundidade.
              </p>
              <ul className="mt-10 border-t border-border">
                {credenciais.map((c) => (
                  <li key={c} className="py-3 border-b border-border text-base text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ATENDIMENTO */}
        <section id="clinica" className="section-padding bg-secondary">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-10">
              <div className="flex gap-5">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">1</span>
                <div>
                  <h3 className="!mt-0 !mb-2 text-xl">Primeira sessão</h3>
                  <p className="text-base text-foreground/80 mb-0">Acolhimento, apresentação da abordagem e alinhamento do que você busca. Ao final, decidimos juntos se o formato faz sentido para você.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">2</span>
                <div>
                  <h3 className="!mt-0 !mb-2 text-xl">Acompanhamento</h3>
                  <p className="text-base text-foreground/80 mb-0">Atendimento individual, sessões semanais de 50 minutos, por videochamada (Google Meet), com sigilo conforme o Código de Ética do Psicólogo.</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <p className="text-sm text-muted-foreground mb-2">Atendimento 100% online</p>
              <p className="font-display text-3xl text-foreground mb-8">
                R$130 <span className="text-base text-muted-foreground font-body">por sessão</span>
              </p>
              <button onClick={handleContactClick} className="btn-high-ticket w-full mb-4">
                Agendar primeira sessão
              </button>
              <p className="text-sm text-muted-foreground mb-0">Agendamento direto via WhatsApp.</p>
            </div>
          </div>
        </section>

        {/* LIMITES DA TERAPIA */}
        <section className="pt-20 md:pt-28">
          <div className="container">
            <div className="max-w-2xl mx-auto border-l-2 border-primary/40 pl-6">
              <h3 className="!mt-0">O que a terapia não faz</h3>
              <p className="text-base text-foreground/80 mb-0">
                A terapia existencial não substitui avaliação psiquiátrica quando ela é necessária, nem atendimento de emergência. Se você estiver em sofrimento agudo ou pensando em se machucar, procure ajuda imediata: <strong>CVV, 188</strong>, ou um serviço de urgência. Quando o quadro pede, o encaminhamento faz parte do cuidado.
              </p>
            </div>
          </div>
        </section>

        {/* PERGUNTAS FREQUENTES */}
        <section id="duvidas" className="section-padding">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-10">Dúvidas frequentes</h2>
              <div className="border-t border-border">
                {faqs.map((item) => (
                  <details key={item.q} className="group border-b border-border py-6">
                    <summary className="cursor-pointer list-none flex justify-between items-center gap-6 font-display text-xl text-foreground">
                      <span>{item.q}</span>
                      <span className="text-primary text-2xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0">+</span>
                    </summary>
                    <p className="mt-4 mb-0 text-base text-foreground/80">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-secondary">
          <div className="container text-center">
            <p className="font-display text-2xl md:text-3xl text-foreground max-w-xl mx-auto mb-10">
              Para agendar sua primeira sessão ou tirar dúvidas, fale comigo pelo WhatsApp.
            </p>
            <button onClick={handleContactClick} className="btn-high-ticket">
              Agendar primeira sessão
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p className="mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Jorge Dias — Psicologia Clínica · CRP 08/31462 · Em caso de crise, ligue 188 (CVV)
          </p>
          <div className="flex gap-6">
            <Link href="/politica-privacidade" className="hover:text-primary">Privacidade</Link>
            <Link href="/termos-uso" className="hover:text-primary">Termos</Link>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE (discreto) */}
      <button
        onClick={() => document.getElementById("clinica")?.scrollIntoView({ behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-md hover:bg-accent transition-colors"
        aria-label="Ver valor e agendar"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
}
