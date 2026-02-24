import { Link } from 'wouter';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';

export default function AutossabotagemInconsciente() {
  const readingTime = 12;

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Autossabotagem Inconsciente' }]} />

      <article className="container max-w-3xl py-12 md:py-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Autossabotagem Inconsciente: Raízes Psicológicas e Libertação
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
            Você já percebeu que sabota seu próprio sucesso? Que quando as coisas começam a dar certo, 
            algo dentro de você trabalha para estragar? Isso não é fraqueza, preguiça ou falta de vontade. 
            É um sistema de proteção psicológica sofisticado que seu inconsciente desenvolveu para mantê-lo seguro.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            O Paradoxo da Autossabotagem
          </h2>
          <p>
            A autossabotagem é um mecanismo de proteção. Seu inconsciente está tentando protegê-lo de algo. 
            Mas de quê? Frequentemente, de coisas que não são mais ameaças reais no presente, mas que foram 
            ameaças no passado.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Raízes Psicológicas da Autossabotagem
          </h2>
          
          <h3 className="text-xl font-semibold text-primary mt-6">Padrões Familiares e Lealdades Invisíveis</h3>
          <p>
            Você aprendeu cedo que sucesso era perigoso. Talvez seu pai foi punido por ser bem-sucedido. 
            Talvez sua mãe sacrificou tudo e você aprendeu que sucesso pessoal é desloyal. Talvez você 
            observou que pessoas bem-sucedidas na sua família foram rejeitadas ou isoladas.
          </p>
          <p>
            Existe uma lealdade invisível operando: "Se eu tiver sucesso, abandono minha família. Se eu 
            tiver sucesso, traio meus pais. Se eu tiver sucesso, fico sozinho." Essa lealdade é tão 
            profunda que você sabota seu sucesso para manter-se fiel.
          </p>

          <p className="bg-primary/10 border-l-4 border-primary p-4 italic">
            <strong>Conceito importante:</strong> Leia nosso artigo sobre{' '}
            <Link href="/blog/padroes-familiares-relacionamentos">
              <a className="text-primary hover:underline">padrões familiares em relacionamentos</a>
            </Link>{' '}
            para entender como essas lealdades invisíveis se manifestam em todas as áreas da vida.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Trauma e Associações Negativas</h3>
          <p>
            Você experimentou sucesso anterior seguido de punição ou perda? Seu inconsciente associou 
            sucesso com perigo. Agora, sempre que você se aproxima do sucesso, seu sistema de alarme 
            dispara e você sabota para evitar o "perigo" que se aproxima.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Identidade Limitada</h3>
          <p>
            Você se vê como "alguém que falha". Essa identidade é confortável porque é familiar. Sucesso 
            exigiria que você se reinventasse, que assumisse uma nova identidade. Seu inconsciente sabota 
            para manter você na zona de conforto da identidade conhecida.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Medo do Julgamento Social</h3>
          <p>
            Sucesso o expõe. Pessoas bem-sucedidas são vistas, criticadas, julgadas. Seu "Mamute Interior" 
            (o medo primitivo do julgamento social) trabalha para manter você invisível e seguro.
          </p>

          <p className="bg-primary/10 border-l-4 border-primary p-4 italic">
            <strong>Leia também:</strong> Entenda melhor o{' '}
            <Link href="/faq">
              <a className="text-primary hover:underline">medo do julgamento social em nossas FAQs</a>
            </Link>
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Autossabotagem vs Spiritual Bypass
          </h2>
          <p>
            É importante diferenciar autossabotagem genuína de "spiritual bypass" - quando usamos conceitos 
            espirituais para evitar crescimento psicológico real. Algumas pessoas dizem "não preciso de sucesso 
            material, estou em desenvolvimento espiritual", quando na verdade estão sabotando por medo.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Framework de Integração: 3 Passos para Libertação
          </h2>

          <h3 className="text-xl font-semibold text-primary mt-6">1. Conscientização</h3>
          <p>
            Observe seus padrões de autossabotagem. Quando você se aproxima do sucesso, o que acontece? 
            Você fica doente? Cria drama? Procrastina? Sabota relacionamentos? Identifique o padrão específico.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">2. Investigação Compassiva</h3>
          <p>
            Use a técnica de "arqueologia pessoal de pressupostos". Pergunte-se: "De quem estou sendo leal 
            ao sabotar?" "Que mensagem recebi sobre sucesso na minha família?" "Que ameaça meu inconsciente 
            está tentando evitar?"
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">3. Renegociação e Integração</h3>
          <p>
            Uma vez que você compreende a raiz, você pode renegociar. "Eu honro minha lealdade à minha 
            família, E agora escolho ter sucesso. Essas coisas não são mutuamente excludentes. Meu sucesso 
            não me torna desleal; me torna autêntico."
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Quando Procurar Ajuda Profissional
          </h2>
          <p>
            Se você reconheceu padrões profundos de autossabotagem que afetam múltiplas áreas da vida, 
            procurar um psicólogo é um ato de auto-responsabilidade. A terapia oferece um espaço seguro 
            para explorar essas raízes e desenvolver novos padrões.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">Pronto para Explorar Suas Raízes?</h3>
            <p className="text-foreground mb-4">
              Ofereço atendimento especializado em autossabotagem, padrões familiares e desenvolvimento 
              de valores autênticos. Atendimento online para todo o país e presencial em Presidente Epitácio - SP.
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
            <Link href="/blog/padroes-familiares-relacionamentos">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Padrões Familiares em Relacionamentos
                </h4>
                <p className="text-sm text-muted-foreground">Como padrões familiares se repetem</p>
                <div className="flex items-center gap-2 text-primary mt-2 text-sm">
                  <span>Ler artigo</span>
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
