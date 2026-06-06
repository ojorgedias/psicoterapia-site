import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, Award, Clock, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Jorge Dias — Psicoterapeuta Especialista em Narcisismo";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content', 
      'Atendimento clínico com Jorge Dias. Tratamento focado no acolhimento de vítimas de relações narcisistas, dependência emocional e resgate da autonomia.'
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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

  return (
    <div className="selection:bg-stone-200 selection:text-stone-900 font-sans text-stone-800 bg-[#F9F8F6]">
      {/* SECTION 1: Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#F9F8F6]/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl font-medium tracking-tight text-stone-800">
            Jorge Dias <span className="hidden md:inline font-sans text-sm font-normal text-stone-500 ml-2">| Psicoterapia Clínica</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-stone-900 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-stone-800" onClick={() => setMobileMenuOpen(true)}>
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
            className="fixed inset-0 z-[60] bg-[#F9F8F6] flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)} className="text-stone-800">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-stone-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* SECTION 2: Hero (Claro e Acolhedor) */}
        <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-6">
                  Atendimento Clínico 100% Online
                </span>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-6">
                  O cansaço de tentar explicar uma dor que ninguém mais vê.
                </h1>
                
                <p className="text-lg text-stone-600 leading-relaxed mb-4">
                  Quando você tenta dialogar, a realidade é distorcida e a culpa sempre volta para você. 
                </p>
                <p className="text-lg text-stone-600 leading-relaxed mb-10">
                  A sensação de confusão mental e esgotamento que você sente <strong>é real</strong> e tem nome.
                </p>
                
                <a 
                  href="#dinamica" 
                  className="inline-block bg-stone-800 text-white hover:bg-stone-700 transition-colors duration-300 py-4 px-8 rounded-full font-medium text-sm md:text-base shadow-lg"
                >
                  Entender o que estou vivendo
                </a>
              </motion.div>
              
              {/* Imagem (Cores naturais, bordas orgânicas) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src="jorge-background.webp"
                    alt="Jorge Dias - Psicoterapeuta"
                    fetchPriority="high" 
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Fim do filtro grayscale. A foto agora respira com cores reais */}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 3: O Bloco do "Salvador" (A Virada de Chave) */}
        <section id="dinamica" className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#F4F1ED] rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200/50">
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-6">
                "Estou buscando ajuda para o meu parceiro(a)"
              </h2>
              <div className="space-y-5 text-lg text-stone-700 leading-relaxed">
                <p>
                  Muitas pessoas chegam aqui buscando entender como lidar ou como "curar" os traços narcisistas de quem amam.
                </p>
                <p>
                  Acreditar que o seu esforço, a sua paciência ou a terapia certa vão mudar a essência do outro é o principal sintoma da <strong>Dependência Emocional</strong>.
                </p>
                <p>
                  Enquanto você gasta toda a sua energia tentando decifrar o comportamento dele(a), <strong>a sua própria identidade está desaparecendo.</strong> O foco agora precisa voltar para você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: A Dinâmica (Leitura Rápida) */}
        <section className="py-16 md:py-24 px-6 bg-[#F9F8F6]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-6">
              Como a sua autonomia é apagada
            </h2>
            <p className="text-center text-lg text-stone-600 mb-12 max-w-2xl mx-auto">
              O comportamento narcisista opera de duas formas para manter você preso(a) na relação:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <h4 className="font-semibold text-stone-900 text-xl mb-4 border-b border-stone-100 pb-4">
                  Pelo Medo <br/><span className="text-sm font-normal text-stone-500">(O Perfil Agressivo)</span>
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  Critica suas escolhas, invalida seus sentimentos e faz você duvidar da sua própria sanidade (Gaslighting). Você passa a pisar em ovos para evitar brigas.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <h4 className="font-semibold text-stone-900 text-xl mb-4 border-b border-stone-100 pb-4">
                  Pela Culpa <br/><span className="text-sm font-normal text-stone-500">(O Perfil "Bem-Intencionado")</span>
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  Ajuda em excesso e se torna indispensável. Porém, usa esse cuidado para isolar você de outras pessoas e cobrar gratidão eterna. Você sente culpa ao dizer "não".
                </p>
              </div>
            </div>

            <div className="text-center bg-stone-100 rounded-xl p-6">
              <p className="text-lg text-stone-800 font-medium mb-0">
                Em ambos os casos, o resultado é o mesmo: você perde a capacidade de tomar decisões sozinho(a).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: O Caminho Clínico (Passo a Passo) */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-16">
              O processo para recuperar o controle
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-stone-900 mb-2">Identificar as Invasões</h4>
                  <p className="text-stone-600 text-lg leading-relaxed">Vamos mapear juntos onde a sua autonomia foi tirada de você sem que você percebesse.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-stone-900 mb-2">Tratar a Dependência</h4>
                  <p className="text-stone-600 text-lg leading-relaxed">Acolher a dor e o vazio que surgem quando você para de tentar agradar e salvar o outro.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-stone-900 mb-2">Resgatar sua Identidade</h4>
                  <p className="text-stone-600 text-lg leading-relaxed">Construir ferramentas emocionais para que você volte a tomar decisões sem medo e sem culpa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: O Profissional */}
        <section id="profissional" className="py-16 px-6 bg-[#F9F8F6]">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
              
              <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-[#F9F8F6]">
                <img 
                  src="JorgeDias.jpeg" 
                  alt="Jorge Dias - Psicoterapeuta Clínico"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-3xl font-serif text-stone-900">Jorge Dias</h4>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Psicoterapeuta Clínico dedicado ao acolhimento de vítimas de Relacionamentos Narcisistas e tratamento da dependência emocional.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-center md:justify-start gap-3 text-stone-700">
                    <GraduationCap className="text-stone-400 shrink-0" size={20} />
                    <span>Graduado em <strong>Psicologia</strong> pela UEL.</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-stone-700">
                    <Clock className="text-stone-400 shrink-0" size={20} />
                    <span>Mais de 3.000 horas de atendimento clínico.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: Enquadre Clínico e Valor (A Peneira) */}
        <section id="clinica" className="py-20 px-6 bg-[#EBE7E0]">
          <div className="container mx-auto max-w-3xl text-center">
            
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">
              Como funciona o acompanhamento
            </h2>
            
            <div className="space-y-5 text-lg text-stone-700 leading-relaxed mb-12">
              <p>
                As sessões acontecem uma vez por semana, via chamada de vídeo (Google Meet), em um ambiente de total sigilo e ausência de julgamentos.
              </p>
              <p>
                Para garantir a acessibilidade e a continuidade do seu processo de forma particular, o valor da sessão é <strong>R$ 100</strong>. <br/>
                <span className="text-sm italic text-stone-500">(Não trabalhamos com convênios).</span>
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl max-w-md mx-auto">
              <span className="text-stone-500 text-sm font-semibold uppercase tracking-widest block mb-4">Próximo Passo</span>
              <button
                onClick={handleContactClick}
                className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors duration-300 py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 mb-4 shadow-md"
              >
                <MessageCircle size={24} />
                Consultar horários
              </button>
              <p className="text-sm text-stone-400 mb-0">
                O agendamento é feito diretamente pelo WhatsApp.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* SECTION 8: Footer */}
      <footer className="py-10 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-widest text-stone-400">
            &copy; {new Date().getFullYear()} Jorge Dias — Psicoterapia Clínica.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-widest font-semibold text-stone-400">
            <Link href="/politica-privacidade" className="hover:text-stone-800 transition-colors">Privacidade</Link>
            <Link href="/termos-uso" className="hover:text-stone-800 transition-colors">Termos</Link>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button
        onClick={handleContactClick}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform group"
        aria-label="Consultar disponibilidade no WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}