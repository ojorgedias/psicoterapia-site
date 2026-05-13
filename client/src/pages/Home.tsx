import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "A Dinâmica", href: "#dinamica" },
    { name: "A Clínica", href: "#clinica" },
    { name: "O Profissional", href: "#profissional" },
  ];

  const whatsappLink = "https://api.whatsapp.com/send?phone=5541985155583&text=Ol%C3%A1%2C%20Jorge.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.";

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
              <h1 className="font-display">
                O peso invisível do <br className="hidden md:block" />
                <span className="italic">amor familiar</span>
              </h1>
              <p className="text-lg md:text-xl text-accent font-serif leading-relaxed mb-10 max-w-xl">
                Muitas vezes, o excesso de proteção e o zelo podem encobrir dinâmicas que anulam a sua identidade e geram uma dívida emocional impagável.
              </p>
              <a href="#dinamica" className="btn-high-ticket">
                Iniciar Investigação
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

        {/* SECTION 3: O Manifesto (A Dinâmica) */}
        <section id="dinamica" className="bg-white">
          {/* Sub-section 1: O Narcisista Bonzinho */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">A dinâmica do narcisista "bonzinho"</span>
                <h2 className="text-center mb-12">A cobrança indireta e o peso do amor</h2>
                
                <div className="manifesto-text space-y-2">
                  <p>
                    Estamos acostumados a entender o <strong>narcisismo como doença</strong>, como se a pessoa patologicamente narcisista fosse alguém muito diferente do que é considerado normal.
                  </p>
                  <p>
                    Conhecemos a imagem do narcisista como alguém visivelmente manipulador, quase como um vilão caricato. É fácil reconhecer e culpabilizar um indivíduo agressivo ou dominador.
                  </p>
                  <p>
                    No entanto, quando a pessoa ocupa o papel de quem <strong>cuida, nutre e educa</strong> a outra, chamá-la de Narcisista traz um peso gigante de culpa.
                  </p>
                  <p>
                    Mães e pais excessivamente zelosos são os exemplos perfeitos para descrever o <strong>extremo altruísta</strong> do indivíduo patologicamente narcisista.
                  </p>
                  
                  <div className="py-12 border-y border-border/40 my-16 text-center">
                    <p className="text-2xl md:text-3xl font-display italic text-primary leading-snug mb-0 px-4">
                      "O cuidado excessivo gera um sentimento de <span className="text-accent">débito internalizado</span> que você não pediu para contrair."
                    </p>
                  </div>

                  <p>
                    Todo esse cuidado oferecido em excesso é convertido em um <strong>sentimento de débito</strong>. Você passa a viver não pelo seu próprio desejo, mas para tentar saldar essa dívida.
                  </p>
                  <p>
                    Esse valor simbólico te invalida e gera uma <strong>culpa por existir</strong> crônica, transformando sua vida em uma eterna tentativa de compensação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 2: Como o Narcisista vê o mundo (Off-white background) */}
          <div className="section-padding bg-secondary/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-2">
                  <h3 className="pt-0 text-center mb-10">Como o Narcisista vê o mundo</h3>
                  <p>
                    Discutir e argumentar sobre essa culpa costuma ser inútil. O indivíduo narcisista possui um mecanismo ativo 24 horas por dia que convence a si mesmo de que a <strong>realidade é do jeito que ele quer</strong>.
                  </p>
                  <p>
                    Toda interação social é vista como uma <strong>comparação</strong>, onde uma das pessoas deve sair ganhando. É como se ele visse a vida por um filtro que sempre o faz sentir que venceu.
                  </p>
                  <p>
                    Seja como vilão ou como vítima, o narcisista nunca carrega para si o peso da culpa. Ele é especialista em <strong>despejar esse peso no outro</strong> de forma cirúrgica.
                  </p>
                  <p>
                    Ele não tem a opção de perceber esse filtro. É como uma <strong>lente de contato fixa</strong> que altera a coloração de toda a sua perspectiva de realidade.
                  </p>
                  <p>
                    As informações já chegam modificadas por um mecanismo que <strong>evita sentimentos desconfortáveis</strong> a todo custo, protegendo o Ego de qualquer frustração.
                  </p>
                  
                  <div className="quote-block !my-12">
                    Se você impõe um limite, a lente traduz como ofensa. Se a ajuda dele atrapalha e você aponta, a lente te traduz como ingrato.
                  </div>

                  <p>
                    Você não está lutando contra fatos, está lutando contra uma <strong>realidade distorcida</strong> que já chega modificada para proteger o Ego do outro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Impacto na Identidade (White background) */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="manifesto-text space-y-2">
                  <h3 className="pt-0 text-center mb-10">Aceitação ou Resistência</h3>
                  <p>
                    Crescer precisando validar essa realidade distorcida deforma a forma como nos vemos. A criança diante dessa <strong>supressão excessiva</strong> geralmente reage de duas formas:
                  </p>
                  
                  <div className="clinical-list-item mt-10">
                    <p>
                      A <strong>aceitação</strong> cria um indivíduo submisso e passivo. Você aprende a viver no piloto automático para não decepcionar a família, mantendo seus desejos ocultos.
                    </p>
                  </div>

                  <div className="clinical-list-item">
                    <p>
                      A <strong>resistência</strong> cria uma busca por autonomia que gera conflitos e rebeldia. Você passa a carregar o fardo de ser o "problemático", lidando com <strong>ansiedade crônica</strong>.
                    </p>
                  </div>

                  <p className="mt-10">
                    Seja aceitando ou resistindo, o saldo é um sentimento de <strong>não conhecer a si mesmo</strong>. O espaço mental que deveria ser seu foi tomado por outra pessoa.
                  </p>
                  <p>
                    É como se boa parte da sua própria existência pertencesse a um outro que <strong>nunca quer abrir mão do controle</strong> sobre quem você é.
                  </p>

                  <div className="py-12 border-y border-border/40 my-16 text-center">
                    <p className="text-xl md:text-2xl font-display italic text-primary leading-snug mb-0 px-4">
                      "Escapar dessa lógica exige um processo intenso de <span className="text-accent">limpeza do espaço mental</span> ocupado pelo outro."
                    </p>
                  </div>

                  <p>
                    Tentar superar através de confronto direto é um erro comum. O narcisista sabe exatamente <strong>quais botões apertar</strong> para que você carregue sozinho o peso do desconforto.
                  </p>
                  <p>
                    O caminho é aprender a lidar com o vazio que fica após a saída do outro, para só então iniciar um processo de <strong>preencher-se de si mesmo</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: O Profissional (Sobre Mim) */}
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
                  "Meu nome é Jorge Dias, sou psicoterapeuta clínico. Ao longo de mais de 3.000 horas de prática, compreendi que rotular o Narcisista como 'vilão' apenas mascara a raiz do sofrimento e causa mais culpa à vítima."
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div className="space-y-6">
                  <h3 className="mt-0 text-accent uppercase text-xs tracking-[0.2em] font-semibold">A psicoterapia para vítimas</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Focamos em criar um espaço ético e livre de julgamentos, onde investigaremos a sua história de vida e percepções de mundo, colocando <strong>você como centro do processo</strong>.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed pt-0 md:pt-10 text-foreground/80">
                    O objetivo é compreender sua <strong>ferida narcísica</strong>, permitindo que você desconstrua a culpa, recupere o seu desejo autêntico e deixe de pagar uma dívida que não lhe pertence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Atendimento Global e Agendamento */}
        <section id="clinica" className="section-padding bg-primary text-primary-foreground">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-primary-foreground mb-10">Inicie seu processo de psicoterapia</h2>
              
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 mb-8 shadow-2xl">
                <span className="tag-value text-white/40 mb-8 block">
                  Sessões individuais online via Google Meet
                </span>
                <div className="text-3xl md:text-4xl font-display mb-12 italic">
                  Valor da sessão: R$ 250
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-high-ticket bg-white text-primary hover:bg-secondary px-12 py-6 text-xs"
                >
                  Agendar Sessão via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 6: Footer & Floating Button */}
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
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
        aria-label="Consultar disponibilidade"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block uppercase tracking-widest font-bold">
          Consultar disponibilidade
        </span>
      </a>
    </div>
  );
}
