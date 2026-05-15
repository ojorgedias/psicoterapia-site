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
    { name: "A Dinâmica", href: "#dinamica" },
    { name: "O Processo", href: "#processo" },
    { name: "Agendar", href: "#agendar" },
  ];

  const whatsappLink = "https://api.whatsapp.com/send?phone=5541985155583&text=Ol%C3%A1%2C%20Jorge.%20Gostaria%20de%20agendar%20uma%20sessao%20de%20psicoterapia.";

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappLink, "_blank");
    setLocation("/obrigado");
  };

  return (
    <div className="selection:bg-accent/30 selection:text-primary">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <nav className="container flex items-center justify-between">
          <Link href="/" className="font-display text-lg md:text-xl font-bold tracking-tighter text-primary">
            Jorge Dias — <span className="font-normal opacity-70">Psicoterapia e Psicanálise</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}
          </div>
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)}><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-semibold text-primary">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="min-h-[85vh] flex items-center pt-16 bg-background">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-sm uppercase tracking-widest font-semibold text-accent mb-4 block">
                Psicoterapia Clínica • Prática Especializada
              </span>
              <h1 className="font-display">O peso invisível do <br className="hidden md:block" /> <span className="italic">amor familiar</span></h1>
              <p className="text-lg md:text-xl text-accent font-serif leading-relaxed mb-10 max-w-xl">
                Muitas vezes, o excesso de proteção e o zelo podem encobrir dinâmicas que anulam a sua identidade e geram uma dívida emocional impagável.
              </p>
              <a href="#dinamica" className="btn-high-ticket">Ler sobre a dinâmica</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-secondary overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png" alt="Jorge Dias" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        <section id="dinamica" className="bg-white section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="tag-value mb-4 block text-center">A dinâmica do narcisista "bonzinho"</span>
              <h2 className="text-center mb-12">A cobrança indireta e o peso do amor</h2>
              <div className="manifesto-text space-y-4">
                <p>O narcisismo oculto em figuras de cuidado gera um sentimento de débito que te anula.</p>
                <div className="py-12 border-y border-border/40 my-16 text-center">
                  <p className="text-2xl md:text-3xl font-display italic text-primary">"O cuidado excessivo gera um sentimento de <span className="text-accent">débito internalizado</span> que você não pediu para contrair."</p>
                </div>
                <p>Escapar dessa lógica exige um processo intenso de limpeza do espaço mental ocupado pelo outro.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="section-padding bg-secondary/40">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="quote-block !border-l-2 !bg-white/50 !pl-10 !py-8">
                <p className="text-xl md:text-2xl italic font-serif text-primary">"Meu nome é Jorge Dias, sou psicoterapeuta clínico. Compreendi que rotular o Narcisista como 'vilão' apenas mascara a raiz do sofrimento."</p>
              </div>
            </div>
          </div>
        </section>

        <section id="agendar" className="section-padding bg-primary text-primary-foreground">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-primary-foreground mb-10">Inicie seu processo de psicoterapia</h2>
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 mb-8 shadow-2xl">
                <div className="text-3xl md:text-4xl font-display mb-12 italic">Valor da sessão: R$ 200</div>
                <button onClick={handleContactClick} className="btn-high-ticket bg-white text-primary hover:bg-secondary px-12 py-6 text-xs">Agendar Sessão via WhatsApp</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <button onClick={handleContactClick} className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={28} fill="currentColor" />
      </button>
    </div>
  );
}