import { useEffect, useState } from "react";

import { Link, useLocation } from "wouter";

import { Menu, X, MessageCircle, Award, Clock, GraduationCap } from "lucide-react";

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



                  {/* PROCESSO TERAPÊUTICO — RESUMO VISUAL */}
                  <div className="mt-12 bg-white border border-border/50 shadow-sm p-6 md:p-8 rounded-2xl">
                    <h3 className="text-xl md:text-2xl font-display text-primary mb-8 font-semibold text-center border-b border-border/40 pb-4">
                      Como funciona
                    </h3>

                    <ul className="space-y-6 md:space-y-5 text-base md:text-lg">
                      <li className="flex items-center gap-4">
                        <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">1</span>
                        <span className="text-foreground/90"><strong className="text-primary">Entender a dinâmica</strong> de vocês</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">2</span>
                        <span className="text-foreground/90"><strong className="text-primary">Desarmar o ciclo</strong> das brigas</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm shrink-0">3</span>
                        <span className="text-foreground/90"><strong className="text-accent">Reconstruir a conexão</strong> entre vocês</span>
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

                        <span>"Posso fazer a terapia sozinho(a)?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>                    

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Pode, mas com um ajuste importante: Se apenas um dos dois participa, o trabalho deixa de ser terapia de casal e se torna uma <strong>terapia individual com foco em relacionamento</strong>.
                        </p>

                        <p>

                           Esse espaço permite compreender sua perspectiva da relação. A dinâmica de um casal não é responsabilidade de uma pessoa só, mas cada um pode começar observando próprio papel. 
                        </p>

                        <p>

                          Se em algum momento o outro decidir participar, a transição para o formato de casal acontece com naturalidade.
                        </p>

                        <p>

                          A disposição de um dos dois é importante para começar, mas os melhores resultados tendem a acontecer com a participação das duas partes.

                        </p>

                      </div>

                    </details>                    

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Terapia de casal online funciona?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>                    

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Sim. As sessões acontecem por videochamada, com os dois participando ao mesmo tempo. A dinâmica de fala, escuta e mediação é a mesma do encontro presencial.

                        </p>

                        <p>

                          Para casais, o formato online tem uma vantagem específica: Funciona mesmo quando os dois estão em cidades diferentes ou com rotinas conflitantes. 
                        </p>

                        <p>

                          Muitos casais relatam mais conforto em participar de casa. Sem deslocamento, sem sala de espera, num ambiente onde os dois já estão lado a lado.
                        </p>

                        <p>

                          O que define o resultado não é o canal, é a estrutura do processo.
                        </p>
                      </div>
                      </details>


                    <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Já tentamos conversar tantas vezes. Por que agora seria diferente?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>                    

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Porque o problema quase nunca é a <strong>falta</strong> de conversa — é o <strong>formato</strong> dela. 
                        </p>

                        <p>
                           Em um casal com problemas de comunicação, as conversas tendem a ser repetitivas e circulares. Conversar mais vezes, no mesmo roteiro, só <strong>aprofunda o desgaste</strong>.
                        </p>

                        <p>

                          Na terapia, existe uma diferença estrutural: Alguém treinado para enxergar essas repetições e <strong>intervir</strong> no momento em que acontecem.
                        </p>

                        <p>

                          Através da intervenção, o terapeuta trabalha, junto ao casal, novas formas de comunicação e de resolução de conflitos que o casal não conseguiu construir sozinho.
                        </p>

                      </div>

                    </details>

                    

                    <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"A terapia é para salvar o relacionamento?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>

                      

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          Essa resposta cabe ao próprio casal e costuma ficar mais clara durante o próprio processo.
                        </p>

                        <p>

                          A terapia não existe para 'salvar' nem para 'encerrar' a relação. Ela existe para clarear a comunicação e a compreensão entre os dois.
                        </p>

                        <p>

                          O que a experiência clínica mostra é que qualquer decisão, seja ficar, reestruturar ou se separar, tende a ser mais fundamentada e completa quando o casal enxerga com clareza a dinâmica do relacionamento.
                        </p>

                        <p>

                          O papel do processo terapêutico é garantir que a escolha seja consciente e fundamentada e não fruto de cansaço, desgaste ou reações emocionais intensas."
                        </p> 



                      </div>

                    </details>

                      <details className="group border border-border/40 bg-white p-6 md:p-8 rounded-2xl cursor-pointer shadow-sm transition-all select-none">

                      <summary className="font-display text-xl md:text-2xl font-semibold text-primary list-none flex justify-between items-center">

                        <span>"Quais tipos de relacionamentos você atende?"</span>

                        <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>

                      </summary>

                      

                      <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>

                        <p>

                          O trabalho é com a dinâmica da relação, não com o formato dela. O que gera sofrimento num casal atravessa qualquer configuração de vínculo.

                        </p>

                        <p>

                          Atendo casais homoafetivos e heteroafetivos, pessoas trans, não binárias, bem como relações fora do modelo monogâmico: Poliamor, relações abertas e outras configurações consensuais.
                        </p>

                        <p>

                          Muitas vezes a dinâmica de relacionamentos LGBTQIAPN+ é atravessada por questões sociais e familiares específicas que necessitam ser consideradas e validadas dentro do ambiente terapêutico.
                        </p>

                        <p>

                         Durante as sessões, forneço escuta, acolhimento e reconhecimento dessas questões, considerando e respeitando a vivência subjetiva de cada um. <strong>Aqui, o amor é livre!</strong>
                        </p> 

                        <p>
                          O critério geral para meus atendimentos é a disposição do casal em compreender a própria dinâmica. <strong>Não existe formato de relação 'certo' para estar aqui.</strong>
                        </p>

                      </div>

                    </details>

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

                      Psicoterapeuta clínico focado em atendimento de casais com dificuldades de comunicação. 

                    </p>

                    <p>

                      No trabalho com casais, parto de uma premissa simples: Cada pessoa é um universo próprio, com história e percepção únicas. A terapia não busca fundir esses universos, muito menos escolher um lado. Busca uma aproximação em que nenhum dos dois precise se anular para a relação funcionar.
                    </p>

                  </div>



                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <GraduationCap className="text-accent" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">Graduado em <strong>Psicologia</strong> pela Universidade Estadual de Londrina</span>

                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50">

                      <Award className="text-accent" size={24} />

                      <span className="text-sm font-semibold text-foreground/90">Foco clínico em relacionamentos.</span>

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

                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">A primeira sessão é dividida em <strong>três momentos</strong>: 20 minutos com um dos parceiros, 20 minutos com o outro e 10 minutos com os dois juntos.</p>
                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Esse formato permite compreender a demanda de cada um antes da dinâmica do casal. Cada pessoa fala livremente, sem os viéses que a presença do outro (ou a minha) pode introduzir.</p>
                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">É um espaço livre de julgamento moral e juizo de valor, onde cada história importa por si mesma, antes de virar 'a versão de um dos lados'</p>

                      </div>

                    </div>



                    <div className="flex gap-4 items-start">

                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>

                      <div>

                        <h4 className="font-display font-semibold text-white text-lg mb-1">O Acompanhamento</h4>

                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">As sessões seguintes acontecem semanalmente, com <strong>os dois juntos</strong>, por videochamada via Google Meet.</p>
                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">A duração do processo varia conforme a demanda do casal. Questões pontuais costumam durar de 3 a 6 meses; demandas mais complexas, de 6 meses a um ano. <strong>O ritmo é definido pelo casal</strong>.</p>
                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Tudo o que é dito nas sessões é protegido pelo <strong>sigilo profissional</strong>.</p>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Coluna 2: Preço e Botão */}

                <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center h-full shadow-xl">

                  <span className="uppercase tracking-widest text-xs font-bold text-foreground/50 mb-4 block">

                    Atendimento 100% online

                  </span>

                  

                  <span className="text-sm text-foreground/80 mb-10 block">Valor da sessão: <strong>R$180</strong></span>

                  

                  <button
                   onClick={handleContactClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-6 rounded-md font-semibold text-sm uppercase tracking-wider mb-4"
                    >
                     <span className="block">Consultar Disponibilidade</span>
                      <span className="block text-[10px] font-normal normal-case tracking-normal opacity-70 mt-1">
                       Via WhatsApp
                      </span>
                   </button>

                  <p className="text-xs text-foreground/50 italic mb-0">

                    Atendimento inclusivo LGBTQIAPN+ e Relações Não Monogâmicas.

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

            &copy; {new Date().getFullYear()} Jorge Dias — Terapia de casal e relacionamentos.

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

