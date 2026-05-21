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
      'Atendimento clínico com Jorge Dias, psicoterapeuta especialista em narcisismo. Tratamento focado no acolhimento de traços relacionais, dependência emocional e autossabotagem.'
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
                Atendimento Clínico Especializado em Narcisismo
              </span>
              <h1 className="font-display">
                O esgotamento causado por <br className="hidden md:block" />
                <span className="italic">Relações Narcisistas</span>
              </h1>
              <p className="text-lg md:text-xl text-accent font-serif leading-relaxed mb-10 max-w-xl">
                O abuso nem sempre tem a face de um vilão agressivo. Muitas vezes, esconde-se por trás de um cuidado excessivo que sufoca e cria uma dívida emocional.
              </p>
              <a href="#profissional" className="btn-high-ticket">
                Saber Mais
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
          
          {/* Sub-section 1: As duas faces */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">O Espectro do Controle</span>
                <h2 className="text-center mb-12">As duas faces do Narcisismo nas relações</h2>
                
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <p>
                    Temos a forte tendência de rotular o narcisismo apenas como uma <strong>patologia do egoísmo</strong>: o perfil clássico de alguém agressivo, controlador e manipulador.
                  </p>
                  <p>
                    No entanto, a prática clínica mostra que o comportamento narcisista é, na sua essência, um mecanismo de defesa contra o sentimento de desamparo. Ele não possui apenas a face do "vilão". Existe um segundo perfil, muito mais comum e silencioso: <strong>o narcisista altruísta</strong>.
                  </p>
                  <p>
                    Para não lidar com a própria frustração ou com o medo da rejeição, o indivíduo transforma a relação em um jogo onde, seja ganhando ou perdendo, quem cria as regras é ele. Para manter esse controle, ele opera em dois polos opostos:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-4 mb-8">
                    <li>
                      <strong>O Extremo Egoísta:</strong> O controle acontece pela invalidação. A pessoa distorce fatos para ter sempre razão e ataca a sua individualidade, fazendo você duvidar da própria sanidade mental.
                    </li>
                    <li>
                      <strong>O Extremo Altruísta:</strong> O controle acontece pelo "cuidado". A pessoa invade o seu espaço com boas intenções, tornando-se uma figura essencial na sua vida e criando um sentimento de "vazio" que gera uma forte Dependência Emocional.
                    </li>
                  </ul>

                  <p>
                    Em ambos os casos, o resultado final é o mesmo: a sua autonomia é progressivamente apagada para sustentar o mecanismo de defesa do outro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 2: A exaustão da realidade distorcida */}
          <div className="section-padding bg-[#ECEEEF] border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <h3 className="pt-0 text-center mb-10">A exaustão de lutar contra uma realidade distorcida</h3>
                  <p>
                    Discutir, argumentar ou tentar provar a sua dor torna-se inútil nestas dinâmicas. O indivíduo possui um mecanismo mental que trabalha 24 horas por dia para reconfigurar a realidade e proteger o próprio Ego de se sentir indesejado ou ignorado.
                  </p>
                  <p>
                    Qualquer sentimento desconfortável é automaticamente rejeitado por ele e manipulado para que seja sentido por você.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="bg-white/60 p-6 border-l-4 border-primary shadow-sm">
                      <p className="text-base md:text-lg italic mb-0">"Se você impõe um limite ou diz 'não', é interpretado como uma <strong>ofensa.</strong>"</p>
                    </div>
                    <div className="bg-white/60 p-6 border-l-4 border-accent shadow-sm">
                      <p className="text-base md:text-lg italic mb-0">"Se você recusa a ajuda ou o cuidado oferecido, é interpretado como um <strong>ingrato.</strong>"</p>
                    </div>
                  </div>

                  <p>
                    Para tentar sobreviver a esse ambiente onde a realidade é constantemente manipulada, a vítima geralmente desenvolve duas respostas: a <strong>Submissão</strong> (anular-se totalmente para evitar conflitos) ou a <strong>Resistência</strong> (tentar ser o extremo oposto de quem a machucou).
                  </p>
                  <p>
                    Nos dois cenários, a sombra do outro continua a ditar as regras da sua vida, gerando um profundo sentimento de vazio por não saber mais quem você realmente é.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Patológico vs Comportamento */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <span className="tag-value mb-4 block text-center">O Divisor de Águas</span>
                  <h3 className="pt-0 text-center mb-12">A fronteira entre a Defesa e o Transtorno</h3>
                  
                  <p className="max-w-3xl mx-auto text-center mb-12">
                    A melhor forma de compreender a diferença entre quem possui o transtorno enraizado e quem apenas reproduz o comportamento narcisista é olhar para um fator crucial: <strong>a capacidade de sentir a própria dor</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-display text-primary mb-4 font-semibold">O Narcisista Patológico</h4>
                      <p className="text-base md:text-lg leading-relaxed mb-0">
                        Faz os outros sofrerem com a sua condição, mas ele mesmo não sofre. Vive protegido por uma realidade fantasiosa impenetrável onde a culpa nunca é dele. Por ser imune a esse desconforto, raramente busca terapia para mudar genuinamente (quando procura é para usar como validação social).
                      </p>
                    </div>

                    <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-display text-accent mb-4 font-semibold">A Reprodução de Traços</h4>
                      <p className="text-base md:text-lg leading-relaxed mb-0">
                        Qualquer pessoa pode reproduzir comportamentos narcisistas. A diferença é que o mecanismo de manipular a realidade não funciona sempre. Ela causa dor aos outros, mas também sofre muito. Assiste à ruína dos seus vínculos, sente a perda, mas sente-se perdida sobre como parar ou sobre como reconhecer até onde os erros são seus ou dos outros.
                      </p>
                    </div>
                  </div>

                  <div className="quote-block !my-12 !bg-white/50 shadow-sm">
                    <p className="mb-0 text-lg md:text-xl italic">
                      "Mesmo quando a pessoa não consegue acessar o remorso de forma consciente, o inconsciente cobra o seu preço através da autossabotagem, transformando conquistas legítimas em planos constantemente frustrados."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 4: Acolhimento */}
          <div className="section-padding bg-secondary/10 border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <h3 className="text-center mb-8">"Será que o Narcisista sou eu?"</h3>
                  <p>
                    Muitas pessoas chegam ao consultório aterrorizadas pelas definições da internet, temendo ser "o monstro" das suas relações.
                  </p>
                  <p>
                    A premissa clínica que alivia esse temor é direta: o fato de você questionar o impacto das suas ações e buscar terapia indica que a sua empatia está ativa, o que diminui as possibilidades do diagnóstico de Narcisismo Patológico. Isso não anula o fato de que defesas narcísicas mal resolvidas podem estar atraphando sua vida pessoal, mas demonstra existência de um caminho para a mudança.
                  </p>
                  <p>
                    O espaço clínico oferece um pré-diagnóstico estrutural. O nosso foco não é entregar rótulos frios, mas compreender por que você construiu essas defesas (ou por que se submeteu a elas) e como desconstruir esse ciclo de autossabotagem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 5: Como funciona o atendimento (REDUÇÃO DE ANSIEDADE) */}
          <div className="section-padding bg-white" id="clinica">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">O Primeiro Passo</span>
                <h3 className="text-center mb-12">Como funciona o atendimento clínico?</h3>
                
                <div className="space-y-8 text-base md:text-lg text-foreground/80 leading-relaxed">
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-lg mb-1">A Primeira Sessão</h4>
                        <p className="text-sm md:text-base text-foreground/70">Um espaço livre de julgamentos morais. O objetivo da primeira sessão é te conhecer e compreender sua história de vida e suas relações, entender suas visões de mundo, perspectivas e objetivos dentro do processo terapeutico.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-lg mb-1">Dinâmica do tratamento</h4>
                        <p className="text-sm md:text-base text-foreground/70">As sessões ocorrem semanalmente (50 minutos), conduzidas online via Google Meet, com total sigilo. Respeitamos o tempo do seu inconsciente para resgatar a sua autonomia.</p>
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
                  Gostaria de saber mais sobre o atendimento?
                </span>
                <button
                  onClick={handleContactClick}
                  className="btn-high-ticket bg-white text-primary hover:bg-secondary px-12 py-6 text-xs"
                >
                  Entre em contato para saber mais
                </button>
                <div className="text-1lg md:text-xl font-display mb-12 italic">
                  Valor da sessão: R$ 150
                </div>
                
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