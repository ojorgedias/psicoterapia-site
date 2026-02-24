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
    id: 'crise-existencial-1',
    category: 'Crise Existencial',
    question: 'Como saber se estou em crise existencial?',
    answer: `Uma crise existencial é mais que tristeza ou depressão - é um questionamento profundo sobre o sentido da vida, seus valores e sua direção. Você pode estar em crise existencial se:

• Questiona constantemente o propósito da vida
• Sente vazio ou desconexão mesmo com conquistas
• Questiona valores que sempre considerou verdadeiros
• Sente ansiedade sobre "estar no caminho certo"
• Experimenta insatisfação generalizada sem motivo aparente
• Questiona quem você realmente é além dos papéis sociais

A diferença crucial: uma crise existencial é uma oportunidade de transformação, não uma patologia. É seu psiquismo pedindo para você questionar pressupostos não examinados e desenvolver valores autênticos.

Se você está vivenciando isso, recomendamos ler nosso artigo aprofundado sobre crise existencial, onde exploramos como transformar essa crise em crescimento genuíno.`,
    relatedBlogPost: 'crise-existencial-transformacao',
    relatedService: { title: 'Crise Existencial', url: '/terapia/adultos/crise-existencial' }
  },
  {
    id: 'ansiedade-intuicao-1',
    category: 'Ansiedade vs Intuição',
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
    category: 'Ajuda Profissional',
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
