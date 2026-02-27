import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import { updatePageMeta } from '@/lib/seoMetadata';

interface Concept {
  id: string;
  title: string;
  shortDescription: string;
  fullContent: React.ReactNode;
}

const concepts: Concept[] = [
  {
    id: 'dialectica-hegeliana',
    title: 'Dialética Hegeliana: Tese, Antítese e Síntese',
    shortDescription: 'Como a evolução pessoal funciona através da integração de opostos',
    fullContent: (
      <div className="space-y-4">
        <p>
          A dialética hegeliana é um modelo de como as coisas evoluem e se transformam. Não é um processo linear onde você vai do ponto A ao ponto B. É um processo de integração onde opostos coexistem e criam algo novo.
        </p>

        <h4 className="font-semibold text-foreground mt-4">Os Três Momentos</h4>

        <div className="bg-card p-4 rounded-lg border border-border space-y-4">
          <div>
            <h5 className="font-semibold text-primary mb-2">1. Tese (A estrutura inicial)</h5>
            <p className="text-sm">
              É o estado que você herda. As "réguas prontas" que recebeu da família, da sociedade, da cultura. Por exemplo: "Para ser bem-sucedido, preciso trabalhar 60 horas por semana, ignorar minha saúde e sacrificar relacionamentos." Essa é a estrutura que você absorveu e que governa seu comportamento.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-primary mb-2">2. Antítese (O questionamento)</h5>
            <p className="text-sm">
              É quando a Tese se torna insuportável. Você começa a questionar: "Por que estou fazendo isso? Isso realmente funciona? Há outra forma?" Essa é a crise existencial. Você rejeita a estrutura antiga, mas ainda não tem uma nova. É o vazio, a confusão, a desorientação. Muitas pessoas tentam voltar à Tese porque a Antítese é desconfortável. Mas é nesse desconforto que o crescimento acontece.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-primary mb-2">3. Síntese (A integração)</h5>
            <p className="text-sm">
              É quando você forja sua própria régua. Você não rejeita tudo da Tese (porque havia sabedoria lá), mas também não a aceita cegamente. Você integra o que aprendeu e cria algo novo que é genuinamente seu. Por exemplo: "Vou trabalhar com dedicação, mas vou priorizar minha saúde e relacionamentos. Vou definir meus próprios critérios de sucesso."
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-foreground mt-6">Por Que Isso Importa</h4>

        <p>
          Muitas pessoas ficam presas na Antítese. Elas questionam a estrutura antiga, mas não conseguem construir uma nova. Ficam em um vazio indefinido, esperando que alguém lhes diga qual é a "régua certa". A psicoterapia oferece o espaço para você navegar esse processo dialético e chegar à Síntese—uma estrutura que é genuinamente sua, não herdada, não reativa, mas forjada conscientemente.
        </p>

        <p className="text-sm italic text-muted-foreground mt-4">
          Nota: A dialética não é um processo que termina. Você pode chegar a uma Síntese e depois questionar aquela síntese, entrando em uma nova dialética. É um processo contínuo de evolução.
        </p>
      </div>
    )
  },
  {
    id: 'subjetivacao-mediacao',
    title: 'Subjetivação pela Mediação vs. Governabilidade',
    shortDescription: 'Dois modelos opostos de como você é formado como sujeito',
    fullContent: (
      <div className="space-y-4">
        <p>
          Este é um conceito filosófico profundo que vem de Foucault e Lacan. Explica como você se torna quem é—não apenas como indivíduo, mas como sujeito inserido em um sistema social e psíquico.
        </p>

        <h4 className="font-semibold text-foreground mt-4">Subjetivação pela Governabilidade (O Modelo Ocidental)</h4>

        <p>
          No modelo ocidental (que é o que você provavelmente experimenta), você é formado através da governabilidade. Isso significa:
        </p>

        <ul className="space-y-2 ml-4">
          <li className="text-sm">
            <strong>Hierarquia Sujeito-Objeto:</strong> Você é o sujeito, o mundo é o objeto que você deve dominar e controlar
          </li>
          <li className="text-sm">
            <strong>Poder sobre:</strong> O objetivo é ter poder sobre as coisas, sobre as pessoas, sobre si mesmo
          </li>
          <li className="text-sm">
            <strong>Palavra como ferramenta:</strong> A linguagem é usada para controlar, para impor, para governar
          </li>
          <li className="text-sm">
            <strong>Colonialidade do Poder:</strong> Há sempre uma hierarquia—alguém governa, alguém é governado
          </li>
        </ul>

        <p className="text-sm italic text-muted-foreground mt-4">
          Exemplo: Você quer "superar" sua ansiedade. Você quer "dominar" seus medos. Você quer "controlar" seus pensamentos. Tudo é linguagem de poder e domínio.
        </p>

        <h4 className="font-semibold text-foreground mt-6">Subjetivação pela Mediação (Uma Alternativa)</h4>

        <p>
          A subjetivação pela mediação é um modelo diferente. Aqui, você não tenta dominar ou controlar. Em vez disso, você media—você conecta, você traduz, você compreende.
        </p>

        <ul className="space-y-2 ml-4">
          <li className="text-sm">
            <strong>Relação Sujeito-Sujeito:</strong> Você e o mundo (e suas próprias partes internas) são ambos sujeitos, não objetos
          </li>
          <li className="text-sm">
            <strong>Poder com:</strong> O objetivo é ter poder com as coisas, não poder sobre
          </li>
          <li className="text-sm">
            <strong>Palavra como transparência:</strong> A linguagem é usada para conectar, para compreender, para traduzir
          </li>
          <li className="text-sm">
            <strong>Horizontalidade:</strong> Não há hierarquia; há diálogo entre diferentes perspectivas
          </li>
        </ul>

        <p className="text-sm italic text-muted-foreground mt-4">
          Exemplo: Você não tenta "superar" sua ansiedade. Em vez disso, você pergunta: "O que essa ansiedade está tentando me dizer? Que mudança precisa acontecer? Como posso integrar essa parte de mim?"
        </p>

        <h4 className="font-semibold text-foreground mt-6">Por Que Isso Importa na Terapia</h4>

        <p>
          Muita psicologia ocidental trabalha com o modelo de governabilidade—você precisa "vencer" seus problemas, "superar" seus traumas, "dominar" suas emoções. Minha abordagem trabalha com mediação. Não tentamos dominar ou eliminar nada. Tentamos compreender, integrar e mediar. Isso cria uma relação diferente com você mesmo—menos de guerra, mais de diálogo.
        </p>
      </div>
    )
  },
  {
    id: 'arqueologia-pessoal',
    title: 'Arqueologia Pessoal de Pressupostos',
    shortDescription: 'O método para desenterrar as crenças invisíveis que governam sua vida',
    fullContent: (
      <div className="space-y-4">
        <p>
          Arqueologia Pessoal de Pressupostos é um método sistemático para investigar as estruturas invisíveis que governam seu comportamento. Não é uma técnica rápida. É uma investigação rigorosa, como um arqueólogo escavando camadas de história.
        </p>

        <h4 className="font-semibold text-foreground mt-4">O Método em Quatro Passos</h4>

        <div className="space-y-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <h5 className="font-semibold text-primary mb-2">Passo 1: Identificar o Sítio (O Desconforto)</h5>
            <p className="text-sm mb-2">
              Comece observando onde há desconforto inexplicável, reações automáticas, ou comportamentos que parecem desalinhados com seus valores conscientes.
            </p>
            <p className="text-sm italic text-muted-foreground">
              Exemplo: Você sente ansiedade toda vez que alguém elogia seu trabalho. Ou você sabota relacionamentos quando começam a ficar sérios. Ou você evita falar em público mesmo sabendo racionalmente que não há perigo real.
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <h5 className="font-semibold text-primary mb-2">Passo 2: Escavar Sistematicamente (Questionar os "Porquês")</h5>
            <p className="text-sm mb-2">
              Não é uma escavação aleatória. É sistemática. Você questiona: Por que isso me causa desconforto? De onde veio essa reação? Quando comecei a sentir isso? Quem me ensinou isso?
            </p>
            <p className="text-sm italic text-muted-foreground">
              Exemplo: Você sente ansiedade com elogios. Por quê? Talvez porque sua mãe dizia "não fique vaidosa" toda vez que você era elogiada. Ou talvez porque você aprendeu que ser notado é perigoso. Ou talvez porque você sente que não merece o elogio.
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <h5 className="font-semibold text-primary mb-2">Passo 3: Analisar o Que Encontrou (Compreender a Lógica)</h5>
            <p className="text-sm mb-2">
              Agora você tem informações. Qual é a regra invisível que está operando? De onde veio? Qual era sua função original? Por que seu inconsciente ainda a mantém?
            </p>
            <p className="text-sm italic text-muted-foreground">
              Exemplo: A regra é "ser notado é perigoso". Sua função original era protegê-lo—se você não fosse notado, não seria criticado ou rejeitado. Seu inconsciente ainda a mantém porque funciona.
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <h5 className="font-semibold text-primary mb-2">Passo 4: Decidir Conscientemente (Forjar Sua Própria Régua)</h5>
            <p className="text-sm mb-2">
              Agora que você compreende a regra, pode questionar: Ainda preciso dessa proteção? Serve a mim agora? Escolho manter essa regra ou abandoná-la? E se a abandonar, qual é a nova regra que quero forjar?
            </p>
            <p className="text-sm italic text-muted-foreground">
              Exemplo: Você pode decidir que ser notado não é mais perigoso. Que você pode receber elogios sem perder a humildade. Que você merece reconhecimento. E você forja uma nova regra baseada nessa compreensão.
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-foreground mt-6">Por Que Isso Funciona</h4>

        <p>
          Enquanto um padrão permanece não examinado, ele funciona como um destino inescapável. Você está preso a ele. Mas quando você o traz à luz da consciência, quando você compreende sua lógica interna, ele perde o poder de coerção. Você ganha a liberdade de escolher conscientemente.
        </p>

        <p className="text-sm italic text-muted-foreground mt-4">
          Nota: Isso não é uma técnica rápida. É um processo de desenvolvimento. Você pode estar escavando a mesma regra por meses. Mas quando você finalmente compreende, a mudança é profunda e duradoura.
        </p>
      </div>
    )
  },
  {
    id: 'sombra-jung',
    title: 'A Sombra (Jung): O Que Você Rejeita em Si Mesmo',
    shortDescription: 'Compreendendo as partes de você que você não quer ver',
    fullContent: (
      <div className="space-y-4">
        <p>
          A sombra é um conceito de Carl Jung. É tudo em você que você rejeita, que você não quer ser, que você tenta esconder. Não é apenas o "mal"—é qualquer coisa que não se alinha com a imagem que você quer ter de si mesmo.
        </p>

        <h4 className="font-semibold text-foreground mt-4">Exemplos de Sombra</h4>

        <ul className="space-y-2 ml-4">
          <li className="text-sm">
            <strong>Agressividade:</strong> Se você foi criado para ser "gentil" e "educado", sua agressividade é sombra. Você a rejeita, mas ela não desaparece—ela opera nas sombras
          </li>
          <li className="text-sm">
            <strong>Egoísmo:</strong> Se você foi criado para ser "altruísta", seus desejos pessoais são sombra
          </li>
          <li className="text-sm">
            <strong>Sexualidade:</strong> Se você foi criado em um ambiente repressivo, sua sexualidade é sombra
          </li>
          <li className="text-sm">
            <strong>Ambição:</strong> Se você foi criado para ser "humilde", sua ambição é sombra
          </li>
        </ul>

        <h4 className="font-semibold text-foreground mt-6">O Problema da Rejeição</h4>

        <p>
          Quando você rejeita uma parte de si mesmo, ela não desaparece. Ela continua operando, mas fora de sua consciência. Por isso você pode:
        </p>

        <ul className="space-y-2 ml-4">
          <li className="text-sm">
            <strong>Projetar:</strong> Ver em outras pessoas a qualidade que você rejeita em si mesmo. Você odeia pessoas agressivas porque sua própria agressividade é sombra
          </li>
          <li className="text-sm">
            <strong>Sabotagem:</strong> Inconscientemente sabotar seu sucesso porque sucesso exigiria que você acessasse sua ambição (que é sombra)
          </li>
          <li className="text-sm">
            <strong>Compulsão:</strong> Compulsivamente fazer a coisa que você rejeita (porque ela está tentando ser reconhecida)
          </li>
        </ul>

        <h4 className="font-semibold text-foreground mt-6">A Integração da Sombra</h4>

        <p>
          Não se trata de "vencer" sua sombra ou "superar" suas partes rejeitadas. Trata-se de integração. Você reconhece que essas partes existem, que têm uma função, que têm valor. Você as traz à luz e aprende a trabalhar com elas de forma madura.
        </p>

        <p className="text-sm italic text-muted-foreground mt-4">
          Exemplo: Sua agressividade não desaparece. Mas quando você a integra, você pode usá-la de forma construtiva—para estabelecer limites, para defender seus valores, para se proteger. Não é mais uma força que opera nas sombras; é uma força que você pode usar conscientemente.
        </p>
      </div>
    )
  },
  {
    id: 'lealdades-invisíveis',
    title: 'Lealdades Invisíveis: Os Compromissos Inconscientes com Sua Família',
    shortDescription: 'Como você continua preso a dinâmicas familiares mesmo como adulto',
    fullContent: (
      <div className="space-y-4">
        <p>
          Lealdades invisíveis são compromissos inconscientes que você faz com sua família. Você não os escolhe conscientemente—você os absorve através da dinâmica familiar. E eles continuam governando seu comportamento mesmo quando você é adulto e não está mais em contato com sua família.
        </p>

        <h4 className="font-semibold text-foreground mt-4">Exemplos de Lealdades Invisíveis</h4>

        <div className="space-y-3">
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm font-semibold text-primary mb-2">Lealdade ao Sofrimento</p>
            <p className="text-sm">
              Sua mãe sofreu muito. Você inconscientemente sente que ser feliz é uma traição a ela. Então você sabota sua própria felicidade para manter-se fiel ao sofrimento da família.
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm font-semibold text-primary mb-2">Lealdade ao Fracasso</p>
            <p className="text-sm">
              Seu pai nunca conseguiu sucesso. Você inconscientemente sente que ter sucesso é abandoná-lo. Então você sabota seu próprio sucesso para manter-se fiel ao destino da família.
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm font-semibold text-primary mb-2">Lealdade ao Papel</p>
            <p className="text-sm">
              Você foi designado como "o cuidador" da família. Você inconscientemente sente que abandonar esse papel é uma traição. Então você continua cuidando de todos, mesmo quando isso prejudica você.
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm font-semibold text-primary mb-2">Lealdade ao Segredo</p>
            <p className="text-sm">
              Há um segredo na sua família (abuso, infidelidade, etc.). Você inconscientemente sente que revelar o segredo é uma traição. Então você o carrega sozinho, mesmo quando isso prejudica sua saúde mental.
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-foreground mt-6">Por Que Isso Importa</h4>

        <p>
          Lealdades invisíveis são uma das razões mais profundas pelas quais você continua preso em padrões que conscientemente você quer mudar. Você pode querer sair de um relacionamento prejudicial, mas uma lealdade invisível o mantém lá. Você pode querer ter sucesso, mas uma lealdade invisível o sabota.
        </p>

        <p>
          O trabalho terapêutico envolve trazer essas lealdades à luz, compreender sua origem e função, e então renegociar conscientemente sua relação com elas. Você não rejeita sua família—você apenas deixa de ser governado por compromissos que nunca escolheu conscientemente.
        </p>
      </div>
    )
  }
];

