import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, Award, Clock, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Atualização dinâmica de Meta Tags para otimização de CPC no Google Ads
    document.title = "Jorge Dias — Psicoterapeuta Especialista em Narcisismo";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content', 
      'Atendimento clínico com Jorge Dias, psicoterapeuta especialista em narcisismo. Tratamento focado no acolhimento de traços relacionais, dependência emocional e autossabotagem.'
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
                Atendimento Clínico Especializado em Narcisismo
              </span>
              
              <h1 className="font-display text-white lg:text-foreground mb-6 lg:mb-4">
                O esgotamento causado por <br className="hidden md:block" />
                <span className="italic">Relações Narcisistas</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 lg:text-accent font-serif leading-relaxed mb-10 max-w-xl">
                O Narcisista nem sempre tem a face de um vilão agressivo. Muitas vezes, esconde-se por trás de um cuidado excessivo que sufoca e cria uma dívida emocional.
              </p>
              
              {/* Botão adaptado: Branco no mobile para destacar no fundo escuro */}
              <a 
                href="#dinamica" 
                className="btn-high-ticket !bg-white !text-black hover:!bg-gray-200 lg:!bg-primary lg:!text-primary-foreground lg:hover:!bg-accent lg:hover:!text-primary shadow-2xl lg:shadow-none"
              >
                Entenda a dinâmica
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
                alt="Jorge Dias - Psicoterapeuta"
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
          
          {/* Sub-section 1: As duas faces */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <span className="tag-value mb-4 block text-center">O Espectro do Controle</span>
                <h2 className="text-center mb-12">As duas faces do Narcisismo nas relações</h2>
                
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <p>
                    Temos a forte tendência de rotular o narcisismo apenas como uma <strong>patologia do egoísmo</strong>: o perfil clássico de alguém agressivo, controlador e manipulador.
                  </p>
                  <p>
                    No entanto, a prática clínica mostra que o comportamento narcisista é, na sua essência, um mecanismo de defesa contra o sentimento de desamparo. Ele não possui apenas a face do "vilão". Existe um segundo perfil, muito mais comum e silencioso: <strong>o narcisista altruísta</strong>.
                  </p>
                  <p>
                    Para não lidar com a própria frustração ou com o medo da rejeição, o indivíduo transforma a relação em um jogo onde, seja ganhando ou perdendo, quem cria as regras é ele. Para manter esse controle, ele opera em dois polos opostos:
                  </p>
                  
                  {/* RECURSO EXPANSÍVEL NOS DOIS POLOS */}
                  <div className="space-y-4 my-8">
                    <details className="group border border-border/40 bg-secondary/5 rounded-xl p-5 cursor-pointer transition-all">
                      <summary className="font-display font-semibold text-primary text-lg list-none flex justify-between items-center select-none">
                        <span><strong>O Extremo Egoísta:</strong> O controle acontece pela invalidação.</span>
                        <span className="text-accent text-xs font-sans border border-accent/20 rounded px-2 py-0.5 transition-transform group-open:bg-accent group-open:text-white">+</span>
                      </summary>
                      <p className="text-foreground/80 mt-3 text-base md:text-lg leading-relaxed pt-3 border-t border-border/20 cursor-default" onClick={(e) => e.stopPropagation()}>
                        A pessoa distorce fatos para ter sempre razão e ataca a sua individualidade, fazendo você duvidar da própria sanidade mental.
                      </p>
                    </details>

                    <details className="group border border-border/40 bg-secondary/5 rounded-xl p-5 cursor-pointer transition-all">
                      <summary className="font-display font-semibold text-primary text-lg list-none flex justify-between items-center select-none">
                        <span><strong>O Extremo Altruísta:</strong> O controle acontece pelo "cuidado".</span>
                        <span className="text-accent text-xs font-sans border border-accent/20 rounded px-2 py-0.5 transition-transform group-open:bg-accent group-open:text-white">+</span>
                      </summary>
                      <p className="text-foreground/80 mt-3 text-base md:text-lg leading-relaxed pt-3 border-t border-border/20 cursor-default" onClick={(e) => e.stopPropagation()}>
                        A pessoa invade o seu espaço com boas intenções, tornando-se uma figura essencial na sua vida e criando um sentimento de "vazio" que gera uma forte Dependência Emocional.
                      </p>
                    </details>
                  </div>

                  <p>
                    Em ambos os casos, o resultado final é o mesmo: <strong>a sua autonomia é progressivamente apagada</strong> para sustentar o mecanismo de defesa do outro.
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div className="text-center pt-8">
                    <a 
                      href="#clinica" 
                      className="inline-flex items-center text-primary hover:text-accent font-serif tracking-wide text-lg md:text-xl underline underline-offset-4 transition-colors group"
                    >
                      Precisa de ajuda para sair desse ciclo? Fale comigo <span className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                    </a>
                  </div>

          {/* Sub-section 2: A exaustão da realidade distorcida */}
          <div className="section-padding bg-[#ECEEEF] border-y border-border/30">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="bg-white/60 p-6 border-l-4 border-primary shadow-sm">
                      <p className="text-base md:text-lg italic mb-0">"Se você impõe um limite ou diz 'não', é interpretado como uma <strong>ofensa</strong>. O mecanismo do <strong>medo</strong> é usado para te fazer se sentir inferior."</p>
                    </div>
                    <div className="bg-white/60 p-6 border-l-4 border-accent shadow-sm">
                      <p className="text-base md:text-lg italic mb-0">"Se você recusa a ajuda ou o cuidado oferecido, é interpretado como <strong>ingratidão</strong>. O mecanismo da <strong>culpa</strong> é usado para te fazer se sentir inferior."</p>
                    </div>
                  </div>

                  <p>
                    Para tentar sobreviver a esse ambiente onde a realidade é constantemente manipulada, a vítima geralmente desenvolve duas respostas: a <strong>Submissão</strong> (anular-se totalmente para evitar conflitos) ou a <strong>Resistência</strong> (tentar ser o extremo oposto de quem a machucou).
                  </p>
                  <p>
                    Nos dois cenários, a sombra do outro continua a <strong>ditar as regras da sua vida</strong>, gerando um profundo sentimento de vazio por não saber mais quem você realmente é.
                  </p>

                  {/* PRIMEIRO CTA INTERMEDIÁRIO (Captura de impulso por link elegante) */}
                 
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Patológico vs Comportamento */}
          <div className="section-padding">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="manifesto-text space-y-6 md:space-y-8 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <span className="tag-value mb-4 block text-center">O Divisor de Águas</span>
                  <h3 className="pt-0 text-center mb-12">A fronteira entre a Defesa e o Transtorno</h3>
                  
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

                  {/* SEGUNDO CTA INTERMEDIÁRIO (Botão destacado após a quebra do Divisor) */}
                  <div className="text-center pb-6">
                    <a href="#clinica" className="btn-high-ticket inline-block">
                      Consultar Disponibilidade
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 4: Acolhimento (RESTRUTURADO COMO ACORDEÃO DE ALTA CONVERSÃO) */}
          <div className="section-padding bg-secondary/10 border-y border-border/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  
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
                      <span>"Posso estar reproduzindo comportamentos Narcisistas?"</span>
                      <span className="text-accent text-3xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>
                    </summary>
                    
                    <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed border-t border-border/20 pt-6 cursor-default" onClick={(e) => e.stopPropagation()}>
                      <p>
                        Em geral, a reprodução de Comportamentos Narcisistas está diretamente relacionada a <strong>Dependência Emocional</strong>.
                      </p>
                      <p>
                        Não significa necessariamente apenas "não querer ficar sozinho". Na prática, dependência emocional é uma dificuldade em lidar com aspectos da vida da outra pessa que <strong>não envolvam você</strong>.
                      </p>
                      <p>
                        Por exemplo: "Não gosto do trabalho atual do meu companheiro". Muitas vezes esse "não gostar" significa perceber que a pessoa se interessa e <strong>investe muita energia no trabalho</strong>, o que faz você se sentir ameaçado.
                      </p>
                      <p>
                        Nessas situações, quem reproduz comportamento Narcisista pode ter crises de ciumes, brigas, etc. Isso demonstra que a pessoa <strong>sente ativamente</strong> o desconforto causado pela <strong>dependência emocional</strong> e sofre, ao mesmo tempo que faz o outro sofrer.
                        <p>
                          O Narcisista Patológico, por outro lado, tem um mecanismo que evita desconforto de se sentir rejeitado, por isso reproduz comportamentos semelhantes, mas <strong>quem sofre é sempre o outro</strong>. 
                        </p>
                      </p> 
                      <p>
                        Ele usa de artificios diretos e indiretos, criando situações que façam o outro se sentir desconfortável no trabalho, desde alimentar fofocas, intrigas, disputas, até comportamentos "altruistas" como arrumar um trabalho novo (que a pessoa não goste tanto).
                        </p> 
                        <p> 
                          Uma das diferenças principais é que ele pode <strong>simular estar em sofrimento</strong>, mas a intenção é fazer <strong>o outro sofrer</strong>. A Dependência Emocional é a mesma nos dois casos, mas o objetivo se torna diferente. Enquanto um compartilha o sofrimento, o outro manipula a realidade para <strong>manter-se sendo o ponto central da vida do companheiro</strong>.
                        </p>
                    </div>
                  </details>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: O Profissional */}
        <section id="profissional" className="section-padding bg-white">
          <div className="container">
            <div className="max-w-1xl mx-auto">
              <span className="tag-value mb-4 block text-center">Sobre o Profissional</span>
              <h3 className="text-center mb-12">Quem conduzirá o seu processo</h3>
              
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
                      Psicoterapeuta Clínico com foco em Relacionamentos Narcisistas, dependência emocional e autossabotagem. 
                    </p>
                    <p>
                      Ajudo pessoas a descobrirem padrões Narcisistas em seus relacionamentos e recuperar a autonomia emocional.
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
                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Um espaço livre de julgamentos morais. O objetivo é compreender a sua história de vida, relações e perspectivas, colocando <strong>você no centro do processo.</strong></p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="font-display font-semibold text-white text-lg mb-1">A Dinâmica</h4>
                        <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">Sessões semanais (50 minutos), conduzidas online via Google Meet, com total sigilo. Respeitando o tempo do seu inconsciente.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna 2: Preço e Botão */}
                <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center h-full shadow-xl">
                  <span className="uppercase tracking-widest text-xs font-bold text-foreground/50 mb-4 block">
                    Atendimento Online
                  </span>
                  
                  <div className="text-5xl font-display text-primary mb-2 font-bold">
                    <span className="text-2xl align-top mr-1 font-normal text-foreground/60">R$</span>150
                  </div>
                  <span className="text-sm text-foreground/60 mb-8 block">por sessão semanal</span>
                  
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-300 py-4 px-6 rounded-md font-semibold text-sm uppercase tracking-wider mb-4"
                  >
                    Consultar Disponibilidade
                  </button>
                  <p className="text-xs text-foreground/50 italic mb-0">
                    Agendamento direto e seguro via WhatsApp.
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