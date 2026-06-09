import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, Award, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Jorge Dias — Psicoterapeuta Clínico";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content', 
      'Psicoterapia online focada em dinâmicas narcisistas. Atendimento para quem sofre com a dependência emocional e para quem busca tratar seus próprios traços narcisistas.'
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Para Vítimas", href: "#resgate" },
    { name: "Para quem tem Traços", href: "#tracos" },
    { name: "O Profissional", href: "#profissional" },
    { name: "Agendamento", href: "#clinica" },
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
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
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
        {/* SECTION 2: Hero (Amplo e Acolhedor) */}
        <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
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
                  O desgaste de uma relação onde a realidade parece distorcida.
                </h1>
                
                <p className="text-lg text-stone-600 leading-relaxed mb-10">
                  Dinâmicas narcisistas geram exaustão mental para todos os envolvidos. Seja você a pessoa perdendo a própria identidade, ou quem percebe que suas defesas estão machucando quem ama: <strong>existe um caminho clínico.</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#resgate" className="bg-stone-800 text-white hover:bg-stone-700 transition-colors duration-300 py-3 px-6 rounded-full font-medium text-sm text-center shadow-md">
                    Eu sofro na relação
                  </a>
                  <a href="#tracos" className="bg-stone-200 text-stone-800 hover:bg-stone-300 transition-colors duration-300 py-3 px-6 rounded-full font-medium text-sm text-center shadow-sm">
                    Eu reproduzo esses traços
                  </a>
                </div>
              </motion.div>
              
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
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 3: A Regra de Ouro (Inflexível logo no início) */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#EBE7E0] border border-stone-300/50 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm">
              <div className="text-stone-700 mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 text-lg mb-2">Atenção: Buscando ajuda para o seu parceiro(a)?</h4>
                <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                  Se você reconhece comportamentos narcisistas no seu cônjuge, é natural querer "agendar uma sessão para ele". No entanto, o processo terapêutico só funciona se houver <strong>vontade própria</strong>. O agendamento deve ser feito <strong>exclusivamente pelo próprio paciente</strong>. Se a pessoa que você ama não quer se tratar, o foco da sua terapia deve ser você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Para quem SOFRE (O resgate) */}
        <section id="resgate" className="py-16 md:py-24 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <span className="text-stone-400 font-semibold uppercase tracking-widest text-sm mb-4 block text-center">Caminho 1</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-12">
              Para quem sente que perdeu o controle das próprias decisões
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-stone-900">O Apagamento da Autonomia</h4>
                <p className="text-stone-600 leading-relaxed">
                  O comportamento narcisista opera para gerar Dependência Emocional. Isso ocorre seja através de agressividade e invalidação (Gaslighting), ou através de um cuidado excessivo que te isola e cobra gratidão constante.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  O resultado é o esvaziamento: você não consegue mais pensar, agir ou tomar decisões sem a aprovação invisível do outro.
                </p>
              </div>
              
              <div className="bg-[#F9F8F6] p-6 rounded-2xl border border-stone-100">
                <h4 className="font-semibold text-lg text-stone-900 mb-4">Como a terapia ajuda:</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-stone-600">
                    <ArrowRight className="text-stone-400 shrink-0 mt-1" size={16} />
                    <span><strong>Mapear Invasões:</strong> Entender onde a sua autonomia foi tirada.</span>
                  </li>
                  <li className="flex gap-3 text-stone-600">
                    <ArrowRight className="text-stone-400 shrink-0 mt-1" size={16} />
                    <span><strong>Tratar o Vazio:</strong> Lidar com a dor da dependência emocional.</span>
                  </li>
                  <li className="flex gap-3 text-stone-600">
                    <ArrowRight className="text-stone-400 shrink-0 mt-1" size={16} />
                    <span><strong>Resgatar a Identidade:</strong> Ferramentas para voltar a decidir sem culpa.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Para quem TEM TRAÇOS (A Desconstrução) */}
        <section id="tracos" className="py-16 md:py-24 px-6 bg-[#F9F8F6]">
          <div className="container mx-auto max-w-4xl">
            <span className="text-stone-400 font-semibold uppercase tracking-widest text-sm mb-4 block text-center">Caminho 2</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-12">
              "Eu reproduzo esses comportamentos. Tem tratamento?"
            </h2>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
              <div className="space-y-6 text-lg text-stone-700 leading-relaxed mb-10">
                <p>
                  Muitas pessoas chegam ao consultório aterrorizadas pelas definições rasas da internet, temendo ser o "monstro" das suas relações.
                </p>
                <p>
                  O simples fato de você questionar o impacto das suas ações e buscar terapia indica que a sua <strong>empatia está ativa</strong>. Isso diminui consideravelmente as chances de um diagnóstico de Narcisismo Patológico puro, onde o indivíduo não sente o dano que causa.
                </p>
                <p>
                  No entanto, defesas narcísicas mal resolvidas (como a necessidade extrema de controle ou dificuldade de validação do outro) destroem relações e causam sofrimento profundo a você e aos seus.
                </p>
              </div>

              <div className="bg-[#EBE7E0]/40 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-stone-900 mb-4">Como funciona a terapia nestes casos:</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                    <span>Não buscamos entregar "rótulos", mas compreender <strong>por que você construiu essas defesas</strong> ao longo da sua história.</span>
                  </li>
                  <li className="flex gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                    <span>Trabalhamos o <strong>reconhecimento da responsabilidade</strong> sem o peso da aniquilação da sua autoestima.</span>
                  </li>
                  <li className="flex gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                    <span>Desenvolvemos novas formas de lidar com a frustração e criar <strong>vínculos mais saudáveis</strong> e baseados na reciprocidade.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: O Profissional */}
        <section id="profissional" className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-[#F9F8F6] p-8 md:p-12 rounded-3xl border border-stone-100">
              
              <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="JorgeDias.jpeg" 
                  alt="Jorge Dias - Psicoterapeuta Clínico"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-3xl font-serif text-stone-900">Jorge Dias</h4>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Psicoterapeuta Clínico dedicado ao acolhimento de vítimas de Relacionamentos Narcisistas e ao tratamento clínico da dependência emocional e traços de personalidade.
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
                Sessões semanais de 50 minutos, via chamada de vídeo (Google Meet), em um ambiente de total sigilo e ausência de julgamentos.
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
                O agendamento é feito diretamente pelo WhatsApp. Lembre-se: o agendamento é pessoal e não pode ser feito para terceiros.
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