import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Atualização dinâmica de Meta Tags para otimização de CPC no Google Ads
    document.title = "Jorge Dias — Psicólogo e Terapeuta Especialista em Narcisismo";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content', 
      'Atendimento clínico com Jorge Dias, psicólogo especialista em narcisismo e terapeuta especialista em narcisismo. Tratamento focado no acolhimento de traços relacionais, dependência emocional e autossabotagem.'
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Profissional", href: "#profissional" },
    { name: "A Dinâmica", href: "#dinamica" },
    { name: "A Clínica", href: "#clinica" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/obrigado");
  };

  return (
    <div className="selection:bg-accent/30 selection:text-primary">
      {/* SECTION 1: Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <nav className="container flex items-center justify-between">
          <Link href="/" className="font-display text-lg md:text-xl font-bold tracking-tighter text-primary">
            Jorge Dias — <span className="font-normal opacity-70">Psicoterapia e Psicanálise</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
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
              <button onClick={() => setMobileMenuOpen(false)}>
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
        {/* SECTION 2: Hero */}
        <section className="min-h-[85vh] flex items-center pt-16 bg-background">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent uppercase text-xs md:text-sm tracking-widest font-semibold mb-4 block">
                Atendimento Especializado em Relações Narcisistas
              </span>
              <h1 className="font-display">
                O esgotamento causado por <br className="hidden md:block" />
                <span className="italic">Relações Narcisistas</span>
              </h1>
              <p className="text-lg md:text-xl text-accent font-serif leading-relaxed mb-10 max-w-xl">
                Muitas vezes, os comportamentos narcisistas são confundidos com <strong>Narcisismo Patológico</strong>. Entenda como funciona cada um deles.
              </p>
              <a href="#profissional" className="btn-high-ticket">
                Saiba Mais
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-secondary overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png"
                alt="Jorge Dias"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: O Profissional */}
        <section id="profissional" className="section-padding bg-secondary/40">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="quote-block !border-l-2 !bg-white/50 !pl-10 !py-8 !my-0 shadow-sm"
              >
                <p className="text-xl md:text-2xl italic font-serif text-primary leading-relaxed mb-0">
                  "Meu nome é Jorge Dias, sou psicoterapeuta clínico formado em <strong>Psicologia</strong> pela <strong>Universidade Estadual de Londrina.</strong> Ao longo de mais de 3.000 horas de prática clínica, compreendi que o comportamento Narcisista vai <strong>muito além do Rótulo."</strong>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: O Manifesto (A Dinâmica) */}
        <section id="dinamica" className="bg-white">
          
          {/* Sub-section 1: O Narcisista Bonzinho */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">O Narcisista sempre quer "Sair Ganhando"</span>
                <h2 className="text-center mb-12">Como funciona a mente do Narcisista Patológico</h2>
                
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <p>
                    Temos o senso comum de ver o Narcisismo como uma <strong>doença</strong>, que brings a percepção do Narcisista como alguém egoísta, controlador e manipulador.
                  </p>
                  <p>
                    Se relacionar com pessoas assim geralmente causa marcas e cicatrizes profundas, mas nem sempre o <strong>comportamento narcisista</strong> (que todos podem reproduzir), é intenso ou perceptível como o <strong>Narcisista Patológico</strong>.
                  </p>
                  <p>
                    Quando a pessoa ocupa o papel de quem <strong>cuida, acompanha e ajuda</strong> a outra, considerá-la Narcisista traz um enorme peso de culpa, mas a verdade é que comportamentos narcisistas são mais comuns do que imaginamos.
                  </p>
                  <p>
                    A melhor forma de compreender a diferença entre o comportamento narcisista e o narcisismo patológico é olhando para o resultado das <strong>relações com outras pessoas</strong>. 
                  </p>
                  <p>
                    O Narcisista Patológico enxerga todas suas relações pessoais como uma <strong>competição</strong>, onde uma das pessoas deve ficar em evidência e a outra, apagada. Esta visão faz com que ele busque ser <strong>o centro</strong> de todas as interações que participa. 
                  </p>
                  
                  <div className="py-12 border-y border-border/40 my-16 text-center">
                    <p className="text-2xl md:text-3xl font-display italic text-primary leading-snug mb-0 px-4">
                      O maior receio do Narcisista Patológico é se sentir indesejado ou ignorado, por isso ele <span className="text-accent">deposita no outro</span> todos sentimentos que considera desconfortáveis.
                    </p>
                  </div>

                  <p>
                    Na verdade, o medo de se sentir indesejado ou ignorado é algo presente em todos nós, a diferença é que o Narcisista Patológico <strong>não consegue suportar</strong> essas situações, por isso eles têm um robusto <strong>mecanismo de controle da realidade</strong>. 
                  </p>
                  <p>
                    Para manter esse controle, ele navega entre dois extremos: O extremo <strong>egoísta</strong> e o extremo <strong>altruísta</strong>. Nos dois casos, a outra pessoa se sente presa a ele, seja por <strong>medo, culpa, insegurança ou gratidão</strong>.
                  </p>
                  <p>
                    No extremo egoísta, o controle é obtido invalidando diretamente os sentimentos do outro, distorcendo os fatos para ter sempre a razão e o fazendo duvidar de sua própria sanidade mental. Isso acontece através de <strong>ataques diretos e evidentes</strong>, que diminuem a individualidade da outra pessoa e a fazem sentir-se "presa" a ele, causando um apagamento progressivo da individualidade.
                  </p>
                  <p>
                    No extremo altruísta, o controle é obtido ocupando o papel de quem cuida e ajuda em excesso. É uma <strong>invasão bem intencionada</strong> que o coloca como peça central indispensável da vida do outro, criando uma dívida emocional que faz o outro se sentir "preso" a ele, em um estado de <strong>Dependência Emocional</strong>, que também causa um apagamento progressivo da individualidade.
                  </p>
                  <p>
                    É importante deixar claro que <strong>não são dois tipos de Narcisismo</strong>. O Narcisista age dessas duas formas para atingir o mesmo objetivo: Sentir que ele está em evidência e o outro está "apagado", sem individualidade. <strong>É como transformar o outro em um objeto</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 2: O comportamento Narcisista */}
          <div className="section-padding bg-[#ECEEEF] border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <h3 className="pt-0 text-center mb-10">Como funciona o Comportamento Narcisista</h3>
                  <p>
                    Discutir e argumentar com o Narcisista é inútil. Ele possui em sua mente um mecanismo ativo 24 horas por dia que transforma qualquer sentimento desconfortável em um peso a ser transferido para o outro. Seja agindo como vilão ou como vítima, ele convence a si mesmo e ao outro de que a <strong>realidade é do jeito que ele quer que seja</strong>.
                  </p>
                  <p>
                    O medo de se sentir indesejado ou ignorado é algo presente em todos, por isso é importante ressaltar que o comportamento Narcisista pode ser reproduzido por <strong>qualquer pessoa</strong>, seja considerada Narcisista Patológico ou não.   
                  </p>
                  
                  <div className="quote-block !my-12 !bg-white/40">
                    Seja como Vilão ou como Vítima, quem reproduz comportamento narcisista nunca carrega para si o peso da culpa. Ele é especialista em <strong>despejar esse peso no outro</strong> de forma cirúrgica.
                  </div>

                  <p>
                    A mente de todos nós tem um mecanismo para lidar com os Sentimentos Desconfortáveis, mas em alguns casos, esse mecanismo <strong>manipula a realidade</strong> para proteger o Ego de qualquer frustração.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="bg-white/60 p-6 border-l-4 border-primary shadow-sm">
                      <p className="text-base md:text-lg italic mb-0">"Se você impõe um limite, ele vê como <strong>ofensa.</strong>"</p>
                    </div>
                    <div className="bg-white/60 p-6 border-l-4 border-accent shadow-sm">
                      <p className="text-base md:text-lg italic mb-0">"Se você rejeita a ajuda dele, ele te vê como <strong>ingrato.</strong>"</p>
                    </div>
                  </div>

                  <p>
                    Você não está lutando contra fatos, está lutando contra uma <strong>realidade distorcida</strong> que te faz <strong>duvidar de si mesmo</strong> a todo momento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Patológico vs Comportamento (CONTEÚDO REESTRUTURADO) */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <span className="tag-value mb-4 block text-center">O Espectro Relacional</span>
                  <h3 className="pt-0 text-center mb-12">A Linha Tênue entre o Sofrimento e o Transtorno</h3>
                  
                  <p className="max-w-3xl mx-auto text-center mb-12">
                    Para além dos rótulos definitivos, a fronteira clínica que separa o transtorno de personalidade da mera reprodução de traços defensivos reside na **capacidade de experimentar a própria dor**.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-display text-primary mb-4 font-semibold">O Narcisismo Patológico</h4>
                      <p className="text-base md:text-lg leading-relaxed mb-0">
                        O indivíduo estruturado na patologia faz os outros sofrerem com a sua condição, mas ele mesmo permanece imune ao sofrimento consciente. Sua realidade fantasiosa é impenetrável e blindada contra falhas, inviabilizando qualquer busca espontânea por transformação ética.
                      </p>
                    </div>

                    <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-display text-accent mb-4 font-semibold">A Reprodução de Traços</h4>
                      <p className="text-base md:text-lg leading-relaxed mb-0">
                        Quem apenas reproduz comportamentos narcisistas causa dor ao redor, mas **também sofre profundamente**. Sua blindagem falha. A pessoa assiste à ruína dos seus vínculos afetivos e profissionais, sentindo-se perdida e confusa sobre onde reside a culpabilidade.
                      </p>
                    </div>
                  </div>

                  <div className="quote-block !my-12 !bg-white/50 shadow-sm">
                    <p className="mb-0 text-lg md:text-xl italic">
                      "Quando a mente não consegue processar conscientemente o remorso ou a culpa, o inconsciente opera uma punição severa: a autossabotagem sistemática, transformando planos legítimos em ciclos recorrentes de frustração."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 4: Acolhimento e Alívio da Ansiedade diagnóstica */}
          <div className="section-padding bg-secondary/10 border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <h3 className="text-center mb-8">"Será que eu sou o Narcisista?"</h3>
                  <p>
                    Muitas pessoas chegam ao consultório aterrorizadas pelas definições superficiais da internet, temendo carregar o estigma do transtorno. Clinicamente, a resposta a esse temor traz um alívio imediato: **o simples fato de você questionar o impacto das suas ações e buscar terapia indica que a sua empatia está ativa.**
                  </p>
                  <p>
                    No espaço clínico, realizamos um **pré-diagnóstico estrutural** focado em compreender como e por que essas defesas foram construídas na sua história, sem rótulos frios ou reducionistas.
                  </p>
                  <p className="text-xs text-foreground/60 italic leading-relaxed pt-4 border-t border-border/40">
                    *Nota Ética: A emissão de diagnósticos definitivos de Transtornos de Personalidade requer avaliações psicológicas especializadas de longo prazo e aplicação de baterias de testes específicos. Nosso foco analítico e terapêutico é o tratamento do sofrimento psíquico, a dissolução dos ciclos de autossabotagem e a melhora das suas relações atuais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 5: Como funciona a 1ª Sessão e o Tratamento (REDUÇÃO DE ANSIEDADE) */}
          <div className="section-padding bg-white" id="clinica">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">Estrutura do Atendimento</span>
                <h3 className="text-center mb-12">Como funciona a primeira sessão e o processo?</h3>
                
                <div className="space-y-8 text-base md:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Iniciar a psicoterapia pode gerar ansiedade e hesitação. Por isso, o processo é desenhado para ser transparente e seguro desde o primeiro contato:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-lg mb-1">A Primeira Entrevista (Sessão Inicial)</h4>
                        <p className="text-sm md:text-base text-foreground/70">Um espaço inteiramente ético e livre de julgamentos morais. O objetivo da primeira sessão é realizar uma escuta ativa e acolhedora da sua queixa principal, permitindo mapear os nós emocionais e traçar os primeiros caminhos do tratamento.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-lg mb-1">A Dinâmica do Tratamento</h4>
                        <p className="text-sm md:text-base text-foreground/70">As sessões ocorrem semanalmente, com duração de 50 minutos, conduzidas online via Google Meet com total sigilo e privacidade. Não trabalhamos com fórmulas mágicas ou cronogramas rígidos; respeitamos o tempo do seu inconsciente para desconstruir defesas e restabelecer a sua autonomia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION 5: Atendimento Global */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-primary-foreground mb-10">Inicie seu processo de psicoterapia</h2>
              
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 mb-8 shadow-2xl">
                <span className="tag-value text-white/40 mb-8 block">
                  Sessões individuais online via Google Meet
                </span>
                <div className="text-1xl md:text-2xl font-display mb-12 italic">
                  Valor da sessão: R$ 150
                </div>
                <button
                  onClick={handleContactClick}
                  className="btn-high-ticket bg-white text-primary hover:bg-secondary px-12 py-6 text-xs"
                >
                  Agendar Sessão via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 6: Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Jorge Dias — Psicoterapia e Psicanálise.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold">
            <Link href="/politica-privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link href="/termos-uso" className="hover:text-primary transition-colors">Termos</Link>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button
        onClick={handleContactClick}
        className="fixed bottom-8 right-8 z-[100] bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
        aria-label="Consultar disponibilidade"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block uppercase tracking-widest font-bold">
          Consultar disponibilidade
        </span>
      </button>
    </div>
  );
}