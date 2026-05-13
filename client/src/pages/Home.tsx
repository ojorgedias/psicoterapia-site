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
          isScrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
        }`}
      >
        <nav className="container flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold tracking-tighter text-primary">
            Jorge Dias — <span className="font-normal opacity-70">Psicoterapia e Psicanálise</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
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
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-semibold text-primary"
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
        <section className="min-h-screen flex items-center pt-20">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display">
                O peso invisível do <br className="hidden md:block" />
                <span className="italic">amor familiar</span>
              </h1>
              <p className="text-xl md:text-2xl text-accent font-serif leading-relaxed mb-10 max-w-xl">
                Entenda como o excesso de proteção e o zelo extremo podem encobrir dinâmicas que anulam a sua identidade e geram uma dívida emocional impagável.
              </p>
              <a href="#dinamica" className="btn-high-ticket">
                Iniciar Investigação
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] bg-secondary overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
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
        <section id="dinamica" className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block text-center">A Dinâmica Relacional</span>
              <h2 className="text-center mb-16">O mito do vilão e o narcisismo silencioso</h2>
              
              <div className="manifesto-text space-y-8">
                <p>
                  Estamos acostumados a entender o narcisismo como doença, como se a pessoa patologicamente narcisista fosse alguém muito diferente do que é considerado normal. Conhecemos a imagem do narcisista como alguém visivelmente manipulador, quase como um vilão caricato. Para quem observa de fora, é muito fácil reconhecer e culpabilizar um indivíduo quando ele ocupa ativamente esse papel agressivo ou dominador.
                </p>
                <p>
                  No entanto, quando a pessoa ocupa o papel de quem cuida, nutre e educa a outra, essa característica fica quase imperceptível. Mães e pais excessivamente zelosos, preocupados e protetores são os exemplos perfeitos para descrever o extremo altruísta do indivíduo patologicamente narcisista. O que acontece, na intimidade das relações familiares, é que todo esse cuidado e zelo oferecido em excesso é convertido em um sentimento de débito que é internalizado pelo filho.
                </p>
                <p className="font-bold text-primary">
                  O cuidado excessivo possui um valor simbólico de invalidação do outro e auto validação. Você passa a viver não pelo seu próprio desejo, mas para tentar saldar uma dívida que não pediu para contrair.
                </p>

                <h3 className="pt-8">A lente de contato fixa da realidade</h3>
                <p>
                  Discutir sobre esse esgotamento com a estrutura familiar costuma ser inútil. O indivíduo considerado patologicamente narcisista possui um mecanismo ativo 24 horas por dia que trabalha convencendo a si mesmo de que a realidade é do jeito que ele quer que seja.
                </p>
                <p>
                  Ele não tem a opção de retirar e nem de perceber a existência desse filtro. É como se, ao invés de um óculos que pode ser tirado, ele usasse uma lente de contato fixa que faz com que toda a sua perspectiva de realidade tenha uma coloração diferente. As informações já chegam para ele modificadas por um mecanismo que evita sentimentos desconfortáveis a todo custo.
                </p>
                <p>
                  Se você tenta impor um limite, a lente traduz como ofensa. Se a ajuda oferecida por ele acaba atrapalhando e você aponta isso, a lente traduz você como ingrato. Você não está lutando contra fatos, está lutando contra uma realidade que já chega filtrada e modificada para proteger o ego do outro.
                </p>

                <h3 className="pt-8">Aceitação ou Resistência: O impacto na sua identidade</h3>
                <p>
                  Crescer precisando validar essa realidade distorcida deforma a forma como nos vemos. Diante dessa supressão excessiva, é comum reagir de duas formas distintas: aceitação ou resistência.
                </p>
                <p>
                  A <strong>aceitação</strong> cria um indivíduo que tende a ser submisso, passivo e, muitas vezes, indiferente ao próprio desejo. Você vive no piloto automático para não decepcionar a família.
                </p>
                <p>
                  A <strong>resistência</strong> cria uma busca por autonomia e liberdade, que é onde geralmente surgem os conflitos, insubordinações e a rebeldia. Você passa a carregar o fardo de ser o "problemático" da relação, lidando com ansiedade e culpa crônicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: O Profissional (Sobre Mim) */}
        <section id="profissional" className="section-padding bg-secondary/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="quote-block">
                "Meu nome é Jorge Dias, sou psicoterapeuta e psicanalista. Ao longo de mais de 3.000 horas de prática clínica, compreendi que rotular um sujeito é objetificar uma experiência individual única, reduzindo-a a um diagnóstico estático. O rótulo apenas mascara a raiz do sofrimento."
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div className="space-y-6">
                  <h3 className="mt-0">A Clínica</h3>
                  <p className="text-lg leading-relaxed">
                    O foco da nossa psicoterapia é o espaço ético e livre de julgamentos onde investigamos essa dinâmica relacional profunda. 
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed pt-0 md:pt-12">
                    O objetivo é atuar na sua ferida narcísica — o choque brutal entre a expectativa e a realidade da falta —, permitindo que você desconstrua a culpa, recupere o seu desejo autêntico e deixe de pagar uma dívida emocional que não lhe pertence.
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
              <h2 className="text-primary-foreground mb-8">Atendimento global para brasileiros</h2>
              <p className="text-xl opacity-90 mb-12">
                A distância física e a imigração raramente apagam as dinâmicas de origem; muitas vezes, o isolamento as intensifica. Conduzo processos psicoterapêuticos online com brasileiros em diversos países, garantindo o rigor técnico e o sigilo absoluto.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-12 mb-12">
                <span className="tag-value text-white/60 mb-8 block">
                  Sessões individuais online via Google Meet ou WhatsApp
                </span>
                <div className="text-3xl font-display mb-10 italic">
                  Valor da sessão: R$ 300 <span className="text-lg opacity-60">(ou equivalente cambial)</span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-bold tracking-widest uppercase text-sm hover:bg-secondary transition-all"
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
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jorge Dias — Psicoterapia e Psicanálise. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
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
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Consultar disponibilidade
        </span>
      </a>
    </div>
  );
}
