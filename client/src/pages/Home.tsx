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

        {/* SECTION 2: Hero (Layout Capa de Revista no Mobile) */}

        <section className="relative min-h-[90svh] lg:min-h-[85vh] flex items-end lg:items-center pb-16 pt-32 lg:pt-16 lg:pb-0 bg-background overflow-hidden">

          

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

                Psicoterapia especializada em <br className="hidden md:block" />

                <span className="italic">Relações Narcisistas</span>

              </h1>

              

              <p className="text-lg md:text-xl text-white/90 lg:text-accent font-serif leading-relaxed mb-10 max-w-xl">

                Para quem viveu (ou vive) uma relação marcada pela <strong>dinâmica narcisista</strong> — e para quem percebe <strong>comportamentos narcisistas em si</strong>. Duas formas de chegar, o mesmo compromisso: sessões semanais, 100% online, com sigilo.

              </p>

              

              {/* Botão adaptado: Branco no mobile para destacar no fundo escuro */}

              <a 

                href="#dinamica" 

                className="btn-high-ticket !bg-white !text-black hover:!bg-gray-200 lg:!bg-primary lg:!text-primary-foreground lg:hover:!bg-accent lg:hover:!text-primary shadow-2xl lg:shadow-none"

              >

                entenda para quem é e como funciona

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

        {/* SECTION 3: O Trabalho — para quem é, quando buscar e os dois processos */}

        <section id="dinamica" className="bg-white">

          

          <div className="pt-16 pb-2">

            <div className="container">

              <div className="max-w-3xl mx-auto">

                

                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">

                  

                  {/* 3.1 PARA QUEM É ESTE TRABALHO */}

                  <div id="para-quem" className="scroll-mt-28">

                    <h2 className="text-center mb-4">Para quem é este trabalho</h2>

                    <p className="text-center max-w-2xl mx-auto mb-10">

                      Este atendimento é pensado, desde o primeiro dia, para dois grupos de pessoas — e saber em qual deles você se encaixa é o melhor ponto de partida.

                    </p>

                    <div className="space-y-5">

                      <a href="#quem-viveu" className="group block bg-white/60 p-6 md:p-7 border-l-4 border-primary shadow-sm hover:shadow-md hover:bg-white transition-all">

                        <p className="text-base md:text-lg mb-0">

                          <strong>Se você viveu (ou vive) uma relação marcada pela dinâmica narcisista —</strong> uma relação assim roubou parte da sua identidade e te deixou sem certeza de quem você é. O trabalho começa pela estabilização do momento atual e segue para a reconstrução da sua autonomia.

                        </p>

                        <span className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-xs md:text-sm uppercase tracking-wider transition-transform duration-300 group-hover:translate-y-1">

                          Entenda como esse trabalho funciona <span aria-hidden="true">↓</span>

                        </span>

                      </a>

                      <a href="#quem-percebe" className="group block bg-white/60 p-6 md:p-7 border-l-4 border-accent shadow-sm hover:shadow-md hover:bg-white transition-all">

                        <p className="text-base md:text-lg mb-0">

                          <strong>Se você percebe comportamentos narcisistas em si —</strong> muitas vezes essa percepção surge por conta própria; outras vezes, porque um companheiro, uma companheira ou alguém próximo encontrou este trabalho antes de você. As duas formas de chegar valem. Uma condição, porém, não muda: a vontade de começar precisa ser sua.

                        </p>

                        <span className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-xs md:text-sm uppercase tracking-wider transition-transform duration-300 group-hover:translate-y-1">

                          Entenda como esse trabalho funciona <span aria-hidden="true">↓</span>

                        </span>

                      </a>

                    </div>

                  </div>

                  

                  {/* 3.2 QUANDO LIDAR SOZINHO DEIXA DE SER SUFICIENTE */}

                  <div id="quando-lidar" className="scroll-mt-28 pt-10 md:pt-14">

                    <h2 className="text-center mb-12">Quando lidar sozinho deixa de ser suficiente</h2>

                    <p>

                      Na maior parte das vezes, as pessoas chegam quando percebem que não estão mais conseguindo lidar sozinhas. Pode ser depois de uma crise, de uma discussão que se repetiu pela milésima vez, ou de um cansaço que o fim de semana já não resolve. Em geral, é um momento em que alguma relação está <strong>por um fio</strong> — e a busca natural é por uma solução.

                    </p>

                    <p>

                      Se é aqui que você está, uma coisa precisa ficar clara desde já: <strong>resolver esse momento é só o início do processo</strong>. Depois que a situação se estabiliza, o acompanhamento passa a um segundo momento, focado em autoconhecimento — e é ele que sustenta a mudança de verdade. Prometer menos que isso seria prometer demais.

                    </p>

                    <p>

                      Costumo usar uma analogia simples para explicar essa divisão: cada pessoa é como um prédio, com vários andares e salas. Às vezes, uma sala está em chamas, e o trabalho é focado: <strong>controlar aquele incêndio</strong> antes de qualquer coisa. Às vezes, está tudo em paz, e o momento é de outro tipo de trabalho: <strong>explorar os andares</strong>, em um processo de autoconhecimento. O acompanhamento passa pelos dois — primeiro, quando necessário, o incêndio; depois, a exploração.

                    </p>

                    

                    {/* TRÊS ETAPAS DO ACOMPANHAMENTO */}

                    <div className="mt-12 bg-white border border-border/50 shadow-sm p-8 rounded-2xl">

                      <h3 className="text-xl md:text-2xl font-display text-primary mb-6 font-semibold border-b border-border/40 pb-4">

                        O acompanhamento funciona em três etapas:

                      </h3>

                      <ul className="space-y-6 text-base md:text-lg text-foreground/80">

                        <li className="flex items-start gap-4">

                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</span>

                          <span><strong>Estabilizar o momento atual</strong> — o que está por um fio agora é a prioridade.</span>

                        </li>

                        <li className="flex items-start gap-4">

                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</span>

                          <span><strong>Compreender a dinâmica</strong> — os padrões, os gatilhos, o que se repete e por quê.</span>

                        </li>

                        <li className="flex items-start gap-4">

                          <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">3</span>

                          <span><strong>Trabalhar o fundo</strong> — autonomia, autoconhecimento e critério para que relações semelhantes não se repitam.</span>

                        </li>

                      </ul>

                    </div>

                    

                    {/* QUEM BUSCA AJUDA PARA OUTRA PESSOA */}

                    <h3 className="text-xl md:text-2xl font-display text-primary mb-6 font-semibold pt-12">

                      E quem busca ajuda para outra pessoa?

                    </h3>

                    <p>

                      Esse caminho é mais comum do que parece: você chegou até aqui pensando no seu companheiro, na sua companheira ou em alguém próximo — porque enxerga comportamentos narcisistas na pessoa.

                    </p>

                    <p>

                      Primeiro, uma clareza que poupa tempo e expectativa: o <strong>diagnóstico de Transtorno de Personalidade Narcisista só acontece por meio de uma bateria completa de avaliação psicológica</strong> — outro tipo de trabalho, que eu não realizo. Mas aqui está o que importa: <strong>comportamentos narcisistas não pertencem a um transtorno — qualquer pessoa pode reproduzi-los</strong>. E mesmo sem nenhum rótulo ou diagnóstico fechado, lidar com esses comportamentos <strong>produz mudanças diretas na relação</strong>: no que se repete, no que machuca e no que pode, de fato, mudar.

                    </p>

                    <p>

                      O único ponto que não depende de você: a vontade de começar precisa ser de quem vai passar pelo processo. Terapia não se impõe — e insistir demais, por fora, costuma fortalecer exatamente as defesas que o trabalho precisaria transformar.

                    </p>

                    <p className="mb-2">

                      Para dimensionar a diferença entre os dois casos, uma distinção que ajuda:

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">

                      <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">

                        <h4 className="text-xl font-display text-primary mb-4 font-semibold">O Narcisista Patológico</h4>

                        <p className="text-base md:text-lg leading-relaxed mb-0">

                          Faz os outros sofrerem com a sua condição, mas ele mesmo não sofre. Vive protegido por uma realidade fantasiosa impenetrável, onde a culpa nunca é dele. <strong>Todas as interações deixam a outra pessoa se sentindo cansada e invalidada</strong>.

                        </p>

                      </div>

                      <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">

                        <h4 className="text-xl font-display text-accent mb-4 font-semibold">A reprodução de traços</h4>

                        <p className="text-base md:text-lg leading-relaxed mb-0">

                          Qualquer pessoa pode reproduzir comportamentos narcisistas — a diferença é que o mecanismo não funciona o tempo todo. Ela causa dor nos outros, <strong>mas também sofre muito</strong>: assiste à ruína dos seus vínculos, sente a perda e fica perdida sobre quais erros são, de fato, seus.

                        </p>

                      </div>

                    </div>

                    

                    {/* CTA */}

                    <div className="flex justify-center mt-10 mb-14">

                      <a 

                        href="#clinica" 

                        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-10 rounded-md font-semibold text-sm uppercase tracking-wider text-center shadow-lg"

                      >

                        Agendar Sessão

                      </a>

                    </div>

                  </div>

                  

                  {/* 3.3 O TRABALHO COM QUEM VIVEU (OU VIVE) UMA RELAÇÃO ASSIM */}

                  <div id="quem-viveu" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">O trabalho com quem viveu (ou vive) uma relação assim</h2>

                    <p>

                      <strong>O começo é sem suposições.</strong> Nas primeiras sessões, eu não chego com hipóteses sobre a sua relação nem com interpretações prontas sobre o que você deveria sentir. Muita gente chega depois de anos ouvindo que está "exagerando" — o primeiro movimento, então, é o contrário: ouvir, sem pressa e sem julgamento, no seu tempo.

                    </p>

                    <p>

                      <strong>A sua perspectiva vem primeiro.</strong> Conforme a confiança cresce, o trabalho passa a compreender como você enxerga o mundo e faz sentido das coisas — e essa forma sua de enxergar é respeitada antes de qualquer análise sobre ela. Você não vai precisar provar a sua dor.

                    </p>

                    <p>

                      Para sobreviver a uma relação assim, muita gente desenvolve uma de duas respostas: a <strong>submissão</strong> — agir conforme a vontade do outro porque é a saída menos dolorosa — ou a <strong>resistência</strong> — lutar, argumentar, reagir sempre na direção oposta. Nos dois casos, a sombra do outro continua a ditar as regras da sua vida. Reconhecer qual é a sua é parte do trabalho.

                    </p>

                    <p>

                      <strong>O momento atual, com pragmatismo.</strong> Se você chega em um momento em que a relação está por um fio, a prioridade imediata é o que está travando a sua vida agora — examinado de forma concreta, em conjunto, sem drama.

                    </p>

                    <p>

                      <strong>Depois, o trabalho de fundo.</strong> Com a situação estabilizada, o acompanhamento foca em <strong>resgatar e reconstruir a sua autonomia</strong>, lidar com a dependência emocional — que costuma estar presente — e suas consequências, e construir condições reais para que relações semelhantes não se repitam.

                    </p>

                    <p>

                      <strong>Passado e presente, juntos.</strong> Esse trabalho olha para os dois: compreender padrões, perceber detalhes que passavam despercebidos, reconhecer relações que deixaram marcas e entender como esses comportamentos afetaram você — e como ainda afetam. Não para reviver a dor, mas para que ela deixe de ditar os seus próximos passos.

                    </p>

                  </div>

                  

                  {/* 3.4 O TRABALHO COM QUEM PERCEBE COMPORTAMENTOS NARCISISTAS EM SI */}

                  <div id="quem-percebe" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">O trabalho com quem percebe comportamentos narcisistas em si</h2>

                    <p>

                      <strong>A postura é mais crítica e direcionada.</strong> A estrutura se parece com a do trabalho anterior, mas a postura é outra: além de acolher, eu questiono. Este grupo costuma chegar com perguntas que já se fez sozinho por muito tempo — e o trabalho é levá-las a sério, uma a uma, mesmo quando a resposta incomoda.

                    </p>

                    <p>

                      <strong>Primeiro, estabilizar.</strong> Se a relação atual está em crise, a prioridade inicial é estabilizá-la — o resto do processo depende dessa base.

                    </p>

                    <p>

                      <strong>Empatia sob exame.</strong> O trabalho compreende a forma como você sente e interpreta empatia — o quanto dela é genuína, o quanto é fabricada — e como você enxerga e trata o outro. Não como condenação: como ponto de partida honesto.

                    </p>

                    <p>

                      <strong>Como você lê o outro.</strong> Quem reproduz comportamentos narcisistas tende a lidar com as relações como se conhecesse o outro melhor do que ele conhece a si mesmo. Isso cria <strong>dependência emocional</strong> e dificuldade em aceitar comportamentos, ideias ou posições do outro que não coincidam com essa leitura. Os mesmos padrões se repetem de formas explícitas e implícitas — e cada relação os reproduz à sua maneira. Por isso, uma parte central do trabalho é olhar para as suas relações atuais e compreender essa dinâmica acontecendo em tempo real.

                    </p>

                    <p>

                      <strong>Versões de si.</strong> É muito comum que as pessoas deste grupo já se façam, sozinhas, as mesmas perguntas que o trabalho faria. Parte do processo é compreender com quantas <strong>versões de si</strong> estamos lidando — e o quão enraizadas elas estão. Cada uma tem suas justificativas prontas, e cada uma vai precisar ser ouvida antes de ser questionada.

                    </p>

                    <p>

                      <strong>Desconstrução.</strong> Entendidos os padrões, começa a parte mais delicada do processo. Sessão após sessão, por meio de perguntas e contradições colocadas na conversa, o objetivo é que você reconheça algo difícil: a imagem que você construiu do outro não é fixa — e nem corresponde, de fato, a quem a pessoa realmente é.

                    </p>

                    <p>

                      Encarar isso costuma gerar um desconforto grande, porque a sensação de onipotência — implícita ou explícita — é o principal mecanismo de defesa de quem reproduz comportamentos narcisistas. Esse desconforto não é sinal de que algo deu errado: é sinal de que o trabalho está acontecendo. E você não vai atravessá-lo sozinho.

                    </p>

                    <p>

                      <strong>Narrativas de autojustificação.</strong> Aos poucos, apoiado no vínculo terapêutico, o trabalho revisa as situações em que a própria mente fugiu do desconforto por meio de narrativas que mantinham tudo em ordem: "fiz isso porque era o melhor para ele", "não foi minha culpa, fui levado pela situação", "meu passado me fez ser desse jeito". O psicólogo Albert Bandura descreveu esses mecanismos como <strong>desengajamento moral</strong> — e eles aparecem com frequência nos comportamentos narcisistas. Reconhecê-los não é virar contra si mesmo: é finalmente enxergar quem está no comando das suas decisões.

                    </p>

                  </div>

                  

                  {/* 3.5 O QUE ESTE TRABALHO É E O QUE NÃO É */}

                  <div id="limites" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-4">O que este trabalho é — e o que não é</h2>

                    <p className="text-center max-w-2xl mx-auto mb-10">

                      Expectativa alinhada desde o começo é o que faz o processo funcionar — por isso, prefiro deixar isso escrito.

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

                      <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">

                        <h4 className="text-xl font-display text-primary mb-4 font-semibold">O que você encontra</h4>

                        <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed text-foreground/80">

                          <li>Um acompanhamento semanal, conduzido pela conversa, sem estrutura rígida.</li>

                          <li>Começo sem suposições: as primeiras sessões são para ouvir.</li>

                          <li>Direção clínica declarada: reconstrução de autonomia para quem viveu a relação; postura mais crítica e direcionada para quem percebe os traços em si.</li>

                          <li>Preço e formato transparentes: R$130 por sessão, 100% online, por Google Meet.</li>

                        </ul>

                      </div>

                      <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">

                        <h4 className="text-xl font-display text-accent mb-4 font-semibold">O que você não encontra</h4>

                        <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed text-foreground/80">

                          <li>Diagnóstico ou laudo — isso exige uma bateria de avaliação psicológica, outro tipo de trabalho.</li>

                          <li>Promessa de resultado, prazo ou "cura".</li>

                          <li>Solução imediata para a relação por um fio — resolver o momento atual é só o início do processo.</li>

                          <li>Terapia imposta: o acompanhamento só começa quando a própria pessoa quer — mesmo quando quem procura é o companheiro ou a companheira.</li>

                        </ul>

                      </div>

                    </div>

                    <div className="text-center pt-4 pb-2">

                      <a href="#clinica" className="btn-high-ticket inline-block">

                        Quero iniciar meu processo

                      </a>

                    </div>

                  </div>

                  

                  {/* 3.6 PERGUNTAS FREQUENTES */}

                  <div id="faq" className="scroll-mt-28 pt-10 md:pt-14 border-t border-border/30">

                    <h2 className="text-center mb-10">Perguntas frequentes</h2>

                    <div className="space-y-4 mb-2">

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"Você faz diagnóstico de narcisismo?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            Não. O diagnóstico de Transtorno de Personalidade Narcisista exige uma <strong>bateria completa de avaliação psicológica</strong> — outro tipo de trabalho, que eu não realizo.

                          </p>

                          <p>

                            Nas sessões, o foco é outro: entender comportamentos e efeitos, com rótulo ou sem ele.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"Estou buscando ajuda para meu companheiro ou minha companheira. Por onde começamos?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            Por uma informação que poupa tempo: o acompanhamento só começa quando a própria pessoa quer — <strong>terapia não se impõe</strong>.

                          </p>

                          <p>

                            O que é possível de fora é entender a dinâmica narcisista e o que pode, e o que não pode, ser esperado de um processo. Essa conversa também acontece nas sessões.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"E se eu for o narcisista da história?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            É uma pergunta que muita gente faz antes da primeira sessão. Se ela existe em você, ela também é <strong>material de trabalho</strong>.

                          </p>

                          <p>

                            O objetivo não é cravar rótulos: é entender por que essas defesas foram construídas — e quanto elas custam nas suas relações.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"Isso vai resolver meu problema rápido?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            Se você chega com uma relação por um fio, o primeiro momento do trabalho é estabilizar isso. Mas é só o início: depois vem o processo de autoconhecimento, que é o que sustenta a mudança.

                          </p>

                          <p>

                            Não existe <strong>fórmula mágica</strong> nem prazo garantido — existe direção.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"Você vai me dizer o que fazer?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            Depende do caso. Com quem viveu uma relação narcisista, o começo é acolher, sem suposições. Com quem percebe os traços em si, a postura é mais crítica e direcionada.

                          </p>

                          <p>

                            Em ambos, o critério que fica no fim é o seu.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"Como são as sessões?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            Semanais, de 50 minutos, online por Google Meet, com sigilo. Não há roteiro fixo: a conversa conduz cada sessão.

                          </p>

                        </div>

                      </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                        <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                          <span>"Quanto custa?"</span>

                          <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                        </summary>

                        <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                          <p>

                            R$130 por sessão, com agendamento direto pelo WhatsApp.

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

        {/* SECTION 5: Estrutura do Atendimento e CTA Final */}

        <section className="py-10 md:py-16 bg-primary text-primary-foreground" id="clinica">

          

          <div className="container">

            <div className="max-w-4xl mx-auto">

              

              

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/5 border border-white/10 p-6 md:p-14 shadow-2xl rounded-2xl">

                

                {/* Coluna 1: Como funciona */}

                <div className="space-y-8">

                  <div className="space-y-6">

                    <div className="flex gap-4 items-start">

                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>

                      <div>

                        <h4 className="font-display font-semibold text-white text-lg mb-1">A Primeira Sessão</h4>

                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Uma conversa livre de julgamentos morais. O objetivo é compreender a sua história de vida e suas relações, colocando <strong>você no centro do processo.</strong></p>

                      </div>

                    </div>

                    <div className="flex gap-4 items-start">

                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>

                      <div>

                        <h4 className="font-display font-semibold text-white text-lg mb-1">O Acompanhamento</h4>

                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Sessões semanais de 50 minutos, conduzidas online via Google Meet, com total sigilo. Respeitando o tempo do seu processo.</p>

                      </div>

                    </div>

                  </div>

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
