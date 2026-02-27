import { useState } from 'react';
import { updatePageMeta } from '@/lib/seoMetadata';
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import { useFAQSchema } from '@/components/SEOSchema';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    category: 'Fundamentos da Abordagem',
    question: 'O que diferencia sua abordagem de outras terapias?',
    answer: 'Eu trabalho na interseção entre psicologia clínica, filosofia e antropologia. Enquanto muitas abordagens tentam "transformar" ou "corrigir" você através de técnicas de controle, minha prática se baseia na mediação e compreensão.. Não busco silenciar sua voz interior ou impor uma "régua pronta" de como você deveria ser. Em vez disso, investigamos juntos as estruturas invisíveis que governam seu comportamento, compreendemos sua origem e função, e você desenvolve discernimento para fazer escolhas genuinamente autênticas. É um processo de arqueologia pessoal, não de transformação mágica.'
  },
  {
    category: 'Fundamentos da Abordagem',
    question: 'Você trabalha com espiritualidade? Como isso se integra com psicologia?',
    answer: 'Sim, mas de forma pragmática e rigorosa. Na minha prática, não há separação real entre desenvolvimento psicológico e espiritual—eles caminham juntos. A questão é que muitas práticas espirituais fracassam porque não levam em conta as dinâmicas psicológicas não resolvidas. Por exemplo, uma pessoa pode tentar práticas meditativas, mas se há trauma ou padrões inconscientes de auto-sabotagem operando, a prática fica bloqueada. Minha abordagem usa a psicologia clínica (Jung, trauma, etc.) como ferramenta para compreender o que está impedindo o desenvolvimento espiritual genuíno. Isso não é "espiritualidade light"—é integração real.'
  },
  {
    category: 'Fundamentos da Abordagem',
    question: 'O que é "forjar a própria régua"?',
    answer: 'É o processo consciente de construir seu próprio sistema ético e moral, em vez de adotar passivamente as "réguas prontas" da família, sociedade, cultura ou figuras de autoridade. Existem três armadilhas comuns: a régua familiar (adotar acriticamente os valores dos seus pais), a régua reativa (adotar o oposto dos valores familiares, mas ainda assim definido por eles), e a régua do guru/algoritmo (adotar um sistema de valores pré-fabricado de uma figura de autoridade ou algoritmo). Forjar sua própria régua significa analisar esses padrões de forma pragmática, questionar conscientemente quais servem a você e quais não servem, e construir um sistema pessoal através dessa investigação. É um processo contínuo, não uma chegada a um conjunto fixo de regras.'
  },
  {
    category: 'Sobre Autossabotagem',
    question: 'O que é autossabotagem, realmente?',
    answer: 'Autossabotagem é um termo vago que pode significar muitas coisas—desistir antes de começar, desistir no meio do caminho, desistir quando deu certo, criar obstáculos para si mesmo. Clinicamente, é mais preciso entender isso como a manifestação da sombra (Jung) combinada com excesso de expectativas. Criamos um "roteiro" rígido do que é sucesso, do que é "dar certo". Quando a realidade se desvia desse roteiro, ou quando nosso inconsciente faz adaptações necessárias (mudanças de rota), nosso consciente interpreta isso como fracasso ou sabotagem. A questão central é uma dinâmica de onipotência x impotência: sentimos poder ilimitado da mente, mas somos limitados, não nos conhecemos completamente, não controlamos nossos próprios desejos. O problema não é silenciar essa voz interior através de técnicas de coaching, mas mediar a situação—compreender o que precisa mudar, ser assimilado, integrado, para que você possa dar o próximo passo de forma saudável.'
  },
  {
    category: 'Sobre Autossabotagem',
    question: 'Como você trabalha com autossabotagem na terapia?',
    answer: 'Eu não tento "vencer" ou "dominar" essa parte de você. Isso geralmente leva a infantilização psicológica—você continua tropeçando nos mesmos erros, mas agora com dinheiro. Em vez disso, investigamos: o que essa voz está sinalizando? Que mudança, compreensão ou assimilação está faltando? Muitas vezes, quando você se sabota, é porque algo dentro de você considera que você "não está pronto" para aquilo. Não no sentido de uma crença limitante, mas no sentido real—há integração que precisa acontecer, há compreensão que precisa ser desenvolvida. A terapia oferece o espaço para essa integração ocorrer, não para você ignorar os sinais de alerta que seu inconsciente está enviando.'
  },
  {
    category: 'Sobre Padrões Familiares',
    question: 'Como padrões familiares me afetam agora, como adulto?',
    answer: 'Na minha experiência clínica, padrões familiares não são apenas "crenças" que você absorveu—são estruturas profundas que se entrelaçam com o social, criando dinâmicas próprias. Você internalizou modelos de relacionamento, de como lidar com conflito, de como expressar (ou não) emoções, de qual é seu lugar no sistema. Esses padrões foram adaptações inteligentes para sobreviver no seu contexto familiar específico. O problema é que muitas vezes continuam operando automaticamente na vida adulta, mesmo quando não servem mais. Você pode estar repetindo dinâmicas de relacionamento, escolhendo parceiros que replicam padrões antigos, ou reproduzindo a mesma forma de comunicação que seus pais usavam. A questão não é rejeitar sua herança familiar, mas compreendê-la pragmaticamente e decidir conscientemente quais padrões manter e quais transformar.'
  },
  {
    category: 'Sobre Padrões Familiares',
    question: 'O que são "lealdades invisíveis"?',
    answer: 'São compromissos inconscientes que você faz com sua família, frequentemente sem perceber. Por exemplo, você pode inconscientemente sentir que abandonar um padrão familiar é uma traição, ou que ter sucesso significa deixar seus pais para trás, ou que ser feliz é desloyal com alguém que sofreu. Essas lealdades operam nas sombras e frequentemente bloqueiam mudanças que conscientemente você deseja fazer. Uma pessoa pode querer sair de um padrão de relacionamento disfuncional, mas inconscientemente sabota a mudança porque sente que está traindo a dinâmica familiar. Trabalhar com lealdades invisíveis significa trazer essas promessas inconscientes à luz, compreender sua origem e função, e renegociar conscientemente sua relação com elas.'
  },
  {
    category: 'Sobre Crise Existencial',
    question: 'O que é uma crise existencial?',
    answer: 'Uma crise existencial é o momento em que a luz da consciência está alcançando tantos lugares novos que você não consegue mais manter a estrutura anterior intacta. É quando a "régua pronta" que você estava seguindo se torna insuportável—quando as respostas que funcionavam antes não funcionam mais, quando você começa a questionar pressupostos que antes aceitava sem pensar. Isso não é um fracasso ou uma doença mental. É um sinal de que você está evoluindo, que está pronto para uma mudança radical na estrutura. A crise existencial é frequentemente o ponto de partida para o desenvolvimento genuíno, porque força você a questionar e a reconstruir de forma mais autêntica.'
  },
  {
    category: 'Sobre Crise Existencial',
    question: 'Como você trabalha com crise existencial?',
    answer: 'Eu ofereço um espaço seguro para você navegar essa transição sem tentar "voltar ao normal" ou encontrar uma solução rápida. Não tentamos restaurar a estrutura antiga—ela se tornou insuportável por uma razão. Em vez disso, ajudamos você a compreender o que está morrendo e o que está nascendo. Investigamos quais pressupostos já não servem, quais valores genuinamente importam para você, e como construir uma nova estrutura que seja mais alinhada com quem você realmente é. Esse é um processo de síntese dialética—você não rejeita tudo do passado, mas integra o que aprendeu de forma mais consciente e autêntica.'
  },
  {
    category: 'Sobre Regras Invisíveis',
    question: 'O que são "regras invisíveis" e como elas me governam?',
    answer: 'Regras invisíveis são normas, expectativas e padrões comportamentais que você segue automaticamente, sem consciência explícita. Elas são raramente verbalizadas, operam principalmente no nível inconsciente, e geram desconforto emocional e físico quando violadas. Você aprendeu essas regras através de modelagem familiar, reforço social, narrativas culturais, instituições e algoritmos. O problema é que muitas dessas regras carecem de justificativa racional quando examinadas. Você pode estar vivendo de acordo com uma regra que absorveu aos 7 anos, que nunca fez sentido, e que continua governando seu comportamento porque nunca foi questionada conscientemente. Essas regras criam automatismos comportamentais, pontos cegos cognitivos, e limitação da expressão autêntica.'
  },
  {
    category: 'Sobre Regras Invisíveis',
    question: 'Como identifico as minhas regras invisíveis?',
    answer: 'Comece observando onde há desconforto inexplicável, reações automáticas, ou comportamentos que parecem desalinhados com seus valores conscientes. Por exemplo, você pode sentir ansiedade ao tentar falar em público, mesmo sabendo racionalmente que não há perigo real. Ou pode evitar sucesso profissional sem entender por quê. Essas são "escavações"—sinais de que há uma regra invisível operando. A técnica da arqueologia pessoal de pressupostos oferece um método estruturado: identifique o sítio (onde há desconforto), escave sistematicamente (questione os "porquês"), analise o que encontrou (qual é a regra? De onde veio? Qual era sua função original?), e então decida conscientemente se quer manter essa regra ou abandoná-la.'
  },
  {
    category: 'Sobre Intuição e Ansiedade',
    question: 'Qual é a diferença entre intuição e ansiedade?',
    answer: 'Intuição é uma ideia que vem "crua", direta e simples. Dificilmente é mais que duas ou três palavras ou uma frase. É um sinal do inconsciente, uma conexão com algo que você sente mas não consegue articular racionalmente. O problema é que pegamos essa intuição simples e "fantasiamos" em cima dela. Criamos monstros, cenários absurdos, narrativas elaboradas que não são reais. Isso gera ansiedade e nos tira o sono. Por exemplo, você pode ter uma intuição simples: "fulano + violência". Seu consciente pega essa informação crua e passa a noite criando cenas de agressão, assalto, caos—nenhuma das quais pode estar acontecendo. A ansiedade não é a intuição em si; é o que sua mente faz com ela. Aprender a distinguir entre o sinal simples e a elaboração mental é fundamental.'
  },
  {
    category: 'Sobre Intuição e Ansiedade',
    question: 'Como diferencio intuição genuína de medo ou desejo disfarçado?',
    answer: 'Essa é uma questão complexa que requer discernimento desenvolvido. Intuição genuína tende a ser simples, não-emocional, e frequentemente contraintuitiva (vai contra o que você quer ou teme). Medo disfarçado de intuição tende a ser elaborado, carregado emocionalmente, e alinhado com suas preocupações conscientes. Desejo disfarçado de intuição é similar—é o que você quer que seja verdade. O trabalho terapêutico ajuda você a desenvolver essa capacidade de discernimento através da auto-observação cuidadosa, da compreensão de seus padrões de medo e desejo, e da prática de distinguir entre o sinal simples e a elaboração mental. Isso não é algo que você "aprende" em uma semana—é um desenvolvimento contínuo de sabedoria.'
  },
  {
    category: 'Sobre Autonomia e Identidade',
    question: 'Como desenvolvo uma identidade autêntica?',
    answer: 'Identidade autêntica não é algo que você "descobre" como se estivesse esperando por você. É algo que você constrói através de um processo consciente de investigação, experimentação e integração. Começa com a arqueologia pessoal—questionar quem você é quando ninguém está observando, quais são seus valores genuínos (não herdados ou impostos), quais são seus desejos autênticos. Depois vem a experimentação comportamental—testar como diferentes valores se manifestam em ações concretas, observar as consequências, integrar o que aprendeu. Finalmente, há a renegociação relacional—estabelecer novos limites e dinâmicas nos seus relacionamentos que reflitam quem você realmente é, não quem você foi condicionado a ser. É um processo contínuo, não uma chegada a uma identidade fixa.'
  },
  {
    category: 'Sobre Autonomia e Identidade',
    question: 'Por que é tão difícil ser autêntico?',
    answer: 'Porque autenticidade genuína requer trabalho e desenvolvimento—não é simplesmente "ser como você é" em um estado bruto. A verdadeira autenticidade emerge de um processo consciente de integração e refinamento. Além disso, há pressão social real. Sua psique evoluiu em um contexto tribal onde a rejeição social significava morte literal. Você ainda carrega esse medo ancestral—a pressão social internalizada. Questionar normas do grupo, expressar valores que divergem da maioria, ser vulnerável sobre suas incertezas—tudo isso ativa medo profundo de rejeição. A autenticidade requer que você desenvolva a capacidade de sustentar desconforto social temporário. Isso não significa ser insensível ou desrespeitoso com os outros; significa ter a coragem de ser genuíno mesmo quando há risco social.'
  },
  {
    category: 'Prática Terapêutica',
    question: 'Como funciona uma sessão de terapia com você?',
    answer: 'Cada sessão é um espaço de investigação colaborativa. Eu não estou aqui para "consertar" você ou impor interpretações. Em vez disso, fazemos perguntas que ajudam você a escavar suas próprias estruturas invisíveis. Usamos técnicas como a arqueologia pessoal de pressupostos, análise de padrões, exploração de dinâmicas inconscientes, e integração de aspectos contraditórios de si mesmo. O trabalho é tanto clínico quanto filosófico—usamos rigor psicológico combinado com questionamento profundo sobre pressupostos e valores. A sessão é um espaço onde você pode ser vulnerável, explorar dúvidas, questionar crenças, e desenvolver compreensão mais profunda de si mesmo. Não há "técnicas rápidas" ou soluções mágicas—há investigação genuína.'
  },
  {
    category: 'Prática Terapêutica',
    question: 'Quanto tempo leva para "resolver" meus problemas?',
    answer: 'Essa pergunta já contém um pressuposto que precisa ser questionado. Não estamos tentando "resolver" seus problemas como se fossem quebra-cabeças com soluções prontas. Estamos desenvolvendo compreensão, mediando conflitos internos, integrando aspectos de si mesmo que estão em desacordo. Isso não é um processo linear. Você pode ter insights profundos em uma sessão e depois passar semanas integrando aquele insight. Você pode trabalhar em um padrão por meses e depois descobrir que ele está conectado a algo mais profundo que precisa ser explorado. O tempo depende da complexidade da situação, de quanto você está disposto a investigar, e da profundidade que você busca. Não há cronograma fixo—há um processo genuíno de desenvolvimento.'
  },
  {
    category: 'Questões Práticas',
    question: 'Você oferece atendimento online?',
    answer: 'Sim, ofereço atendimento psicológico online para adultos em qualquer lugar do mundo. Também ofereço sessões presenciais em Presidente Epitácio - SP. O formato online funciona bem para a maioria das pessoas, e a qualidade do trabalho não é comprometida. O que importa é a qualidade da presença e da investigação, não a proximidade física.'
  },
  {
    category: 'Questões Práticas',
    question: 'Como agendar uma sessão?',
    answer: 'Você pode entrar em contato através do WhatsApp (botão flutuante no site) ou preencher o formulário de contato. Respondo mensagens dentro de 24 horas. Na primeira conversa, discutimos sua situação, o que você está buscando, e se acredito que posso ajudá-lo. Depois agendamos a primeira sessão. As sessões têm duração de 50 minutos e ocorrem uma vez por semana, embora isso possa ser ajustado conforme necessário.'
  }
];