export default function ConceptosFundamentais() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  useEffect(() => {
    updatePageMeta('conceitos');
  }, []);

  return (
    <Layout>
      <div className="bg-background">
        <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Conceitos Fundamentais' }]} />

      <div className="container max-w-3xl py-12 md:py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Conceitos Fundamentais
          </h1>
          <p className="text-lg text-muted-foreground">
            Entenda a filosofia e a psicologia que sustentam minha abordagem terapêutica. Esses conceitos são fundamentais para compreender como funciona a investigação profunda de si mesmo.
          </p>
        </div>

        <div className="space-y-4">
          {concepts.map((concept) => (
            <div
              key={concept.id}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setExpandedId(expandedId === concept.id ? null : concept.id)}
                className="w-full px-6 py-6 flex items-start justify-between bg-card hover:bg-card/80 transition-colors text-left"
              >
                <div className="flex-1 pr-4">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {concept.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {concept.shortDescription}
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-200 ${
                    expandedId === concept.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === concept.id && (
                <div className="px-6 py-6 bg-background border-t border-border">
                  {concept.fullContent}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Quer explorar esses conceitos mais profundamente?
          </h3>
          <p className="text-foreground mb-4">
            Esses conceitos ganham vida real quando você começa a investigar sua própria vida através deles. A psicoterapia oferece o espaço seguro para fazer essa investigação de forma rigorosa e compassiva.
          </p>
          <a
            href="https://wa.me/5518988887777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Agendar uma Sessão
          </a>
        </div>
      </div>
      </div>
    </Layout>
  );
}
