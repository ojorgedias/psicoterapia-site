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
                Atendimento Especializado em Relações Amorosas e Familiares
              </span>
              <h1 className="font-display">
                O peso simbólico do <br className="hidden md:block" />
                <span className="italic">amor excessivo</span>
              </h1>
              <p className="text-lg md:text-xl text-accent font-serif leading-relaxed mb-10 max-w-xl">
                Muitas vezes, o excesso de proteção e cuidado podem encobrir dinâmicas que <strong>reprimem o "Eu"</strong> e criam uma dívida emocional.
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
          
          {/* Sub-section 1: O Narcisista Bonzinho */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">A dinâmica do narcisista "bonzinho"</span>
                <h2 className="text-center mb-12">A cobrança indireta e o peso do amor</h2>
                
                <div className="manifesto-text space-y-6 md:space-y-8 text-base md:text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Estamos acostumados a entender o Narcisismo como <strong>doença</strong>, como se a pessoa patologicamente narcisista fosse alguém muito diferente do que é considerado normal.
                  </p>
                  <p>
                    Conhecemos a imagem do narcisista como alguém visivelmente manipulador, quase como um vilão caricato. É fácil notar e culpabilizar um indivíduo <strong>agressivo ou dominador.</strong>
                  </p>
                  <p>
                    No entanto, quando a pessoa ocupa o papel de quem <strong>cuida, acompanha e ajuda</strong> a outra, chamá-la de Narcisista traz um enorme peso de culpa.
                  </p>
                  <p>
                    Relações onde uma das pessoas é colocada em evidência, seja por excesso de cuidado ou por excesso controle, mostram o <strong>lado altruísta</strong> do Comportamento Narcisista.
                  </p>
                  
                  <div className="py-12 border-y border-border/40 my-16 text-center">
                    <p className="text-2xl md:text-3xl font-display italic text-primary leading-snug mb-0 px-4">
                      "O cuidado excessivo gera um sentimento de <span className="text-accent">dívida internalizada</span> que se transforma em culpa por existir."
                    </p>
                  </div>
                  <p>
                    A atenção oferecida em excesso é como uma <strong>invasão bem intencionada</strong>, que coloca o Narcisista como peça central em qualquer relação, mesmo que a intenção seja fornecer ajuda ou cuidado ao outro. 
                  </p>
                  <p>
                    Como compensação, o indivíduo que recebe o cuidado sente-se "preso" ao outro, em um estado de <strong>Dependência Emocional</strong>, que causa um apagamento progressivo da individualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 2: Como o Narcisista vê o mundo */}
          <div className="section-padding bg-[#ECEEEF] border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-base md:text-lg text-foreground/90 leading-relaxed">
                  <h3 className="pt-0 text-center mb-10">Como o comportamento Narcisista se mantém?</h3>
                  <p>
                    Discutir e argumentar sobre essa culpa costuma ser inútil. Quem reproduz o comportamento narcisista possui um mecanismo ativo 24 horas por dia que convence a si mesmo de que a <strong>realidade é do jeito que ele quer que seja</strong>.
                  </p>
                  <p>
                    Toda interação social é vista como uma <strong>comparação</strong>, onde uma das pessoas deve sair ganhando e a outra, perdendo. É como se ele visse a vida por um filtro que sempre o faz sentir que venceu.
                  </p>
                  
                  <div className="quote-block !my-12 !bg-white/40">
                    Seja como Vilão ou como Vítima, quem reproduz comportamento narcisista nunca carrega para si o peso da culpa. Ele é especialista em <strong>despejar esse peso no outro</strong> de forma cirúrgica.
                  </div>

                  <p>
                    É importante ressaltar que o comportamento Narcisista pode ser reproduzido por <strong>qualquer pessoa</strong>, seja considerada Narcisista Patológico ou não.
                  </p>
                  <p>
                    A mente de todos nós tem um mecanismo para lidar com os Sentimentos Desconfortáveis, mas em alguns casos, esse mecanismo <strong>manipula a realidade</strong> para proteger o Ego de qualquer frustração.
                  </p>
                  
                  <div className="quote-block !my-12 !bg-white/40">
                    Se você impõe um limite, ele vê como <strong>ofensa.</strong> Se você rejeita a ajuda dele, ele te vê como <strong>ingrato</strong>.
                  </div>

                  <p>
                    Você não está lutando contra fatos, está lutando contra uma <strong>realidade distorcida</strong> que te faz <strong>duvidar de si mesmo</strong> a todo momento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Aceitação ou Resistência */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-base md:text-lg text-foreground/90 leading-relaxed">
                  <h3 className="pt-0 text-center mb-10">A repetição inconsciente do padrão</h3>
                  <p className="max-w-3xl mx-auto">
                    O hábito de validar essa realidade distorcida faz com que a dinâmica tóxica seja <strong>naturalizada.</strong> Mesmo quando a relação termina, ela deixa traumas e padrões que podem influenciar os <strong>relacionamentos atuais.</strong>
                  </p>
                  <p className="max-w-3xl mx-auto">
                    Quando nossa vontade e autonomia são suprimidas, geralmente reagimos de duas formas:
                  </p>
                  
                  {/* NOVO LAYOUT LITER E AGRADÁVEL: Grid com Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-display text-primary mb-4 font-semibold">A Aceitação</h4>
                      <p className="text-[15px] md:text-base leading-relaxed mb-0">
                        Muitas vezes, o indivíduo aprende a ser passivo, desprovido de vontade própria e focado em agradar o outro. Isso faz com que o próprio "Eu" se sinta suprimido e busque formas alternativas de se proteger, seja se diminuindo em excesso para buscar validação, seja reproduzindo sem perceber o cuidado excessivo que acaba invalidando uma terceira pessoa, manténdo a repetição de padrões.
                      </p>
                    </div>

                    <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-display text-accent mb-4 font-semibold">A Resistência</h4>
                      <p className="text-[15px] md:text-base leading-relaxed mb-0">
                        Quando o "Eu" não quer aceitar a culpa imposta, ele busca se tornar uma pessoa totalmente <strong>oposta</strong>ao outro. Se foi sufocado por regras, acaba criando os filhos <strong>"soltos demais"</strong>, se foi muito invalidado, acaba validando excessivamente os filhos, fazendo com que tenham dificuldade em <strong>lidar com a frustração</strong>. Viver tentando ser o "oposto" significa que a imagem do outro <strong>ainda dita as suas regras</strong>.
                      </p>
                    </div>
                  </div>

                  <p className="mt-10 max-w-3xl mx-auto">
                    Mesmo aceitando ou rejeitando a invasão, o saldo acaba sendo o mesmo: O sentimento de vazio por <strong>não conhecer a si mesmo</strong>. 
                    O espaço mental que deveria abrigar o seu desejo e sua forma de ver o mundo continua sendo ocupado pelo outro.
                  </p>

                  <div className="py-12 border-y border-border/40 my-16 text-center max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-display italic text-primary leading-snug mb-0 px-4">
                      "Escapar dessa lógica exige limpar o espaço mental ocupado pelo outro, protegendo suas próprias relações atuais da repetição de ciclos."
                    </p>
                  </div>

                  <p className="max-w-3xl mx-auto">
                    Tentar superar através do confronto direto é um erro comum. Quem reproduz o comportamento Narcisista sabe exatamente <strong>quais botões apertar</strong> para inverter a situação e fazer você carregar sozinho o desconforto e a culpa.
                  </p>
                  <p className="max-w-3xl mx-auto">
                    O indivíduo que reproduz o Comportamento Narcisista geralmente oscila entre o extremo do Egoismo e do Altruismo. Ele pode mudar rapidamente postura de "vilão" para "bonzinho" ou vice-versa. É essa inconstância que confunde a cabeça da vítima e <strong>diminui suas defesas</strong>.
                  </p>
                  <p className="max-w-3xl mx-auto">
                    O caminho clínico é identificar como você lidou com a tentativa de invalidação, suportar e entender o <strong>vazio</strong> que fica após a retirada do conteúdo que não é seu e iniciar o processo de autoconhecimento para <strong>preencher-se de si mesmo.</strong>
                  </p>
                </div>

                {/* Grid A Psicoterapia para Vítimas ajustado dentro da Section 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-10 border-t border-border/30 max-w-3xl mx-auto">
                  <div className="space-y-6">
                    <h3 className="mt-0 text-accent uppercase text-xs tracking-[0.2em] font-semibold">Psicoterapia como ferramenta de mudança</h3>
                    <p className="text-lg leading-relaxed text-foreground/80">
                      Focamos em criar um espaço ético e livre de julgamentos, onde investigaremos a sua história de vida e percepções de mundo, colocando <strong>você como centro do processo</strong>.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg leading-relaxed pt-0 md:pt-10 text-foreground/80">
                      O objetivo é compreender como os <strong>traumas e inseguranças</strong> vividos em relacionamentos anteriores (amorosos ou familiares) podem estar influenciando seus <strong>relacionamentos atuais</strong>.
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