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
    question: 'O que é psicoterapia clínica e como funciona?',
    answer: `A psicoterapia clínica é um processo de investigação profunda sobre você mesmo, suas motivações, padrões de comportamento e as histórias que construiu sobre sua vida. Diferente de um simples aconselhamento, ela funciona através de uma relação terapêutica onde você explora, com rigor filosófico e clínico, os fundamentos do seu sofrimento e as possibilidades de transformação.

Meu trabalho integra investigação filosófica com prática clínica rigorosa. Isso significa que não apenas tratamos sintomas, mas questionamos radicalmente as crenças limitantes que sustentam seus padrões repetitivos. A terapia funciona em um ritmo que respeita sua segurança emocional, mas que também desafia você a crescer autenticamente.

Na psicoterapia clínica, você não recebe fórmulas prontas. Você recebe um espaço seguro e desafiador onde suas contradições são exploradas, seus mecanismos de defesa são compreendidos, e você desenvolve uma relação de confiança que permite transformação genuína.`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'psicoterapia-vs-autoajuda',
    category: 'Fundamentos',
    question: 'Por que a psicoterapia é diferente de ler livros de autoajuda ou fazer coaching?',
    answer: `Livros de autoajuda e coaching oferecem generalizações baseadas em histórias de outras pessoas. Eles não consideram sua história única, seus traumas específicos, ou os padrões inconscientes que você nem percebe que está repetindo. Além disso, faltam a relação terapêutica e a responsabilidade mútua que caracterizam o trabalho profundo.

Na psicoterapia clínica, você não recebe fórmulas prontas. Você recebe um espaço seguro e desafiador onde suas contradições são exploradas, seus mecanismos de defesa são compreendidos, e você desenvolve uma relação de confiança que permite transformação genuína. É um processo que exige coragem e autenticidade de ambos os lados.

A diferença crucial: autoajuda oferece técnicas; terapia oferece compreensão profunda. Autoajuda diz "faça isso"; terapia pergunta "por que você faz isso?".`,
    relatedService: { title: 'Minha Abordagem', url: '/minha-abordagem' }
  },
  {
    id: 'investigacao-filosofica',
    category: 'Minha Abordagem',
    question: 'O que significa "investigação filosófica e clínica rigorosa"?',
    answer: `Significa que não apenas diagnosticamos e tratamos sintomas (aspecto clínico), mas também questionamos radicalmente as premissas sobre as quais você construiu sua vida (aspecto filosófico). Por exemplo: Por que você acredita que precisa ser perfeito? Quem disse que você é responsável pela felicidade dos outros? Essas crenças vêm de onde?

A investigação filosófica nos permite ir além do "como" (como você se sente) para o "por quê" (por que você se sente assim) e o "para quê" (para que você continua repetindo esse padrão). Isso cria uma compreensão profunda que leva a mudanças duradouras, não apenas alívio temporário de sintomas.

Essa abordagem é particularmente poderosa para quem está em crise existencial, questionando valores, ou buscando autenticidade genuína em vez de conformidade social.`,
    relatedService: { title: 'Crise Existencial', url: '/terapia/adultos/crise-existencial' }
  },
  {
    id: 'espiritualidade-sem-bypassing',
    category: 'Minha Abordagem',
    question: 'Como você integra espiritualidade e psicologia sem "spiritual bypassing"?',
    answer: `"Spiritual bypassing" é quando alguém usa espiritualidade para evitar lidar com problemas psicológicos reais. Por exemplo: "Tudo é energia, então meu trauma não importa" ou "Devo apenas aceitar e deixar ir". Isso é uma ilusão que perpetua o sofrimento.

Minha abordagem integra espiritualidade e psicologia de forma pragmática: reconhecemos que você é um ser multidimensional (corpo, mente, espírito), mas isso não significa ignorar o trabalho psicológico necessário. Você precisa processar seu trauma, compreender seus padrões familiares, e desenvolver regulação emocional. Apenas então, a espiritualidade se torna um caminho genuíno de crescimento, não uma fuga.

O pensamento dialético é fundamental aqui: você é responsável por suas escolhas E seu trauma influenciou você profundamente. Ambas as verdades coexistem. A síntese é a liberdade autêntica.`,
    relatedService: { title: 'Integração Psicologia-Espiritualidade', url: '/terapia/adultos/integracao-espiritualidade' }
  },
  {
    id: 'crise-existencial-1',
    category: 'Questões Comuns',
    question: 'Como saber se estou em crise existencial?',
    answer: `Uma crise existencial é mais que tristeza ou depressão - é um questionamento profundo sobre o sentido da vida, seus valores e sua direção. Você pode estar em crise existencial se:

• Questiona constantemente o propósito da vida
• Sente vazio ou desconexão mesmo com conquistas
• Questiona valores que sempre considerou verdadeiros
• Sente ansiedade sobre "estar no caminho certo"
• Experimenta insatisfação generalizada sem motivo aparente
• Questiona quem você realmente é além dos papéis sociais

A diferença crucial: uma crise existencial é uma oportunidade de transformação, não uma patologia. É seu psiquismo pedindo para você questionar pressupostos não examinados e desenvolver valores autênticos.

Uma crise existencial é, na verdade, um convite para crescimento. É seu ser autêntico pedindo para ser ouvido. A psicoterapia oferece um espaço seguro para explorar essas questões profundas e emergir com maior clareza e autenticidade.`,
    relatedBlogPost: 'crise-existencial-transformacao',
    relatedService: { title: 'Crise Existencial', url: '/terapia/adultos/crise-existencial' }
  },
  {
    id: 'autossabotagem-1',
    category: 'Questões Comuns',
    question: 'O que é autossabotagem e por que faço isso?',
    answer: `Autossabotagem é quando você inconscientemente sabota seu próprio sucesso, relacionamentos ou bem-estar. Exemplos: procrastinar em projetos importantes, iniciar conflitos quando as coisas estão indo bem, sabotando relacionamentos promissores, ou sabotando sua saúde.

Você faz isso porque, em algum nível profundo, acredita que não merece sucesso, que será rejeitado se for bem-sucedido, ou que o sucesso trará consequências perigosas. Essas crenças geralmente vêm de padrões familiares, traumas, ou mensagens internalizadas na infância.

A boa notícia: uma vez que você compreende o "por quê" por trás da autossabotagem, pode escolher diferente. A terapia ajuda a identificar esses padrões inconscientes, compreender sua origem, e desenvolver novas estratégias que permitem você prosperar sem culpa ou medo.`,
    relatedBlogPost: 'autossabotagem-inconsciente',
    relatedService: { title: 'Autossabotagem', url: '/terapia/adultos/autossabotagem' }
  },
  {
    id: 'padroes-familiares',
    category: 'Questões Comuns',
    question: 'Como padrões familiares afetam minha vida adulta?',
    answer: `Sua família é seu primeiro sistema de aprendizado. Você aprendeu como se relacionar, como lidar com emoções, qual é seu valor, e quais são as "regras" da vida. Se cresceu em um ambiente onde havia negligência emocional, crítica constante, ou dinâmicas de controle, você internalizou essas mensagens como verdades sobre si mesmo.

Esses padrões se repetem em seus relacionamentos atuais, suas escolhas profissionais, e sua relação consigo mesmo. Você pode estar atraindo parceiros que replicam dinâmicas familiares prejudiciais, ou sabotando relacionamentos saudáveis porque "não parecem certos" (porque não são familiares).

A terapia permite que você compreenda essas dinâmicas, perdoe seus pais (e a si mesmo), e escolha conscientemente quais padrões manter e quais transformar. Você não está preso ao seu passado; você pode criar uma vida diferente.`,
    relatedService: { title: 'Padrões Familiares', url: '/terapia/adultos/padroes-familiares' }
  },
  {
    id: 'pais-narcisistas',
    category: 'Questões Comuns',
    question: 'Como lidar com mãe narcisista, pai narcisista ou pais narcisistas?',
    answer: `Ter um pai ou mãe narcisista significa crescer em um ambiente onde suas necessidades emocionais não eram prioritárias. O pai/mãe narcisista precisava que você validasse seu ego, que você fosse um reflexo de seu sucesso, ou que você cuidasse de suas emoções. Isso deixa sequelas: dificuldade em estabelecer limites, culpa ao colocar suas necessidades em primeiro lugar, e uma tendência a se relacionar com pessoas narcisistas.

Lidar com isso envolve: 1) Compreender que o comportamento narcisista não era sobre você, mas sobre as limitações emocionais do seu pai/mãe; 2) Estabelecer limites saudáveis (mesmo que isso signifique distância); 3) Curar a ferida de não ter recebido validação genuína; 4) Aprender a validar a si mesmo e a reconhecer seu próprio valor independentemente da aprovação deles.

Este é um trabalho profundo, mas transformador. Muitos de meus clientes que cresceram com pais narcisistas desenvolvem uma compreensão compassiva de seus pais enquanto simultaneamente se libertam das dinâmicas prejudiciais.`,
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
• É como um "saber" silencioso

**Ansiedade:**
• Vem acompanhada de tensão física
• Gera pensamentos catastróficos e "e se..."
• Cria urgência e desespero
• Pede controle e previsão do futuro
• É barulhenta e agitada

Uma ferramenta prática: use a analogia do Carro, Motorista e GPS. O Carro é seu corpo (impulsos), o Motorista é sua mente racional, e o GPS é sua intuição. A ansiedade é o Motorista em pânico tentando controlar tudo. A intuição é o GPS oferecendo orientação.

Para aprender a discernir com profundidade, confira nosso artigo completo sobre ansiedade vs intuição, onde oferecemos exercícios práticos.`,
    relatedBlogPost: 'ansiedade-vs-intuicao',
    relatedService: { title: 'Regulação Emocional', url: '/terapia/adultos/regulacao-emocional' }
  },
  {
    id: 'como-funciona-sessao',
    category: 'Prática',
    question: 'Como funciona uma sessão comigo?',
    answer: `Cada sessão é única, mas há uma estrutura geral: começamos com o que está presente para você naquele momento. Pode ser uma situação específica que aconteceu, um padrão que você notou, ou simplesmente como você está se sentindo.

De lá, exploramos juntos. Eu faço perguntas que ajudam você a ir mais fundo, a conectar pontos que talvez não tenha visto antes. Não ofereço soluções prontas; em vez disso, ajudo você a descobrir suas próprias respostas através de investigação rigorosa e compassiva.

Sessões duram 50 minutos. Você pode fazer online (via Zoom) ou presencialmente em Presidente Epitácio - SP. O ritmo é semanal, quinzenal, ou conforme sua necessidade. Confidencialidade total é garantida, com exceções legais (risco de morte, abuso de menores, etc.).`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'quanto-tempo-resultados',
    category: 'Prática',
    question: 'Quanto tempo leva para ver resultados?',
    answer: `Isso varia muito. Algumas pessoas começam a se sentir melhor após a primeira sessão, simplesmente porque finalmente estão sendo ouvidas e compreendidas. Outras levam semanas ou meses para notar mudanças significativas.

O que importa é que a terapia não é sobre alívio rápido; é sobre transformação profunda. Se você está buscando uma "solução rápida", talvez coaching ou medicação sejam mais apropriados. Mas se você quer compreender realmente por que repete certos padrões e quer criar mudanças duradouras, a terapia é o caminho.

Geralmente, você começa a notar mudanças significativas entre 3 a 6 meses de trabalho consistente. Mas cada pessoa é diferente. O importante é manter o compromisso com o processo e confiar que a mudança está acontecendo, mesmo que não seja sempre visível.`,
    relatedService: { title: 'Agendar Sessão', url: '/contato' }
  },
  {
    id: 'investimento-sessao',
    category: 'Prática',
    question: 'Qual é o investimento de uma sessão?',
    answer: `O investimento em uma sessão de 50 minutos é de **R$ 200**. Este é um investimento em sua saúde mental, em sua compreensão de si mesmo, e em sua capacidade de viver uma vida mais autêntica e satisfatória.

Considere: você investe em roupas, em viagens, em educação. Seu bem-estar emocional merece o mesmo investimento. Muitas pessoas descobrem que ao resolver padrões que as mantinham presas, economizam dinheiro (menos comportamentos autodestrutivos), ganham mais (melhor desempenho no trabalho), e têm relacionamentos mais satisfatórios.

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
    id: 'autossabotagem-1',
    category: 'Autossabotagem',
    question: 'Por que saboto meu próprio sucesso?',
    answer: `A autossabotagem não é fraqueza ou falta de vontade - é um sistema de proteção psicológica. Você sabota seu sucesso porque:

**Raízes Psicológicas:**
• Padrões familiares: você aprendeu que sucesso é perigoso ou desloyal
• Lealdades invisíveis: sacrificar seu sucesso mantém você "fiel" à família
• Trauma: sucesso anterior foi seguido de punição ou perda
• Identidade limitada: você se vê como "alguém que falha"
• Medo do julgamento: sucesso o expõe ao escrutínio social

**O Paradoxo:**
Sua autossabotagem está tentando protegê-lo. Mas de quê? Frequentemente de coisas que não são mais ameaças reais.

A solução não é "lutar contra si mesmo", mas compreender o que essa sabotagem está protegendo. Isso requer exploração profunda de padrões familiares e desenvolvimento de novos valores.

Leia nosso artigo aprofundado sobre autossabotagem para entender as raízes e o processo de libertação. Você também pode explorar nossa página de serviço sobre autossabotagem para entender como a terapia pode ajudar.`,
    relatedBlogPost: 'autossabotagem-inconsciente',
    relatedService: { title: 'Autossabotagem', url: '/terapia/adultos/autossabotagem' }
  },
  {
    id: 'quando-procurar-psicólogo',
    category: 'Quando Procurar',
    question: 'Quando devo procurar um psicólogo?',
    answer: `A resposta simples: sempre que você sinta que precisa. Mas aqui estão sinais específicos:

**Procure um psicólogo se:**
• Está vivenciando uma crise existencial e não sabe como processar
• Padrões de relacionamento se repetem dolorosamente
• Autossabotagem está bloqueando seus objetivos
• Traumas passados estão afetando sua vida presente
• Você questiona seus valores e não sabe como forjar os seus próprios
• Ansiedade ou medo estão limitando suas escolhas
• Você busca integração psicológica e espiritual genuína
• Está em transição de vida significativa

**Importante:**
Procurar ajuda profissional não é fraqueza - é auto-responsabilidade. É você assumindo agência sobre seu próprio desenvolvimento. A terapia é um espaço seguro para questionar pressupostos, explorar padrões e desenvolver autenticidade.

Oferecemos atendimento online para todo o país e presencial em Presidente Epitácio - SP. Clique abaixo para agendar uma sessão inicial.`,
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
