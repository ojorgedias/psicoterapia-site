import { useEffect, useState } from "react";

import { Link, useLocation } from "wouter";

import { Menu, X, MessageCircle, Award, Clock, GraduationCap, Brain, BookOpen } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [, setLocation] = useLocation();

  useEffect(() => {

    // Atualização dinâmica de Meta Tags para otimização de CPC no Google Ads

    document.title = "Jorge Dias — Psicoterapeuta especializado em relações narcisistas";

    let metaDesc = document.querySelector('meta[name="description"]');

    if (!metaDesc) {

      metaDesc = document.createElement('meta');

      metaDesc.setAttribute('name', 'description');

      document.head.appendChild(metaDesc);

    }

    metaDesc.setAttribute(

      'content', 

      'Psicoterapia online focada em relações narcisistas: para quem viveu uma relação assim e para quem percebe comportamentos narcisistas em si. Sessões semanais, sigilo e processo claro.'

    );

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [

    { name: "O Trabalho", href: "#dinamica" },

    { name: "O Profissional", href: "#profissional" },

    { name: "O Atendimento", href: "#clinica" },

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

            Jorge Dias — <span className="font-normal opacity-70">Psicoterapia especializada em relações narcisistas</span>

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

        {/* SECTION 2: Hero mais baixo e objetivo */}

        <section className="relative min-h-[72svh] lg:min-h-[80vh] flex items-end lg:items-center pb-16 pt-28 lg:pt-16 lg:pb-0 bg-background overflow-hidden">

          

          {/* 1. IMAGEM DE FUNDO: Aparece APENAS no Mobile */}

          <div className="absolute inset-0 z-0 lg:hidden">

            <img

              src="jorge-background.webp"

              alt="Jorge Dias - Psicoterapeuta"

              fetchPriority="high" 

              decoding="sync" 

              className="w-full h-full object-cover object-top"

            />

            {/* Película escura para garantir leitura perfeita do texto branco */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

          </div>

          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            

            {/* 2. TEXTO E BOTÃO */}

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}

            >

              {/* No mobile: texto branco/translúcido. No PC: cores originais */}

              <span className="text-white/80 lg:text-accent uppercase text-xs md:text-sm tracking-widest font-semibold mb-4 block">

                Atendimento 100% online | Especializado em Relações Narcisistas

              </span>

              

              <h1 className="font-display text-white lg:text-foreground mb-6 lg:mb-4">

                Relações narcisistas <br className="hidden md:block" />

                deixam <span className="italic">marcas profundas</span>.

              </h1>

              

              <p className="text-lg md:text-xl text-white/90 lg:text-accent font-serif leading-relaxed mb-4 max-w-xl">

                Psicoterapia online para quem viveu essa dinâmica e para quem começa a enxergar o próprio papel nela.

              </p>

              
              

              {/* Botão adaptado: Branco no mobile para destacar no fundo escuro */}

              <a 

                href="#para-quem" 

                className="btn-high-ticket !bg-white !text-black hover:!bg-gray-200 lg:!bg-primary lg:!text-primary-foreground lg:hover:!bg-accent lg:hover:!text-primary shadow-2xl lg:shadow-none"

              >

                Entenda sobre

              </a>

            </motion.div>

            

            {/* 3. IMAGEM LATERAL: Aparece APENAS no Desktop */}

            <motion.div

              initial={{ opacity: 0, scale: 0.98 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              transition={{ duration: 1, delay: 0.2 }}

              className="hidden lg:block relative aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-secondary overflow-hidden hover:scale-[1.01] transition-all duration-700 shadow-2xl"

            >

              <img

                src="jorge-background.webp"

                alt="Jorge Dias - Psicoterapeuta"

                fetchPriority="high" 

                decoding="sync" 

                className="w-full h-full object-cover"

              />

              <div className="absolute inset-0 bg-primary/5"></div>

            </motion.div>

          </div>

        </section>

        {/* SECTION 3: O Trabalho — para quem é, autoridade, os dois processos e FAQ */}

        <section id="dinamica" className="bg-white">

          

          <div className="pt-16 pb-2">

            <div className="container">

              <div className="max-w-3xl mx-auto">

                

                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">

                  

                  {/* 3.1 PARA QUEM É ESTE TRABALHO */}

                  <div id="para-quem" className="scroll-mt-28">

                    <h2 className="text-center mb-4">COMO FUNCIONA O PROCESSO TERAPÊUTICO?</h2>

                    <p className="text-center max-w-2xl mx-auto mb-10">

                      Existem dois focos específicos:

                    </p>

                    <div className="space-y-5">

                      <a href="#quem-viveu" className="group block bg-white/60 p-6 md:p-7 border-l-4 border-primary shadow-sm hover:shadow-md hover:bg-white transition-all">

                        <p className="text-lg md:text-xl font-semibold text-primary mb-2">

                          Se você viveu ou ainda vive uma relação marcada por dinâmica narcisista

                        </p>

                        <p className="text-base md:text-lg text-foreground/80 mb-0">

                          É comum chegar confuso, cansado e tentando entender comportamentos que não fecham. O trabalho começa acolhendo essa confusão.

                        </p>

                        <span className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-xs md:text-sm uppercase tracking-wider transition-transform duration-300 group-hover:translate-y-1">

                          Entenda sobre <span aria-hidden="true">↓</span>

                        </span>

                      </a>

                      <a href="#quem-percebe" className="group block bg-white/60 p-6 md:p-7 border-l-4 border-accent shadow-sm hover:shadow-md hover:bg-white transition-all">

                        <p className="text-lg md:text-xl font-semibold text-primary mb-2">

                          Se você percebe comportamentos narcisistas em si

                        </p>

                        <p className="text-base md:text-lg text-foreground/80 mb-0">

                          Às vezes essa percepção nasce sozinha. Outras vezes chega porque alguém próximo encontrou este trabalho antes. As duas formas são válidas, desde que a decisão seja sua.

                        </p>

                        <span className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-xs md:text-sm uppercase tracking-wider transition-transform duration-300 group-hover:translate-y-1">

                          Entenda sobre <span aria-hidden="true">↓</span>

                        </span>

                      </a>

                    </div>

                    <p className="text-center text-base md:text-lg text-foreground/70 mt-8 mb-0">

                      Em ambos os casos, <strong>não realizo diagnóstico</strong>. O foco é trabalhar comportamentos e efeitos, com rótulo ou sem ele.

                    </p>

                  </div>

                  

                  {/* 3.2 FAIXA DE AUTORIDADE COMPACTA */}

                  <div id="autoridade" className="scroll-mt-28 pt-4">

                    <div className="bg-secondary/20 border border-border/40 rounded-2xl p-5 md:p-6 shadow-sm">

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

                        <div className="shrink-0 sm:w-44">

                          <p className="font-display text-xl md:text-2xl font-semibold text-primary mb-0">Jorge Dias</p>

                          <p className="text-sm text-foreground/70 mb-0">Psicoterapeuta clínico</p>

                        </div>

                        <div className="flex flex-wrap gap-3 sm:justify-end sm:ml-auto">

                          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-border/50">

                            <GraduationCap className="text-accent shrink-0" size={20} />

                            <span className="text-xs md:text-sm font-semibold text-foreground/90">Graduação em <strong>Psicologia</strong> pela UEL</span>

                          </div>

                          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-border/50">

                            <Award className="text-accent shrink-0" size={20} />

                            <span className="text-xs md:text-sm font-semibold text-foreground/90"><strong>Pós-graduações</strong> em Transtornos de Personalidade, Neuropsicologia e Existencialismo</span>

                          </div>

                          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-border/50">

                            <Clock className="text-accent shrink-0" size={20} />

                            <span className="text-xs md:text-sm font-semibold text-foreground/90"><strong>+3.000 horas</strong> de atendimento clínico</span>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  

                  {/* 3.3 O QUE COSTUMA TRAZER AS PESSOAS */}

                  <div id="trazer" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">O que te trouxe aqui?</h2>

                    <p>

                      A maioria chega quando percebe que <strong>não está mais conseguindo lidar sozinha</strong>.

                    </p>

                    <p>

                      Muitas vezes a relação está <strong>por um fio</strong>. A busca natural é por alguma forma de alívio ou clareza.

                    </p>

                    <p>

                      Resolver esse momento importa. Mas costuma ser <strong>só o começo</strong>. O trabalho que sustenta mudança real costuma ir além da crise que trouxe a pessoa até aqui.

                    </p>

                  </div>

                  

                  {/* 3.4 COMO O TRABALHO ACONTECE */}

                  <div id="como-acontece" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">COMO FUNCIONA O PROCESSO TERAPÊUTICO?</h2>

                    <p>

                      <strong>Cada pessoa funciona de um jeito.</strong> Nas primeiras sessões, o foco é entender como você se relaciona consigo e com os outros. É um momento de escuta e investigação.

                    </p>

                    <p>

                      Depois, o trabalho se aprofunda. Olhamos padrões, efeitos e o que se repete. Com o tempo, as sessões deixam de girar apenas em torno da relação problemática e passam a incluir outras áreas da vida.

                    </p>

                    <p>

                      <strong>Não existe roteiro pronto.</strong> A conversa conduz. Ao mesmo tempo, existe uma direção clara: sair do lugar de confusão ou justificativa e conseguir olhar com mais amplitude.

                    </p>

                  </div>

                  

                  {/* 3.5 O TRABALHO COM QUEM VIVEU A RELAÇÃO */}

                  <div id="quem-viveu" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">A terapia para quem viveu a relação</h2>

                    <p>

                      Relações assim costumam <strong>prender a pessoa no detalhe</strong>.

                    </p>

                    <p>

                      A mente fica ocupada tentando decifrar intenções, silêncios e mudanças de comportamento. Perguntas como "por que ele fez isso?" ou "qual a intenção dela?" consomem muita energia.

                    </p>

                    <p className="mb-2">

                      Enquanto isso, uma pergunta mais simples fica em segundo plano:

                    </p>

                    <div className="bg-white/60 p-6 border-l-4 border-primary shadow-sm">

                      <p className="text-xl md:text-2xl font-display text-primary font-semibold text-center mb-0">

                        Essa relação faz bem para mim?

                      </p>

                    </div>

                    <p className="pt-6">

                      Isso não acontece por acaso. No início, quem reproduz comportamentos narcisistas costuma validar e reforçar a outra pessoa. 
                    </p>
                        <p>
                        Com o tempo, esse reforço se torna imprevisível. Sinais que antes eram claros deixam de acontecer. A mente fica cheia de pontas soltas e insiste em tentar fechá-las.

                        </p>
                     
                    <p>

                      É nesse processo que a presença do outro se instala com força e a <strong>dependência emocional</strong> se forma.

                    </p>

                    <p>

                      O início do processo terapeutico é acolhedor, sem suposições e sem pressa para interpretar. Depois, iremos observar a relação como um todo, evitando focar em detalhes específicos. Também busca-se compreender o que outras experiências da vida ensinaram sobre se colocar em segundo plano.

                    </p>

                  </div>

                  

                  {/* 3.6 O TRABALHO COM QUEM PERCEBE COMPORTAMENTOS NARCISISTAS EM SI */}

                  <div id="quem-percebe" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">O processo terapêutico com quem percebe comportamentos narcisistas em si</h2>

                    <p>

                      <strong>Aqui a postura muda.</strong> Continua havendo escuta, mas o trabalho é mais direto. O foco passa a ser como a pessoa lê o outro e como interpreta o efeito do próprio comportamento nas relações.

                    </p>

                    <p>

                      Muitas vezes existe dificuldade real em perceber esse impacto. Também é comum aparecerem justificativas que protegem a autoimagem e dificultam o olhar mais honesto.

                    </p>

                    <p>

                      Avançar rápido demais costuma gerar fechamento. Por isso o trabalho é feito com cuidado e constância. O objetivo <strong>não é acusar</strong>. É criar condições para que a pessoa consiga enxergar padrões que antes passavam despercebidos.

                    </p>

                    <div className="bg-white/60 p-6 border-l-4 border-accent shadow-sm">

                      <p className="text-base md:text-lg mb-0">

                        Se você está buscando ajuda para o companheiro ou a companheira, entenda: <strong>terapia não se impõe</strong>. Só é possível obter resultados consistentes quando existe o interesse em participar.

                      </p>

                    </div>

                  </div>

                  

                  {/* 3.7 CTA INTERMEDIÁRIO */}

                  <div className="pt-10 md:pt-14">

                    <p className="text-center max-w-2xl mx-auto mb-8">

                      Se isso faz sentido para o que você está vivendo, o próximo passo é simples.

                    </p>

                    <div className="flex justify-center">

                      <a 

                        href="#clinica" 

                        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-10 rounded-md font-semibold text-sm uppercase tracking-wider text-center shadow-lg"

                      >

                        Quero agendar uma sessão

                      </a>

                    </div>

                  </div>

                  

                  {/* 3.8 O QUE ESPERAR DO PROCESSO */}

                  <div id="expectativa" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">O QUE ESPERAR DA TERAPIA?</h2>

                    <p>

                      <strong>Este não é um trabalho de alívio pontual.</strong>

                    </p>

                    <p>

                      Quem costuma permanecer é quem entende que o processo vai além do problema inicial. Quem busca apenas uma fase de alívio, ou quem se sente acusado cedo demais, tende a sair.

                    </p>

                    <p>

                      Em alguns momentos haverá desconforto. <strong>Isso faz parte.</strong> Não é sinal de que algo está errado.

                    </p>

                    <p>

                      Com o tempo, o foco das sessões se amplia. A relação que trouxe a pessoa continua importando, mas deixa de ser o único assunto.

                    </p>

                  </div>

                  

                  {/* 3.9 PERGUNTAS FREQUENTES */}

                  <div id="faq" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">Perguntas frequentes</h2>

                    <div className="space-y-4 mb-2">

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>Você faz diagnóstico de narcisismo?</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p className="mb-4">

                            Não. O diagnóstico de Transtorno de Personalidade Narcisista exige uma <strong>bateria de avaliação psicológica</strong>. Eu não realizo esse tipo de trabalho.

                          </p>

                          <p className="mb-0">

                            Nas sessões, o foco é compreender comportamentos, padrões e efeitos nas relações, com rótulo ou sem ele.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>Estou buscando ajuda para meu companheiro ou minha companheira. Faz sentido?</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p className="mb-4">

                            Faz sentido <strong>entender a dinâmica</strong>. Não faz sentido tentar colocar outra pessoa em terapia contra a vontade dela. Terapia não funciona por imposição.

                          </p>

                          <p className="mb-0">

                            Nesses casos, o que é possível é a própria pessoa compreender melhor o que está acontecendo e o que pode ser esperado de um processo terapêutico.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>E se eu tiver comportamentos narcisistas?</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p className="mb-4">

                            Se essa pergunta existe em você, ela <strong>já é parted do processo terapêutico</strong>.

                          </p>

                          <p className="mb-0">

                            O objetivo não é cravar um rótulo. É compreender o que esses comportamentos protegem, o que eles custam nas relações e o que muda quando a pessoa começa a enxergá-los com mais honestidade.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>O processo é rápido?</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p className="mb-4">

                            Se a relação está em crise, as primeiras sessões olham para isso. Estabilizar o momento atual é importante, mas costuma ser <strong>só o começo</strong>.

                          </p>

                          <p className="mb-0">

                            O trabalho que sustenta mudança real tende a ser mais amplo e levar mais tempo.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>Como são as sessões?</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p className="mb-4">

                            São semanais, de 50 minutos, online. <strong>Não existe protocolo rígido.</strong> A conversa conduz o que precisa ser trabalhado em cada encontro.

                          </p>

                          <p className="mb-0">

                            Ao mesmo tempo, existe uma direção clara ao longo do processo.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>Você atende com urgência?</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p className="mb-0">

                            Sim. Além dos acompanhamentos semanais, realizo <strong>plantão psicológico</strong> e atendimentos imediatos para quem está precisando de acolhimento direto. Na conversa de agendamento damos encaminhamento conforme a necessidade e a disponibilidade.

                          </p>

                        </div>

                      </details>

                    </div>

                  </div>

                  

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 4: O Profissional */}

        <section id="profissional" className="pt-8 pb-16 bg-white">

          <div className="container">

            <div className="max-w-1xl mx-auto">

              

              <h2 className="text-center mb-12">Conheça o especialista</h2>

              

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-secondary/20 p-8 md:p-12 rounded-2xl border border-border/40 shadow-sm">

                

                {/* Imagem de Autoridade */}

                <div className="md:col-span-4 flex justify-center">

                  <div className="relative w-48 h-48 md:w-full md:h-64 rounded-full md:rounded-xl overflow-hidden shadow-lg transition-all duration-500 border-4 border-white">

                    <img 

                      src="jorge-background.webp"

                      alt="Jorge Dias - Psicoterapeuta Clínico"

                      fetchPriority="high" 

                      decoding="sync" 

                      className="w-full h-full object-cover"

                    />

                  </div>

                </div>

                {/* Credenciais e Texto */}

                <div className="md:col-span-8 space-y-6">

                  <h4 className="text-2xl font-display text-primary mb-2">Jorge Dias</h4>

                  <div className="text-lg text-foreground/80 leading-relaxed space-y-4">

                    <p>

                      Psicoterapeuta Clínico com foco em Relacionamentos Narcisistas e dependência emocional. 

                    </p>

                    <p>

                      Ajudo pessoas a descobrirem padrões Narcisistas em seus relacionamentos e recuperar a <strong>autonomia emocional</strong>.

                    </p>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <GraduationCap className="text-accent shrink-0" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">Graduado em <strong>Psicologia</strong> pela Universidade Estadual de Londrina</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <Award className="text-accent shrink-0" size={24} />

                      <span className="text-sm font-semibold text-foreground/90"><strong>Pós-graduação</strong> em Transtornos de Personalidade</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <Brain className="text-accent shrink-0" size={24} />

                      <span className="text-sm font-semibold text-foreground/90"><strong>Pós-graduação</strong> em Neuropsicologia</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <BookOpen className="text-accent shrink-0" size={24} />

                      <span className="text-sm font-semibold text-foreground/90"><strong>Pós-graduação</strong> em Existencialismo</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50 sm:col-span-2">

                      <Clock className="text-accent shrink-0" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">+3.000 horas de atendimento clínico</span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 5: Atendimento (reforçado, com plantão) e CTA Final */}

        <section className="py-10 md:py-16 bg-primary text-primary-foreground" id="clinica">

          

          <div className="container">

            <div className="max-w-4xl mx-auto">

              

              <h2 className="text-center text-white mb-10 md:mb-12">O Atendimento</h2>

              

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/5 border border-white/10 p-6 md:p-14 shadow-2xl rounded-2xl">

                

                {/* Coluna 1: O que está incluso + plantão */}

                <div className="space-y-8">

                  <ul className="space-y-5 text-base md:text-lg">

                    <li className="flex items-start gap-4">

                      <span className="w-7 h-7 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">✓</span>

                      <span className="text-primary-foreground/90">Sessões semanais de 50 minutos</span>

                    </li>

                    <li className="flex items-start gap-4">

                      <span className="w-7 h-7 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">✓</span>

                      <span className="text-primary-foreground/90">100% online, via Google Meet</span>

                    </li>

                    <li className="flex items-start gap-4">

                      <span className="w-7 h-7 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">✓</span>

                      <span className="text-primary-foreground/90">Valor: <strong>R$130</strong> por sessão</span>

                    </li>

                  </ul>

                  <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed mb-0">

                    Também realizo <strong className="text-primary-foreground">plantão psicológico</strong> para quem precisa de atendimento imediato.

                  </p>

                </div>

                {/* Coluna 2: Preço e Botão */}

                <div id="valor-agendamento" className="bg-white rounded-xl p-6 md:p-8 text-center flex flex-col items-center justify-center h-full shadow-xl">

                  

                  <span className="inline-flex items-center bg-accent/15 text-accent border border-accent/25 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-5">

                    

                    Atendimento 100% online

                  </span>

                  <span className="text-sm text-foreground/80 mb-10 block">Valor da sessão: <strong>R$130</strong></span>

                  <button

                    onClick={handleContactClick}

                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-6 rounded-md font-semibold text-sm uppercase tracking-wider mb-4"

                  >

                    Consultar Disponibilidade

                  </button>

                  <p className="text-xs text-foreground/50 italic mb-0">

                    Agendamento direto via WhatsApp.

                  </p>

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

            &copy; {new Date().getFullYear()} Jorge Dias — Psicoterapia Clínica.

          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold">

            <Link href="/politica-privacidade" className="hover:text-primary transition-colors">Privacidade</Link>

            <Link href="/termos-uso" className="hover:text-primary transition-colors">Termos</Link>

          </div>

        </div>

      </footer>

{/* Floating Action Button */}

      <button

        onClick={(e) => {

          e.preventDefault();

          // Âncora o FIM do cartão de valor no fundo da tela:

          // passos acima + cartão inteiro sempre visíveis no celular.

          document.getElementById('valor-agendamento')?.scrollIntoView({ behavior: 'smooth', block: 'end' });

          

        }}

        className="fixed bottom-8 right-8 z-[100] bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"

        aria-label="Ver valor e agendar"

      >

        <MessageCircle size={28} fill="currentColor" />

        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block uppercase tracking-widest font-bold">

          Ver valor e agendar

        </span>

      </button>

    </div>

  );

}
