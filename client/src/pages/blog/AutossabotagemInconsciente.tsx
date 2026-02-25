import { Link } from 'wouter';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';

export default function AutossabotagemInconsciente() {
  const readingTime = 15;

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Autossabotagem Inconsciente' }]} />

      <article className="container max-w-3xl py-12 md:py-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Autossabotagem Inconsciente: A Manifestação da Sombra e as Dinâmicas de Poder
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min de leitura</span>
            </div>
            <span>23 de fevereiro de 2026</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            Você já percebeu que sabota seu próprio sucesso? Que quando as coisas começam a dar certo, algo dentro de você trabalha para estragar? Isso não é fraqueza, preguiça ou falta de vontade. É a manifestação de dinâmicas psicológicas profundas: a sombra (aquilo que você rejeita em si mesmo) combinada com uma dinâmica de onipotência e impotência que governa seu comportamento de forma inconsciente.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            O Que Realmente É Autossabotagem?
          </h2>
          
          <p>
            A autossabotagem não é um mecanismo de proteção simples. É mais complexa. Ela é a manifestação de partes de si mesmo que você rejeita (a sombra) combinada com uma dinâmica onde você se sente simultaneamente onipotente (capaz de tudo) e impotente (incapaz de nada). Quando você se aproxima do sucesso, essa dinâmica se ativa e você cria obstáculos.
          </p>

          <p>
            Pense assim: você criou um "roteiro" rígido do que é sucesso. Quando a realidade se desvia desse roteiro, ou quando seu inconsciente percebe que você não está pronto para a integração que o sucesso exige, você sabota. Não é para "protegê-lo"—é porque você não consegue lidar com a contradição entre o que você acha que deveria ser e o que você realmente é.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Lealdades Invisíveis: O Entrelaçamento Familiar
          </h2>
          
          <p>
            Uma das raízes mais profundas da autossabotagem está nas lealdades invisíveis que você tem com sua família. Não são lealdades que você escolheu conscientemente. São compromissos que você absorveu através da dinâmica familiar, e que continuam governando seu comportamento mesmo quando você é adulto.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Exemplo 1: Lealdade ao Sofrimento</h3>
          <p>
            Sua mãe sofreu muito. Talvez tenha sacrificado sua carreira para cuidar da família. Você inconscientemente sente que ser feliz ou bem-sucedido é uma traição a ela. Então você sabota seu sucesso para manter-se fiel ao sofrimento que viu em casa. Você não faz isso conscientemente—é uma lealdade invisível que opera nas sombras.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Exemplo 2: Lealdade ao Fracasso</h3>
          <p>
            Seu pai nunca conseguiu sair da pobreza. Você inconscientemente sente que ter sucesso é abandoná-lo, é dizer que ele falhou. Então você sabota seu próprio sucesso para manter-se fiel ao destino familiar. Você pode estar consciente de que quer sucesso, mas seu inconsciente trabalha contra você porque a lealdade é mais forte que o desejo consciente.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Exemplo 3: Lealdade ao Papel</h3>
          <p>
            Você foi designado como "o cuidador" ou "o responsável" na família. Você inconscientemente sente que abandonar esse papel é uma traição. Então você continua cuidando de todos, mesmo quando isso prejudica você, mesmo quando você quer construir sua própria vida. A lealdade invisível é mais forte que seu bem-estar pessoal.
          </p>

          <p className="bg-primary/10 border-l-4 border-primary p-4 italic mt-6">
            <strong>Conceito importante:</strong> Essas lealdades não são "crenças limitantes" que você pode simplesmente questionar e abandonar. São estruturas profundas entrelaçadas com sua identidade e com o sistema familiar. Elas exigem investigação arqueológica séria, não apenas pensamento positivo.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            A Dinâmica de Onipotência e Impotência
          </h2>

          <p>
            Há uma dinâmica paradoxal que governa a autossabotagem. Você se sente simultaneamente onipotente (capaz de tudo, responsável por tudo) e impotente (incapaz de nada, vítima de tudo). Essa contradição cria a sabotagem.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Como Funciona</h3>
          <p>
            Você cria expectativas impossíveis para si mesmo (onipotência). Quando você não consegue atender a essas expectativas, você se sente completamente impotente. Então você sabota para confirmar a impotência: "Eu sabia que não conseguiria. Eu sou incapaz." Isso resolve a contradição temporariamente—você passa de onipotente para impotente, e pelo menos a contradição desaparece.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Exemplo Concreto</h3>
          <p>
            Você decide que vai ter sucesso, que vai ganhar muito dinheiro, que vai ter o relacionamento perfeito, que vai estar sempre feliz e produtivo (onipotência). Quando a realidade não corresponde a essa expectativa impossível, você se sente completamente fracassado. Então você sabota conscientemente para confirmar que é incapaz (impotência). Pelo menos agora há consistência—você é impotente, e pronto. A contradição foi resolvida.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            A Sombra: O Que Você Rejeita em Si Mesmo
          </h2>

          <p>
            A sombra é um conceito de Carl Jung. É tudo em você que você rejeita, que você não quer ser, que você tenta esconder. Muitas vezes, o sucesso exigiria que você acessasse partes de si mesmo que você rejeitou.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Exemplo: A Agressividade</h3>
          <p>
            Você foi criado para ser "gentil" e "educado". Sua agressividade é sombra. Você a rejeita. Mas sucesso muitas vezes exige agressividade—estabelecer limites, dizer não, defender seus interesses. Quando você se aproxima do sucesso, seu inconsciente percebe que você precisaria acessar essa agressividade rejeitada. Então você sabota para evitar ter que integrar essa parte de si mesmo.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Exemplo: A Ambição</h3>
          <p>
            Você foi criado em um ambiente onde ambição era vista como "ganância" ou "egoísmo". Sua ambição é sombra. Você a rejeita. Mas sucesso exige ambição. Quando você se aproxima do sucesso, você sente que está se tornando a pessoa que você sempre desprezou. Então você sabota para manter sua autoimagem de pessoa "humilde" e "desapegada".
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Autossabotagem vs Spiritual Bypass
          </h2>
          
          <p>
            É importante diferenciar autossabotagem genuína de "spiritual bypass"—quando você usa conceitos espirituais para evitar crescimento psicológico real. Algumas pessoas dizem "não preciso de sucesso material, estou em desenvolvimento espiritual", quando na verdade estão sabotando por medo de integração.
          </p>

          <p>
            A verdadeira espiritualidade não rejeita o mundo material ou o sucesso. Ela integra. Você pode ser bem-sucedido E espiritual. Você pode ter dinheiro E valores autênticos. Quando você usa espiritualidade para justificar fracasso, você está fazendo spiritual bypass, não desenvolvimento genuíno.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            O Processo de Investigação: Arqueologia Pessoal de Pressupostos
          </h2>

          <p>
            Desarticular a autossabotagem exige investigação rigorosa. Não é um processo rápido. É uma arqueologia pessoal onde você escava as camadas de sua história para compreender por que sabota.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Passo 1: Identificar o Padrão</h3>
          <p>
            Observe especificamente como você sabota. Quando você se aproxima do sucesso, o que acontece? Você fica doente? Cria drama? Procrastina? Sabota relacionamentos? Perde interesse? Cada pessoa tem um padrão específico. Identifique o seu.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Passo 2: Escavar a Origem</h3>
          <p>
            Pergunte-se: De quem estou sendo leal ao sabotar? Que mensagem recebi sobre sucesso na minha família? Que ameaça meu inconsciente está tentando evitar? Que parte de mim preciso rejeitar para ter sucesso? Essas perguntas não têm respostas rápidas. Elas exigem investigação profunda.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Passo 3: Compreender a Lógica Interna</h3>
          <p>
            Uma vez que você começa a ver a origem, você pode compreender a lógica. Por que seu inconsciente mantém esse padrão? Qual é a função dele? Como ele o protege (mesmo que de forma prejudicial)? Quando você compreende a lógica interna, o padrão perde o poder de coerção automática.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Passo 4: Renegociação e Integração</h3>
          <p>
            Uma vez que você compreende, você pode renegociar. Você pode dizer: "Eu honro minha lealdade à minha família, E agora escolho ter sucesso. Essas coisas não são mutuamente excludentes. Meu sucesso não me torna desleal; me torna autêntico." Você pode integrar as partes rejeitadas de si mesmo. Você pode acessar sua agressividade de forma construtiva, sua ambição de forma responsável.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Isso Importa
          </h2>

          <p>
            Enquanto a autossabotagem permanece não examinada, ela funciona como um destino inescapável. Você está preso a ela. Mas quando você a traz à luz da consciência, quando você compreende sua lógica interna, ela perde o poder de coerção automática. Você ganha a liberdade de escolher conscientemente.
          </p>

          <p>
            Isso não significa que o sucesso se torna fácil. Significa que você deixa de ser refém de dinâmicas invisíveis. Você passa a exercer uma agência genuína sobre suas escolhas.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">Pronto para Investigar Suas Raízes?</h3>
            <p className="text-foreground mb-4">
              A psicoterapia oferece um espaço seguro para fazer essa investigação de forma rigorosa e compassiva. Ofereço atendimento especializado em autossabotagem, padrões familiares e integração da sombra. Atendimento online para todo o país e presencial em Presidente Epitácio - SP.
            </p>
            <CTAButton whatsapp>Agendar Sessão Inicial</CTAButton>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/terapia/adultos/autossabotagem">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: Autossabotagem
                </h4>
                <p className="text-sm text-muted-foreground">Explorar abordagem clínica especializada</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </Link>
            <Link href="/conceitos-fundamentais">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Conceitos Fundamentais
                </h4>
                <p className="text-sm text-muted-foreground">Entenda a sombra, lealdades invisíveis e mais</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Explorar</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
