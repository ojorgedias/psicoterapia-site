import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedBlogPost?: string;
  relatedService?: { title: string; url: string };
}

const faqItems: FAQItem[] = [
  {
    id: 'o-que-psicoterapia',
    category: 'Fundamentos',
    question: 'O que é psicoterapia clínica?',
    answer: `Psicoterapia clínica é um processo de investigação rigorosa sobre os pressupostos que fundamentam sua vida. Não é aconselhamento, não é coaching, e não oferece fórmulas prontas.

Funciona assim: você traz o que está presente - uma situação, um padrão que se repete, uma confusão existencial. Juntos, exploramos as camadas por baixo. Não apenas "como você se sente", mas "por que você se sente assim" e "que crenças invisíveis sustentam esse sentimento".

A diferença crucial é que a terapia clínica integra investigação filosófica com rigor psicológico. Isso significa que questionamos radicalmente os pressupostos que você nem percebe que está operando. Você não recebe respostas prontas; você desenvolve a capacidade de questionar conscientemente as próprias crenças e fazer escolhas autênticas.

É um espaço seguro, mas também desafiador. Porque crescimento genuíno requer coragem.`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'psicoterapia-vs-autoajuda',
    category: 'Fundamentos',
    question: 'Por que psicoterapia é diferente de autoajuda ou coaching?',
    answer: `Autoajuda oferece técnicas genéricas baseadas em histórias de outras pessoas. Coaching oferece estratégias para objetivos específicos. Ambas têm valor em seus contextos, mas não fazem o que a terapia faz.

A terapia clínica questiona os pressupostos subjacentes. Enquanto autoajuda diz "faça isso", terapia pergunta "por que você acredita que precisa fazer isso?". Enquanto coaching diz "aqui está a estratégia para seu objetivo", terapia pergunta "qual é a origem desse objetivo? É genuinamente seu?".

Além disso, a terapia oferece uma relação - não uma transação. Há responsabilidade mútua, vulnerabilidade autêntica, e um espaço onde suas contradições não são "resolvidas", mas exploradas. Isso é particularmente importante para questões existenciais, padrões familiares profundos, e integração psicológica genuína.

A relação terapêutica em si é transformadora. Você experimenta ser completamente ouvido e questionado simultaneamente - algo raro na vida.`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'investigacao-filosofica',
    category: 'Minha Abordagem',
    question: 'O que significa "investigação filosófica e clínica rigorosa"?',
    answer: `Significa que não apenas diagnosticamos e tratamos sintomas (aspecto clínico), mas também questionamos radicalmente as premissas sobre as quais você construiu sua vida (aspecto filosófico).

Exemplos de perguntas filosóficas: Por que você acredita que precisa ser perfeito? Quem definiu o que é "sucesso" para você? De onde vem a crença de que você é responsável pela felicidade dos outros? Essas crenças são suas, ou foram herdadas?

A investigação filosófica nos permite ir além do "como" (como você se sente) para o "por quê" (por que você se sente assim) e o "para quê" (para que você continua repetindo esse padrão). Isso cria uma compreensão profunda que leva a mudanças duradouras.

Isso é particularmente poderoso para quem está em crise existencial, questionando valores, ou buscando autenticidade genuína em vez de conformidade social.`,
    relatedService: { title: 'Crise Existencial', url: '/terapia/adultos/crise-existencial' }
  },
  {
    id: 'espiritualidade-sem-bypassing',
    category: 'Minha Abordagem',
    question: 'Como você integra espiritualidade e psicologia sem "spiritual bypassing"?',
    answer: `"Spiritual bypassing" é quando alguém usa espiritualidade para evitar lidar com realidades psicológicas. "Tudo é energia, então meu trauma não importa" ou "Devo apenas aceitar e deixar ir". Isso perpetua o sofrimento, não o resolve.

Minha abordagem reconhece que você é multidimensional - corpo, mente, psique, espírito. Mas isso não significa ignorar o trabalho psicológico necessário. Você precisa processar trauma, compreender padrões familiares, desenvolver regulação emocional. Apenas então, a espiritualidade se torna um caminho genuíno de crescimento, não uma fuga.

O pensamento dialético é fundamental aqui: você é responsável por suas escolhas E seu trauma influenciou você profundamente. Ambas as verdades coexistem. A síntese é a liberdade autêntica - não negação de uma parte de si mesmo, mas integração consciente.

Isso significa que questões aparentemente "espirituais" frequentemente têm raízes psicológicas. E questões psicológicas frequentemente se beneficiam de perspectivas que transcendem o paradigma puramente materialista.`,
    relatedService: { title: 'Integração Psicologia-Espiritualidade', url: '/terapia/adultos/integracao-espiritualidade' }
  },
  {
    id: 'crise-existencial-1',
    category: 'Questões Comuns',
    question: 'Como saber se estou em crise existencial?',
    answer: `Uma crise existencial é mais que tristeza ou depressão. É um questionamento profundo sobre o sentido da vida, seus valores, e sua direção. Você pode estar em crise existencial se:

• Questiona constantemente o propósito da vida
• Sente vazio mesmo com conquistas materiais
• Questiona valores que sempre considerou verdadeiros
• Sente ansiedade sobre "estar no caminho certo"
• Experimenta insatisfação generalizada sem motivo aparente
• Questiona quem você realmente é além dos papéis sociais
• Sente desconexão com as pessoas ao seu redor

A diferença crucial: uma crise existencial não é patologia. É seu psiquismo pedindo para você questionar pressupostos não examinados. É um convite para desenvolver valores autênticos em vez de viver segundo "réguas prontas" herdadas.

Uma crise existencial é, na verdade, um sinal de desenvolvimento. É seu ser autêntico pedindo para ser ouvido. A psicoterapia oferece um espaço seguro para explorar essas questões profundas e emergir com maior clareza e autenticidade.`,
    relatedBlogPost: 'crise-existencial-transformacao',
    relatedService: { title: 'Crise Existencial', url: '/terapia/adultos/crise-existencial' }
  },
  {
    id: 'autossabotagem-1',
    category: 'Questões Comuns',
    question: 'Por que saboto meu próprio sucesso e bem-estar?',
    answer: `Autossabotagem não é fraqueza. É um sistema de proteção psicológica que está funcionando exatamente como foi programado.

Você sabota seu sucesso porque em algum nível profundo, aprendeu que sucesso é perigoso. Talvez porque:

• Padrões familiares: você aprendeu que sucesso é desloyal à família, ou que pessoas bem-sucedidas são rejeitadas
• Lealdades invisíveis: sacrificar seu sucesso mantém você "fiel" à dinâmica familiar
• Trauma: sucesso anterior foi seguido de punição ou perda
• Identidade limitada: você se vê como "alguém que falha"
• Medo do julgamento: sucesso o expõe ao escrutínio social

O paradoxo: sua autossabotagem está tentando protegê-lo. Mas de quê? Frequentemente de ameaças que não são mais reais.

A solução não é "lutar contra si mesmo", mas compreender o que essa sabotagem está protegendo e questionar se essa proteção ainda é necessária. Isso requer exploração profunda de padrões familiares e desenvolvimento consciente de novos valores.`,
    relatedBlogPost: 'autossabotagem-inconsciente',
    relatedService: { title: 'Autossabotagem', url: '/terapia/adultos/autossabotagem' }
  },
  {
    id: 'padroes-familiares',
    category: 'Questões Comuns',
    question: 'Como padrões familiares afetam minha vida adulta?',
    answer: `Sua família é seu primeiro sistema de aprendizado. Você aprendeu como se relacionar, como lidar com emoções, qual é seu valor, e quais são as "regras invisíveis" da vida.

Se cresceu em um ambiente com negligência emocional, crítica constante, ou dinâmicas de controle, você internalizou essas mensagens como verdades sobre si mesmo. Essas "réguas" - padrões de como a vida "deve" ser - se tornaram automáticas. Você as segue sem questionar.

Esses padrões se repetem em seus relacionamentos atuais, suas escolhas profissionais, e sua relação consigo mesmo. Você pode estar atraindo parceiros que replicam dinâmicas familiares prejudiciais, ou sabotando relacionamentos saudáveis porque "não parecem certos" (porque não são familiares).

A terapia permite que você compreenda essas dinâmicas conscientemente. Não para culpar seus pais, mas para reconhecer que você internalizou padrões que não são necessariamente seus. Você pode questionar essas "réguas prontas" e escolher conscientemente quais manter e quais transformar.

Você não está preso ao seu passado. Você pode criar uma vida diferente através de escolha consciente.`,
    relatedService: { title: 'Padrões Familiares', url: '/terapia/adultos/padroes-familiares' }
  },
  {
    id: 'pais-narcisistas',
    category: 'Questões Comuns',
    question: 'Como lidar com dinâmicas narcisistas na família?',
    answer: `Crescer em uma dinâmica narcisista significa crescer em um sistema onde suas necessidades emocionais não eram prioritárias. Você aprendeu que seu valor dependia de validar o ego do outro, de ser um reflexo de seu sucesso, ou de cuidar de suas emoções.

Isso deixa marcas: dificuldade em estabelecer limites, culpa ao colocar suas necessidades em primeiro lugar, e uma tendência a se relacionar com pessoas que replicam essa dinâmica.

Lidar com isso envolve:

1) Compreender que o comportamento narcisista não era sobre você, mas sobre as limitações emocionais da outra pessoa
2) Questionar conscientemente os padrões que você internalizou (como você merecia ser tratado?)
3) Estabelecer limites saudáveis (mesmo que isso signifique distância)
4) Curar a ferida de não ter recebido validação genuína
5) Aprender a validar a si mesmo e reconhecer seu próprio valor independentemente da aprovação

Este é um trabalho profundo. Requer que você questione pressupostos fundamentais sobre relacionamento, valor, e lealdade. Mas é transformador. Muitos de meus clientes que cresceram em dinâmicas narcisistas desenvolvem uma compreensão compassiva de seus pais enquanto simultaneamente se libertam das dinâmicas prejudiciais.`,
    relatedService: { title: 'Padrões Familiares', url: '/terapia/adultos/padroes-familiares' }
  },
  {
    id: 'ansiedade-intuicao-1',
    category: 'Questões Comuns',
    question: 'Qual é a diferença entre ansiedade e intuição?',
    answer: `Esta é uma das perguntas mais importantes para seu desenvolvimento pessoal. Muitas pessoas confundem medo com sabedoria interior.

**Intuição:**
• Surge como uma sensação calma e clara
• Não vem acompanhada de pensamentos catastróficos
• Oferece orientação sem urgência
• Você sente confiança mesmo sem lógica aparente
• É como um "saber" silencioso que persiste

**Ansiedade:**
• Vem acompanhada de tensão física
• Gera pensamentos "e se..." catastróficos
• Cria urgência e desespero
• Pede controle e previsão do futuro
• É barulhenta, agitada, exigente

Uma ferramenta prática: use a analogia do Carro, Motorista e GPS. O Carro é seu corpo e impulsos (instintos). O Motorista é sua mente racional (análise). O GPS é sua intuição (sabedoria interior). A ansiedade é o Motorista em pânico tentando controlar tudo. A intuição é o GPS oferecendo orientação.

O discernimento entre os dois é uma habilidade que se desenvolve com prática e autoobservação. Requer que você questione conscientemente: "De onde vem esse sentimento? É um aviso genuíno ou é medo?"`,
    relatedBlogPost: 'ansiedade-vs-intuicao',
    relatedService: { title: 'Regulação Emocional', url: '/terapia/adultos/regulacao-emocional' }
  },
  {
    id: 'regras-invisíveis',
    category: 'Questões Comuns',
    question: 'O que são "regras invisíveis" e como elas me limitam?',
    answer: `Regras invisíveis são normas, expectativas e padrões comportamentais que você segue automaticamente sem consciência explícita. Você as internalizou através do condicionamento social ao longo de sua vida.

Exemplos: "Mulheres não devem ser agressivas", "Homens não devem chorar", "Você deve ser sempre agradável", "Sucesso significa ter muito dinheiro", "Questionar autoridade é desrespeitoso".

Essas regras são raramente verbalizadas. Operam principalmente no nível inconsciente. Geram desconforto emocional e físico quando você as viola. E frequentemente carecem de justificativa racional quando examinadas.

O problema: você segue essas regras sem questionar se elas servem você. Você as segue porque "sempre foi assim" ou porque "todo mundo faz assim". Isso limita sua liberdade e sua autenticidade.

A solução: desenvolver a capacidade de questionar conscientemente essas regras. Pergunte-se: "Por que faço isso? De onde veio essa crença? Ela ainda serve a mim? Escolho mantê-la ou abandoná-la?"

Isso é o que chamamos de "arqueologia pessoal de pressupostos" - escavar as camadas de condicionamento para descobrir as crenças invisíveis que moldam seu comportamento. Quando você questiona conscientemente essas regras, recupera sua liberdade.`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'como-funciona-sessao',
    category: 'Prática',
    question: 'Como funciona uma sessão comigo?',
    answer: `Cada sessão é única, mas há uma estrutura geral: começamos com o que está presente para você naquele momento. Pode ser uma situação específica, um padrão que você notou, ou simplesmente como você está se sentindo.

De lá, exploramos juntos. Faço perguntas que ajudam você a ir mais fundo, a conectar pontos que talvez não tenha visto antes. Não ofereço soluções prontas; em vez disso, ajudo você a descobrir suas próprias respostas através de investigação rigorosa e compassiva.

O processo é dialógico. Você fala, eu escuto e questiono. Você questiona suas próprias crenças. Juntos, exploramos as camadas por baixo do que está acontecendo.

Sessões duram 50 minutos. Você pode fazer online (via Zoom) ou presencialmente em Presidente Epitácio - SP. O ritmo é semanal, quinzenal, ou conforme sua necessidade. Confidencialidade total é garantida, com exceções legais (risco de morte, abuso de menores, etc.).`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'quanto-tempo-resultados',
    category: 'Prática',
    question: 'Quanto tempo leva para ver resultados?',
    answer: `Isso depende do que você quer dizer com "resultados".

Se você quer alívio imediato de sintomas, existem outras abordagens (medicação, técnicas rápidas). Mas se você quer compreensão profunda que leva a mudanças duradouras, isso requer tempo.

Geralmente, você começa a notar mudanças significativas entre 3 a 6 meses de trabalho consistente. Mas não são mudanças "mágicas". São mudanças na forma como você pensa, nas escolhas que faz, na forma como você se relaciona com seus padrões.

O que importa é que você está desenvolvendo a capacidade de questionar conscientemente seus pressupostos. Isso é um processo. Não é linear. Haverá momentos de clareza e momentos de confusão. Ambos são parte do processo.

O importante é manter o compromisso com a investigação e confiar que a mudança está acontecendo, mesmo que não seja sempre visível. A transformação genuína é lenta e profunda, não rápida e superficial.`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'investimento-sessao',
    category: 'Prática',
    question: 'Qual é o investimento de uma sessão?',
    answer: `O investimento em uma sessão de 50 minutos é de **R$ 200**. 

Considere: você investe em educação, em viagens, em coisas materiais. Seu bem-estar emocional e sua compreensão de si mesmo merecem o mesmo investimento. Talvez mais.

Muitas pessoas descobrem que ao compreender e transformar padrões que as mantinham presas, elas economizam dinheiro (menos comportamentos autodestrutivos), ganham mais (melhor desempenho no trabalho), e têm relacionamentos mais satisfatórios. O retorno é significativo.

Se você tem dificuldades financeiras, podemos conversar sobre possibilidades. Meu compromisso é trabalhar com quem realmente quer fazer o trabalho.`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'atendimento-online-presencial',
    category: 'Prática',
    question: 'Você atende online? Em que cidades você atende presencialmente?',
    answer: `**Sim, atendo online** para qualquer pessoa no Brasil ou no exterior. Sessões online via Zoom são tão efetivas quanto presenciais, desde que você tenha um espaço privado e uma conexão de internet estável.

**Presencialmente**, atendo em **Presidente Epitácio - SP**. Se você mora em outra cidade, podemos combinar sessões presenciais ocasionais com trabalho online entre elas, ou trabalhar totalmente online.

A modalidade (online ou presencial) é menos importante que a qualidade da relação terapêutica e seu compromisso com o trabalho. Escolha a que funciona melhor para você.`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'como-agendar',
    category: 'Prática',
    question: 'Como agendar uma sessão?',
    answer: `Você pode agendar de duas formas:

**WhatsApp direto:** (41) 98515-5583 - Envie uma mensagem e conversamos sobre disponibilidade

**Calendly:** https://calendly.com/jorgediasgama - Escolha o horário que funciona para você e receba confirmação automática

Em ambos os casos, você receberá o link do Zoom ou as instruções para a sessão presencial. Fico feliz em responder qualquer pergunta antes de começarmos.`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'confidencialidade',
    category: 'Segurança',
    question: 'Tudo que eu disser é confidencial?',
    answer: `Sim, confidencialidade é um dos pilares fundamentais da relação terapêutica. Tudo que você compartilha comigo é protegido por sigilo profissional. Não compartilho informações com ninguém sem sua permissão explícita.

**Exceções legais** (conforme exigido por lei):
• Risco iminente de morte (sua ou de terceiros)
• Abuso ou negligência de menores
• Abuso de idosos ou pessoas vulneráveis
• Ordem judicial

Essas exceções existem para proteger vidas, não para violar sua privacidade. Em qualquer outra situação, você tem total privacidade comigo.

Essa confidencialidade é essencial para que você possa ser completamente autêntico e vulnerável no espaço terapêutico. Sem ela, não há transformação genuína.`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'como-confiar',
    category: 'Segurança',
    question: 'Como sei se posso confiar em você?',
    answer: `Essa é uma pergunta legítima e importante. A confiança não é automática; ela é construída ao longo do tempo através de consistência, integridade e respeito.

Aqui está o que você pode esperar de mim:
• **Competência:** Sou psicólogo registrado (CRP 08/31462) com formação contínua
• **Ética:** Sigo rigorosamente os códigos de ética da profissão
• **Confidencialidade:** Suas informações são sagradas
• **Honestidade:** Se algo não é meu escopo, vou indicar outro profissional
• **Transparência:** Você sempre sabe o que esperar
• **Respeito:** Suas crenças, valores e autonomia são respeitados

Mas a verdade é: você só saberá se pode confiar em mim experimentando. A primeira sessão é uma oportunidade para ambos avaliarmos se há um bom encaixe. Se não houver, posso indicar outro profissional. Meu objetivo é que você trabalhe com alguém em quem realmente confia.`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'quando-procurar-psicólogo',
    category: 'Quando Procurar',
    question: 'Quando devo procurar um psicólogo?',
    answer: `A resposta simples: sempre que você sinta que precisa. Mas aqui estão sinais específicos:

**Procure um psicólogo se:**
• Está vivenciando uma crise existencial e não sabe como processar
• Padrões de relacionamento se repetem dolorosamente
• Você está sabotando seus próprios objetivos e não compreende por quê
• Traumas passados estão afetando suas escolhas presentes
• Você questiona seus valores e não sabe como forjar os seus próprios
• Ansiedade ou medo estão limitando suas escolhas
• Você busca integração psicológica e espiritual genuína
• Está em transição de vida significativa
• Você quer compreender as "regras invisíveis" que governam seu comportamento

**Importante:**
Procurar ajuda profissional não é fraqueza - é auto-responsabilidade. É você assumindo agência sobre seu próprio desenvolvimento. A terapia é um espaço seguro para questionar pressupostos, explorar padrões e desenvolver autenticidade.

Oferecemos atendimento online para todo o país e presencial em Presidente Epitácio - SP.`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />

      <div className="container py-12 md:py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Respostas às perguntas mais comuns sobre psicologia, desenvolvimento pessoal e terapia. 
            Cada resposta inclui links para conteúdo aprofundado e serviços relacionados.
          </p>
        </div>

        {/* FAQ by Category */}
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground border-b-2 border-primary pb-3">
                {category}
              </h2>

              <div className="space-y-3">
                {faqItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <div
                      key={item.id}
                      className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                    >
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition-colors text-left"
                      >
                        <span className="font-semibold text-foreground pr-4">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            expandedId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedId === item.id && (
                        <div className="px-6 py-4 bg-background border-t border-border space-y-4">
                          <div className="text-foreground whitespace-pre-line leading-relaxed">
                            {item.answer}
                          </div>

                          {/* Related Links */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                            {item.relatedBlogPost && (
                              <Link href={`/blog/${item.relatedBlogPost}`}>
                                <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                                  📖 Ler artigo aprofundado →
                                </a>
                              </Link>
                            )}
                            {item.relatedService && (
                              <Link href={item.relatedService.url}>
                                <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                                  🔗 {item.relatedService.title} →
                                </a>
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
            Sua pergunta não está aqui?
          </h3>
          <p className="text-foreground mb-6">
            Se você tem uma pergunta específica que não encontrou aqui, convido você a entrar em contato 
            ou agendar uma sessão inicial. Cada pessoa é única e merece uma resposta personalizada.
          </p>
          <CTAButton whatsapp>Enviar Mensagem via WhatsApp</CTAButton>
        </div>

        {/* Navigation to Blog */}
        <div className="mt-12 p-8 bg-card rounded-lg border border-border">
          <h3 className="text-xl font-display font-bold text-foreground mb-3">
            Explore Conteúdo Aprofundado
          </h3>
          <p className="text-foreground mb-4">
            Nosso blog oferece artigos detalhados sobre psicologia, desenvolvimento pessoal, 
            padrões familiares, integração psicologia-espiritualidade e muito mais.
          </p>
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
              Ir para o Blog →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
