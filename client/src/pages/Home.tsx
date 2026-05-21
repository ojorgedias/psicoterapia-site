import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
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
    
    const numeroWhatsApp = "SEUNUMERO"; // INSIRA SEU DDD E NÚMERO AQUI (Ex: 18999999999)
    const mensagem = "Olá Jorge, gostaria de agendar uma sessão de psicoterapia.";
    const linkWhatsApp = `https://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkWhatsApp, "_blank", "noopener,noreferrer");
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
                
                <div className="manifesto-text space-y-6 md:space-y-8 text-base md:text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Temos o senso comum de ver o Narcisismo como uma <strong>doença</strong>, que traz a percepção do Narcisista como alguém egoísta, controlador e manipulador.
                  </p>
                  <p>
                    Se relacionar com pessoas assim geralmente causa marcas e cicatrizes profundas, mas nem sempre o <strong>comportamento narcisista</strong> (que todos podem reproduzir), é intenso ou perceptível como o <strong>Narcisista Patológico</strong>.
                  </p>
                  <p>
                    Quando a pessoa ocupa o papel de quem <strong>cuida, acompanha e ajuda</strong> a outra, considerá-la Narcisista traz um enorme peso de culpa, mas a verdade é que comportamentos narcisistas são mais comuns do que imaginamos.
                  </p>
                  
                  <div className="py-12 border-y border-border/40 my-16 text-center">
                    <p className="text-2xl md:text-3xl font-display italic text-primary leading-snug mb-0 px-4">
                      O maior receio do Narcisista Patológico é se sentir indesejado ou ignorado, por isso ele <span className="text-accent">deposita no outro</span> todos sentimentos que considera desconfortáveis.
                    </p>
                  </div>

                  <p>
                    Para manter o controle de sua realidade, ele navega entre dois extremos:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-4 mb-8">
                    <li>
                      <strong>O extremo egoísta:</strong> O controle é obtido invalidando diretamente os sentimentos do outro, distorcendo fatos e causando ataques diretos que diminuem e apagam a individualidade da vítima.
                    </li>
                    <li>
                      <strong>O extremo altruísta:</strong> O controle vem ocupando o papel de quem cuida e ajuda em excesso. Uma <em>invasão bem intencionada</em> que cria uma dívida emocional e um estado profundo de Dependência Emocional.
                    </li>
                  </ul>

                  <p>
                    É importante deixar claro que <strong>não são dois tipos de Narcisismo</strong>. O Narcisista age dessas duas formas para atingir o mesmo objetivo: Sentir que ele está em evidência e o outro está "apagado". É como transformar o outro em um objeto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 2: O comportamento Narcisista */}
          <div className="section-padding bg-[#ECEEEF] border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-base md:text-xl text-foreground/90 leading-relaxed">
                  <h3 className="pt-0 text-center mb-10">Como funciona o Comportamento Narcisista</h3>
                  <p>
                    Discutir e argumentar com o Narcisista é inútil. Ele possui em sua mente um mecanismo ativo 24 horas por dia que transforma qualquer sentimento desconfortável em um peso a ser transferido para o outro.
                  </p>
                  <p>
                    A mente de todos nós tem mecanismos para lidar com a frustração, mas em alguns casos, esse mecanismo <strong>manipula a realidade</strong> para proteger o próprio Ego a qualquer custo.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="bg-white/60 p-6 border-l-4 border-primary shadow-sm">
                      <p className="text-base italic mb-0">"Se você impõe um limite, ele vê como <strong>ofensa.</strong>"</p>
                    </div>
                    <div className="bg-white/60 p-6 border-l-4 border-accent shadow-sm">
                      <p className="text-base italic mb-0">"Se você rejeita a ajuda dele, ele te vê como <strong>ingrato.</strong>"</p>
                    </div>
                  </div>

                  <p>
                    Você não está lutando contra fatos, está lutando contra uma <strong>realidade distorcida</strong> que te faz <strong>duvidar de si mesmo</strong> a todo momento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Patológico vs Comportamento (NOVO LAYOUT) */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-base md:text-lg text-foreground/90 leading-relaxed">
                  <span className="tag-value mb-4 block text-center">O Divisor de Águas</span>
                  <h3 className="pt-0 text-center mb-12">A diferença entre o Transtorno e o Comportamento</h3>
                  
                  <p className="text-center mb-12 max-w-3xl mx-auto">
                    A melhor forma de compreender a diferença entre quem possui o transtorno e quem apenas reproduz o comportamento narcisista é olhando para um fator crucial: <strong>o sofrimento</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Card Patológico */}
                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 shadow-sm hover:shadow-md transition-all">
                      <h4 className="text-xl font-display text-primary mb-4 font-semibold">O Narcisista Patológico</h4>
                      <p className="text-[15px] md:text-base leading-relaxed mb-0">
                        O patológico faz os outros sofrerem com a sua condição, mas <strong>ele mesmo não sofre</strong>. Ele vive protegido por uma realidade fantasiosa onde a culpa nunca é dele. Por ser imune a esse desconforto, ele raramente busca terapia genuína para mudar.
                      </p>
                    </div>

                    {/* Card Comportamento */}
                    <div className="bg-accent/5 p-8 rounded-xl border border-accent/20 shadow-sm hover:shadow-md transition-all">
                      <h4 className="text-xl font-display text-accent mb-4 font-semibold">O Comportamento Narcisista</h4>
                      <p className="text-[15px] md:text-base leading-relaxed mb-0">
                        Qualquer pessoa pode reproduzir traços narcisistas. A diferença é que a sua "blindagem" falha. Ela causa dor aos outros, mas <strong>também sofre muito</strong>. Ela vê seus relacionamentos ruírem, sente a perda, mas se sente perdida sobre quem culpabilizar.
                      </p>
                    </div>
                  </div>

                  <div className="quote-block !my-12 !bg-secondary/30 !border-l-4 !border-primary">
                    <p className="mb-0 text-lg">
                      Mesmo que a pessoa não acesse a culpa ou o remorso conscientemente, o seu inconsciente a "pune". O resultado mais frequente é a <strong>autossabotagem constante e os planos frustrados</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 4: A dúvida e o CTA (NOVO LAYOUT) */}
          <div className="section-padding bg-secondary/10 border-t border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="mb-8">"Será que o Narcisista sou eu?"</h3>
                
                <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed text-left">
                  <p>
                    É muito comum que as pessoas cheguem à terapia aterrorizadas com a possibilidade de serem "o monstro" da relação. 
                  </p>
                  <p>
                    A premissa clínica é simples: o simples fato de você estar buscando terapia, refletindo sobre suas atitudes e se preocupando com o impacto delas no outro já indica que <strong>você não é um narcisista patológico.</strong>
                  </p>
                  <p>
                    Isso não anula o fato de que características narcisistas mal resolvidas podem estar destruindo sua vida pessoal.
                  </p>

                  <div className="bg-white p-8 border border-border/50 rounded-lg shadow-sm mt-10">
                    <h4 className="text-lg font-display text-primary mb-4">O papel da Avaliação Clínica</h4>
                    <p className="text-sm md:text-base mb-4">
                      O atendimento clínico oferece um <strong>pré-diagnóstico</strong> essencial sobre os seus traços narcisistas. Isso por si só já traz um imenso alívio e clareza sobre como parar de se autossabotar.
                    </p>
                    <p className="text-xs text-foreground/60 italic mb-0">
                      *Nota: O diagnóstico clínico exato de Transtorno de Personalidade é um processo médico e psicológico especializado. O foco da nossa psicoterapia é acolher a sua dor, desconstruir a culpa e resgatar vínculos saudáveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION 5: Atendimento Global */}
        <section id="clinica" className="section-padding bg-primary text-primary-foreground">
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