export default function FAQ() {
  useEffect(() => {
    updatePageMeta('faq');
  }, []);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Add FAQ schema for SEO
  const faqSchema = faqItems.map(item => ({
    question: item.question,
    answer: item.answer,
  }));
  useFAQSchema(faqSchema);
  
  // Update page meta tags
  useEffect(() => {
    document.title = 'FAQ - Psicólogo Jorge Dias | Perguntas Frequentes';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Perguntas frequentes sobre psicoterapia clínica, autossabotagem, padrões familiares, crise existencial e desenvolvimento pessoal.');
    }
  }, []);

  const groupedByCategory = faqItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <Layout>
      <div className="bg-background">
        <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'FAQ' }]} />

      <div className="container max-w-3xl py-12 md:py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground">
            Respostas sobre minha abordagem, prática terapêutica e conceitos fundamentais.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground border-b border-border pb-3">
                {category}
              </h2>

              <div className="space-y-3">
                {items.map((item, index) => {
                  const globalIndex = faqItems.indexOf(item);
                  const isExpanded = expandedIndex === globalIndex;

                  return (
                    <div
                      key={globalIndex}
                      className="border border-border rounded-lg overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : globalIndex)
                        }
                        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
                      >
                        <h3 className="font-semibold text-foreground pr-4">
                          {item.question}
                        </h3>
                        <ChevronDown
                          size={20}
                          className={`text-primary flex-shrink-0 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-6 py-4 bg-background border-t border-border">
                          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Não encontrou sua pergunta?
          </h3>
          <p className="text-foreground mb-4">
            Envie sua pergunta através do WhatsApp. Posso responder de forma mais personalizada ou usar sua pergunta para criar conteúdo que ajude outras pessoas.
          </p>
          <a
            href="https://wa.me/5518988887777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Enviar Pergunta via WhatsApp
          </a>
        </div>
      </div>
      </div>
    </Layout>
  );
}
