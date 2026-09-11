import { useEffect, useState } from "react";

import { Link, useLocation } from "wouter";

import { Menu, X, MessageCircle, Award, Clock, GraduationCap } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";



export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Novo estado para controlar a exibição do texto extra

  const [showMoreContent, setShowMoreContent] = useState(false);

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

    { name: "O Profissional", href: "#profissional" },

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

            Jorge Dias — <span className="font-normal opacity-70">Terapia de Casal</span>

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

              className="w-full h-full object-cover object-top grayscale"

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

                Terapia de casal 100% online 

              </span>

              

              <h1 className="font-display text-white lg:text-foreground mb-6 lg:mb-4">

                Terapia para casais com<br className="hidden md:block" />

                <span className="italic"> dificuldades na comunicação</span>

              </h1>

              

              <p className="text-lg md:text-xl text-white/90 lg:text-accent font-serif leading-relaxed mb-10 max-w-xl">

               Brigas que nunca terminam, sentimento de <strong>vazio e solidão</strong>. Quando a pessoa de hoje não parece a mesma do início. Existe uma <strong>explicação</strong> para isso.

              </p>

              

              {/* Botão adaptado: Branco no mobile para destacar no fundo escuro */}

              <a 

                href="#dinamica" 

                className="btn-high-ticket !bg-white !text-black hover:!bg-gray-200 lg:!bg-primary lg:!text-primary-foreground lg:hover:!bg-accent lg:hover:!text-primary shadow-2xl lg:shadow-none"

              >

                entenda a dinâmica

              </a>

            </motion.div>

            

            {/* 3. IMAGEM LATERAL: Aparece APENAS no Desktop */}

            <motion.div

              initial={{ opacity: 0, scale: 0.98 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              transition={{ duration: 1, delay: 0.2 }}

              className="hidden lg:block relative aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-secondary overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"

            >

              <img

                src="jorge-background.webp"

                alt="Jorge Dias - Psicoterapeuta, terapia de casal online"

                fetchPriority="high" 

                decoding="sync" 

                className="w-full h-full object-cover"

              />

              <div className="absolute inset-0 bg-primary/5"></div>

            </motion.div>



          </div>

        </section>



        {/* SECTION 3: O Manifesto (A Dinâmica) */}

        <section id="dinamica" className="bg-white">

          

          <div className="pt-16 pb-2">

            <div className="container">

              <div className="max-w-3xl mx-auto">

                

                <h2 className="text-center mb-12">O amor que parece uma competição sem fim</h2>

                

                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">

                  <p>

                    Um relacionamento saudável não é definido pela falta de conflito, mas sim pela forma como o <strong>conflito é resolvido</strong>.

                  </p>

                  <p>

                    A prática clínica mostra um padrão: a maioria das brigas não é sobre <strong>apenas um assunto</strong>. O tema muda, mas a base é sempre a mesma: <strong>a disputa por quem está certo</strong>.

                  </p>

                  <p>

                    Cada um enxerga a relação por um ponto de vista, moldado por histórias, feridas e expectativas que o outro muitas vezes <strong>não consegue compreender</strong>. 
                  </p>  
  
                    <p>

                    O problema começa quando a própria versão dos fatos passa a ser tratada como a <strong>única versão possível</strong>. 

                  </p>

                  <p>

                    Existe outro detalhe, ainda mais silencioso: Quando o casal se conheceu, cada um criou uma <strong>imagem idealizada</strong> do outro.

                  </p>

                  <p>

                    Essa imagem congelou no tempo, enquanto a pessoa real mudou. Muita cobrança de hoje é, no fundo, uma tentativa de forçar o outro a <strong>caber numa imagem que ele mesmo não escolheu</strong>.

                  </p>

                   <p>

                    Quando a relação entra nesse modo, o casal tende a se dividir em dois movimentos característicos:

                  </p>

                  

                  {/* RECURSO EXPANSÍVEL NOS DOIS POLOS */}

                  <div className="space-y-4 my-8">

                    <details className="group border border-border/40 bg-secondary/5 rounded-xl p-5 cursor-pointer transition-all">

                      <summary className="font-display font-normal text-primary text-lg list-none flex justify-between items-center select-none">

                        <span><strong>O movimento de quem confronta:</strong> Exigir, cobrar e insistir.</span>

                        <span className="text-accent text-xs font-sans border border-accent/20 rounded px-2 py-0.5 transition-transform group-open:bg-accent group-open:text-white">▼</span>

                      </summary>

                      <div className="text-foreground/80 mt-3 text-base md:text-lg leading-relaxed pt-3 border-t border-border/20 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p className="mb-4">

                          Na briga, essa pessoa interrompe, aponta, lembra erros antigos e aumenta o volume. Quem está de fora enxerga agressividade; por dentro, existe outra coisa: <strong>o desespero de quem não se sente ouvido(a)</strong>.
                        </p>

                        <p className="mb-4">

                          Cada tentativa frustrada de conversar vira um item guardado numa lista de mágoas. E essa lista, com o tempo, <strong>pesa mais do que qualquer assunto novo</strong>.
                        </p>

                        <p>

                          A lógica é simples: se conversar não funcionou, cobrar mais alto pode funcionar. Nunca funciona — mas o cansaço emocional já <strong>não permite enxergar isso</strong>. 

                        </p>

                        <p>

                          No fundo, existe o medo de que o silêncio do outro signifique indiferença: se a relação está acabando, <strong>é melhor brigar do que não sentir nada</strong>.

                        </p>

                      </div>

                    </details>



                    <details className="group border border-border/40 bg-secondary/5 rounded-xl p-5 cursor-pointer transition-all">

                      <summary className="font-display font-normal text-primary text-lg list-none flex justify-between items-center select-none">

                        <span><strong>O movimento de quem se recolhe:</strong> Silenciar, evitar e se proteger.</span>

                        <span className="text-accent text-xs font-sans border border-accent/20 rounded px-2 py-0.5 transition-transform group-open:bg-accent group-open:text-white">▼</span>

                      </summary>

                      <div className="text-foreground/80 mt-3 text-base md:text-lg leading-relaxed pt-3 border-t border-border/20 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p className="mb-4">

                           Existe a ideia de que, nessas brigas, qualquer palavra vira combustível. Então <strong>o silêncio parece a única saída</strong>: se calar, mudar de assunto, se trancar no trabalho, no celular, em outro cômodo.
                        </p>

                        <p className="mb-4">

                          Parece desinteresse — e é justamente assim que o outro interpreta. Mas quase sempre é <strong>autoproteção</strong>: a forma que essa pessoa encontrou de não piorar o que já está ruim.

                        </p>

                        <p className="mb-4">

                           Quanto mais um cobra, mais o outro se fecha. Quanto mais o outro se fecha, mais o primeiro cobra. O ciclo se retroalimenta — e nenhum dos dois percebe que está preso nele.

                        </p>

                        <p>

                          No fundo, esse movimento busca evitar que tudo o que ainda resta de bom se perca de vez.

                        </p>

                      </div>

                    </details>

                  </div>

                  <p>

                    <strong>Ninguém aqui é o vilão da história</strong>. Os dois movimentos são tentativas desesperadas de proteger o mesmo vínculo. Os papéis inclusive <strong>podem se inverter</strong> conforme o assunto.

                  </p>

                   <p>

                    Às vezes basta um tom de voz, um suspiro ou um olhar para que a 'briga eterna' se reinicie. A mesma cena, o mesmo desgaste, sem ninguém saber como sair.

                   </p>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">

                          <div className="bg-white/60 p-6 border-l-4 border-primary shadow-sm">

                            <p className="text-base md:text-lg italic mb-0">'Se eu não levantar a voz, não sou ouvido(a). Às vezes sinto que preciso gritar para existir nessa relação.'</p>

                          </div>

                          <div className="bg-white/60 p-6 border-l-4 border-accent shadow-sm">

                            <p className="text-base md:text-lg italic mb-0">'Se eu abrir a boca, vira briga. Aprendi que só me calando a gente consegue ter paz.'</p>

                          </div>

                        </div>



                  <p>

                    Os dois lados sofrem. E, enquanto a disputa segue, <strong>o que não é dito vira peso, e o que é dito vira arma</strong>.

                  </p>

                  <p>

                     Com o tempo, a relação inteira pode virar território de competição. <strong>Ganhar a discussão passa a valer mais do que se entender</strong>.

                  </p>

                  <p>

                    A terapia de casal existe para <strong>acabar com esse jogo</strong>. Não para decidir quem está certo, mas para que o casal volte a se comunicar <strong>sem apagar um ao outro</strong>.

                  </p>



                  {/* NOVOS PASSOS DO PROCESSO TERAPÊUTICO */}

                  <div className="mt-12 bg-white border border-border/50 shadow-sm p-8 rounded-2xl">

                    <h3 className="text-xl md:text-2xl font-display text-primary mb-6 font-semibold border-b border-border/40 pb-4">

                      O processo terapêutico acontece em três etapas:

                    </h3>

                    <ul className="space-y-6 text-base md:text-lg text-foreground/80">

                      <li className="flex items-start gap-4">

                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</span>

                        <span><strong>Entender a dinâmica da relação</strong>: Como chegaram até aqui, sem julgamento e sem procurar culpados.</span>

                      </li>

                      <li className="flex items-start gap-4">

                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</span>

                        <span><strong>Desarmar o ciclo</strong>: Mapear o que se repete nas brigas e compreender o que cada um protege ao brigar e ao se calar.</span>

                      </li>

                      <li className="flex items-start gap-4">

                        <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">3</span>

                        <span><strong>Reconstruir a aproximação</strong>: Nutrir uma conexão em que nenhum dos dois precise anular o outro para existir.</span>

                      </li>

                    </ul>

                  </div>



                  {/* BOTÃO AGENDAR SESSÃO */}

                  <div className="flex justify-center mt-10 mb-14">

                    <a 

                      href="#clinica" 

                      className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-10 rounded-md font-semibold text-sm uppercase tracking-wider text-center shadow-lg"

                    >

                      Agendar Sessão

                    </a>

                  </div>



                  {/* CAIXAS DE PERGUNTAS (ACORDEÕES) */}

                  <div className="space-y-4 mb-2">

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Estou buscando ajuda para outra pessoa"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>                    

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Muitas vezes observamos padrões de comportamento narcisista em nossas relações ou em pessoas próximas.

                        </p>

                        <p>

                          O diagnóstico de Transtorno de Personalidade Narcisista só pode ser feito após a realização de uma bateria de avaliação psicológica.

                        </p>

                        <p>

                          Porém, mesmo sem diagnóstico, é possivel que pessoas reproduzam <strong>comportamentos narcisistas</strong>. E sim, é possível ajudar quem reproduz esses comportamentos.

                        </p>

                        <p>

                          O ponto mais importante para se atentar é a <strong>vontade da outra pessoa</strong> em iniciar o processo terapêutico e lidar com essas questões.

                        </p>

                      </div>

                    </details>                    

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Terapia não é coisa para loucos?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>                    

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Existe um senso comum de que quem busca terapia é "louco" ou "ruim da cabeça".

                        </p>

                        <p>

                          Diversas vezes, em nosso cotidiano, enfrentamos situações que nos trazem a sensação de estar em um "beco sem saída". 

                        </p>

                        <p>

                          Sabe quando um aparelho eletrônico para de funcionar e o "jeitinho na tomada" não resolve mais? 

                        </p>

                        <p>

                          Nessas situações, buscamos ajuda de um <strong>especialista</strong> que tenha o conhecimento e as ferramentas certas para entender e corrigir o problema.

                        </p>

                        <p>

                          A mesma coisa acontece com nossa mente. As ferramentas que temos para solucionar problemas, algumas vezes <strong>deixam de ser suficientes</strong>.

                        </p>

                        <p>

                          Da mesma forma que um técnico usa seu <strong>conhecimento</strong> para compreender e resolver o problema, o terapeuta te ajuda a compreender quais ferramentas podem ser utilizadas para te tirar do "beco sem saída".

                        </p>

                        <p>

                          Te chamar de "maluco" por buscar ajuda especializada pode ser um mecanismo usado pelo Narcisista para te <strong>manter preso na relação</strong>.

                        </p>

                        <p>

                          O processo terapêutico é sigiloso, especializado e focado em te ajudar a <strong>conhecer a si mesmo</strong>.

                        </p>

                        <p>

                          Não existe <strong>cura milagrosa</strong> ou <strong>formula mágica</strong>. O foco do processo é te ajudar a se fortalecer para tomar as próprias decisões.

                        </p>

                      </div>

                    </details>

                    <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Eu posso ser narcisista sem saber?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>                    

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Muitas pessoas chegam ao consultório aterrorizadas pelas definições da internet, temendo ser "o monstro" das suas relações.

                        </p>

                        <p>

                          O fato de você questionar o impacto das suas ações e buscar terapia indica que a <strong>sua empatia está ativa</strong>, o que diminui as possibilidades do diagnóstico de Narcisismo Patológico. 

                        </p>

                        <p>

                          Isso não anula o fato de que defesas narcísicas mal resolvidas podem estar <strong>atrapalhando sua vida pessoal</strong>, mas demonstra existência de um caminho para a mudança.

                        </p>

                        <p>

                          O nosso foco não é entregar rótulos, mas compreender <strong>por que você construiu essas defesas</strong> e como elas afetam sua vida.

                        </p>

                      </div>

                    </details>

                    

                    <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Posso reproduzir comportamentos Narcisistas?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>

                      

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Em geral, a reprodução de Comportamentos Narcisistas está diretamente relacionada a <strong>Dependência Emocional</strong>.

                        </p>

                        <p>

                          Não significa necessariamente apenas "não querer ficar sozinho". Na prática, dependência emocional é uma dificuldade em lidar com aspectos da vida da outra pessoa que <strong>não envolvam você</strong>.

                        </p>

                        <p>

                          Por exemplo: <em>"Não gosto do trabalho atual do meu companheiro"</em>. Muitas vezes esse "não gostar" significa perceber que a pessoa se interessa e <strong>investe muita energia no trabalho</strong>, o que faz você se sentir ameaçado.

                        </p>

                        <p>

                          Nessas situações, quem reproduz comportamento Narcisista pode brigar, ter crises de ciumes, reclamar de coisas que envolvam o trabalho do companheiro, etc.

                        </p> 

                        <p>

                          Isso demonstra que a pessoa <strong>sente ativamente</strong> o desconforto causado pela <strong>dependência emocional</strong> e sofre, ao mesmo tempo que faz o outro sofrer.

                        </p>

                        <p>

                          O Narcisista Patológico, por outro lado, tem um mecanismo que evita desconforto de se sentir rejeitado, por isso reproduz comportamentos semelhantes, mas <strong>quem sofre é sempre o outro</strong>. 

                        </p>

                        <p>

                          Ele usa de artifícios diretos e indiretos, criando situações que façam o outro se sentir desconfortável no trabalho, desde alimentar fofocas, intrigas, disputas, até comportamentos "bem intencionados" como arrumar um trabalho novo (que a pessoa não goste tanto).

                        </p> 

                        <p> 

                          Uma das diferenças principais é que ele pode <strong>simular estar em sofrimento</strong>, mas a intenção é <strong>transferir o sentimento para o outro</strong>, fazendo o companheiro sentir-se culpado pelo sofrimento dele. 

                        </p>

                        <p>

                          A Dependência Emocional é a mesma nos dois casos, mas o objetivo se torna diferente. Enquanto um compartilha o sofrimento, o outro manipula a realidade para <strong>manter-se sendo o ponto central da vida do companheiro</strong>.

                        </p>

                        <p>

                          A reprodução de comportamentos narcisistas é muito mais comum e naturalizada do que imaginamos. Felizmente, o trabalho terapêutico nesses casos ajuda a <strong>compreender e resolver</strong> esses comportamentos.

                        </p>

                      </div>

                    </details>

                  </div>



                  {/* BOTÃO LER MAIS (APARECE APENAS SE O CONTEÚDO EXTRA ESTIVER OCULTO) */}

                  {!showMoreContent && (

                    <div className="flex justify-center pt-2 pb-0">

                      <button 

                        onClick={() => setShowMoreContent(true)}

                        className="w-full sm:w-auto bg-transparent text-foreground/60 hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3.5 px-8 rounded-md font-medium text-base text-center flex items-center justify-center group"

                      >

                        Mais informações...<span className="ml-2 text-lg leading-none transition-transform duration-300 group-hover:translate-y-1"></span>

                      </button>

                    </div>

                  )}



                </div>

              </div>

            </div>

          </div>

          

          {/* SESSÕES OCULTAS (REVELADAS AO CLICAR EM LER MAIS) VIRÃO AQUI ABAIXO... */}

          <AnimatePresence>

            {showMoreContent && (

              <motion.div

                initial={{ opacity: 0, height: 0 }}

                animate={{ opacity: 1, height: "auto" }}

                exit={{ opacity: 0, height: 0 }}

                transition={{ duration: 0.6, ease: "easeInOut" }}

                className="overflow-hidden"

              >

                {/* Sub-section 2: A exaustão da realidade distorcida */}

                <div className="section-padding !pt-8 bg-[#ECEEEF] border-y border-border/30">

                  <div className="container">

                    <div className="max-w-3xl mx-auto">

                      <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">

                        <h3 className="pt-0 text-center mb-10">A exaustão de lutar contra uma realidade distorcida</h3>

                        <p>

                          Discutir, argumentar ou tentar provar a sua dor torna-se inútil nestas dinâmicas. O indivíduo possui um mecanismo mental que trabalha 24 horas por dia para <strong>manipular a realidade</strong> e proteger o próprio Ego.

                        </p>

                        <p>

                          Qualquer sentimento desconfortável é automaticamente rejeitado por ele e <strong>transferido para você</strong>.

                        </p>

                        

                        <p>

                          Para tentar sobreviver a esse ambiente onde a realidade é constantemente manipulada, a vítima geralmente desenvolve duas respostas: 

                        </p>

                        <p> 

                          A <strong>Submissão</strong>: Seja de forma direta ou indireta, agir de acordo com a vontade da outra pessoa se torna uma saída menos dolorosa e desgastante.

                        </p> 

                        <p>

                          A <strong>Resistência</strong>: Muitas vezes a vítima luta constantemente para argumentar e demonstrar a própria vontade, buscando agir sempre da forma oposta a qual o Narcisista tenta ditar. 

                        </p>

                        <p>

                          Nos dois cenários, a sombra do outro continua a <strong>ditar as regras da sua vida</strong> (direta ou indiretamente), gerando um profundo sentimento de vazio por não saber mais quem você realmente é.

                        </p>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Sub-section 3: Patológico vs Comportamento */}

                <div className="section-padding !pt-8">

                  <div className="container">

                    <div className="max-w-4xl mx-auto">

                      <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">

                        

                        <h3 className="pt-0 text-center mb-12">A diferença entre transtorno e comportamento</h3>

                        

                        <p className="max-w-3xl mx-auto text-center mb-12">

                          A melhor forma de compreender a diferença entre quem possui o transtorno enraizado e quem apenas reproduz o comportamento narcisista é olhar para um fator crucial: <strong>a capacidade de validar o outro</strong>.

                        </p>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">

                          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">

                            <h4 className="text-xl font-display text-primary mb-4 font-semibold">O Narcisista Patológico</h4>

                            <p className="text-base md:text-lg leading-relaxed mb-0">

                              Faz os outros sofrerem com a sua condição, mas ele mesmo não sofre. Vive protegido por uma realidade fantasiosa impenetrável onde a culpa nunca é dele. <strong>Todas suas interações deixam a outra pessoa se sentindo cansada e invalidada</strong>.

                            </p>

                          </div>



                          <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">

                            <h4 className="text-xl font-display text-accent mb-4 font-semibold">A Reprodução de Traços</h4>

                            <p className="text-base md:text-lg leading-relaxed mb-0">

                              Qualquer pessoa pode reproduzir comportamentos narcisistas. A diferença é que o mecanismo de manipular a realidade não funciona sempre. Ela causa dor aos outros, <strong>mas também sofre muito</strong>. Assiste à ruína dos seus vínculos, sente a perda, mas sente-se <strong>perdida</strong> sobre como reconhecer quais erros são sua responsabilidade.

                            </p>

                          </div>

                        </div>

                        

                        <p>

                          O diagnóstico do <strong>Transtorno de Personalidade Narcisista</strong> só pode ser confirmado com a realização de uma bateria completa de <strong>Avaliações Psicológicas</strong>.

                        </p>

                        <p>

                          Independente do rótulo, a reprodução desses comportamentos em longo prazo causa grandes danos psicológicos e <strong>crises de identidade</strong>.

                        </p>

                        <p>

                          Quando falamos de relacionamentos narcisistas, a <strong>Dependência Emocional</strong> é o que mantém a pessoa presa.

                        </p>

                        <p>

                          O caminho clínico para lidar com isso segue em <strong>Três passos</strong>:

                        </p>

                        <ul className="list-disc pl-6 space-y-3">

                          <li>Compreender quais áreas da sua vida foram <strong>invadidas</strong> nessa relação;</li>

                          <li>Livrar-se de todas as invasões realizadas e lidar com o vazio causado pela <strong>Dependência Emocional</strong>;</li>

                          <li>Construir dentro de si um caminho de <strong>autoconhecimento</strong> e cuidado pessoal, para evitar a busca inconsciente por relações semelhantes.</li>

                        </ul>



                        {/* SEGUNDO CTA INTERMEDIÁRIO */}

                        <div className="text-center pt-8 pb-6">

                          <a href="#clinica" className="btn-high-ticket inline-block">

                            Quero iniciar meu processo

                          </a>

                        </div>



                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            )}

          </AnimatePresence>



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

                      src="JorgeDias.jpeg" 

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

                      <GraduationCap className="text-accent" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">Graduado em <strong>Psicologia</strong> pela Universidade Estadual de Londrina</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <Award className="text-accent" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">Especialista em Narcisismo</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50 sm:col-span-2">

                      <Clock className="text-accent" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">+3.000 horas de atendimento clínico</span>

                    </div>

                  </div>

                </div>



              </div>

            </div>

          </div>

        </section>



        {/* SECTION 5: Estrutura do Atendimento e CTA Final */}

        <section className="section-padding bg-primary text-primary-foreground" id="clinica">

          <div className="container">

            <div className="max-w-4xl mx-auto">

              

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 p-10 md:p-14 shadow-2xl rounded-2xl">

                

                {/* Coluna 1: Como funciona */}

                <div className="space-y-8">

                  <div className="space-y-6">

                    <div className="flex gap-4 items-start">

                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>

                      <div>

                        <h4 className="font-display font-semibold text-white text-lg mb-1">A Primeira Sessão</h4>

                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Um espaço livre de julgamentos morais. O objetivo é compreender a sua história de vida e suas relações, colocando <strong>você no centro do processo.</strong></p>

                      </div>

                    </div>



                    <div className="flex gap-4 items-start">

                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>

                      <div>

                        <h4 className="font-display font-semibold text-white text-lg mb-1">O Acompanhamento</h4>

                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Sessões semanais de 50 minutos, conduzidas online via Google Meet, com total sigilo. Respeitando o tempo do seu inconsciente.</p>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Coluna 2: Preço e Botão */}

                <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center h-full shadow-xl">

                  <span className="uppercase tracking-widest text-xs font-bold text-foreground/50 mb-4 block">

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
          document.getElementById('clinica')?.scrollIntoView({ behavior: 'smooth' });
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

