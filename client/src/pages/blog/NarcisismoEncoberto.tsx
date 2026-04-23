import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function NarcisismoEncoberto() {
  const readingTime = 13;
  const metadata = getBlogPostMetadata('narcisismo-encoberto');
  
  if (metadata) {
    useBlogPostingSchema({
      headline: metadata.headline,
      description: metadata.description,
      image: metadata.image,
      datePublished: metadata.datePublished,
      dateModified: metadata.dateModified,
      author: { '@type': 'Person', name: metadata.author },
    });
  }
  
  useEffect(() => {
    document.title = 'Narcisismo encoberto: Sinais sutis e recuperação | Psicoterapeuta Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metadata) {
      metaDescription.setAttribute('content', 'Narcisismo encoberto: sinais sutis que ninguém vê. Dinâmicas relacionais e caminhos para recuperação clínica.');
    }
  }, [metadata]);

  return (
    <Layout>
<div className="bg-background">
<Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Narcisismo Encoberto" }]} />
<article className="container max-w-3xl py-12 md:py-20">
<div className="mb-8">
<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Narcisismo Encoberto: Sinais Sutis e Recuperação
          </h1>
<div className="flex items-center gap-4 text-muted-foreground">
<div className="flex items-center gap-2">
<Clock size="{18}" />
<span>{readingTime} min de leitura</span>
</div>
<span>23 de fevereiro de 2026</span>
</div>
</div>
<div className="prose prose-invert max-w-none text-foreground space-y-6">
<p className="text-lg leading-relaxed">
            Narcisismo encoberto é diferente do narcisismo óbvio. Não é o tipo que se vangloria e domina 
            conversas. É o tipo que parece tímido, sensível, vítima - mas que manipula sutilmente, 
            controla através da culpa e da vitimização.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Diferença: Narcisismo Óbvio vs Encoberto
          </h2>
<h3 className="text-xl font-semibold text-primary mt-6">Narcisismo Óbvio (Grandioso)</h3>
<ul className="list-disc list-inside space-y-2 text-foreground">
<li>Exibe superioridade abertamente</li>
<li>Domina conversas e busca admiração</li>
<li>Reage com raiva à crítica</li>
<li>Explora pessoas sem culpa</li>
<li>Fácil de identificar e evitar</li>
</ul>
<h3 className="text-xl font-semibold text-primary mt-6">Narcisismo Encoberto (Vulnerável)</h3>
<ul className="list-disc list-inside space-y-2 text-foreground">
<li>Parece sensível e introvertido</li>
<li>Frequentemente se vitimiza</li>
<li>Reage com ferimento à crítica ("você me feriu")</li>
<li>Manipula através da culpa e da compaixão</li>
<li>Muito mais difícil de identificar</li>
</ul>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            12 Sinais Sutis de Narcisismo Encoberto
          </h2>
<h3 className="text-xl font-semibold text-primary mt-6">1. Hipersensibilidade à Crítica</h3>
<p>
            A menor crítica é recebida como ataque pessoal devastador. "Como você pode dizer isso de mim? 
            Você sabe como sou sensível."
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">2. Vitimização Constante</h3>
<p>
            Sempre há uma história de como foram prejudicados. O mundo é injusto com eles. Todos os seus 
            problemas são culpa de outras pessoas.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">3. Manipulação Através da Culpa</h3>
<p>
            "Depois de tudo que fiz por você..." "Como você pode me fazer isso depois do que passei?" 
            Usam sofrimento como moeda de troca.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">4. Falta de Empatia Genuína</h3>
<p>
            Parecem empáticos, mas sua "empatia" é performática. Quando você tem um problema, rapidamente 
            trazem de volta para si mesmos.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">5. Necessidade de Admiração Sutil</h3>
<p>
            Não pedem admiração abertamente, mas constantemente buscam validação. "Fiz tal coisa, ninguém 
            percebeu..." esperando que você reconheça.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">6. Inveja Disfarçada</h3>
<p>
            Sentem inveja profunda mas a disfarçam como preocupação. "Tenho medo que você se machuque com 
            esse sucesso."
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">7. Passividade Agressiva</h3>
<p>
            Não expressam raiva diretamente. Em vez disso, ignoram, fazem "esquecimentos" estratégicos, 
            chegam atrasado propositalmente.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">8. Controle Através da Preocupação</h3>
<p>
            "Estou preocupado com você" é frequentemente uma forma de controlar suas escolhas. 
            "Você tem certeza que quer fazer isso? Tenho medo..."
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">9. Falta de Responsabilidade</h3>
<p>
            Nunca é culpa deles. Sempre há uma razão externa. Mesmo quando claramente erraram, encontram 
            forma de não assumir responsabilidade.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">10. Relacionamentos Superficiais</h3>
<p>
            Apesar de parecerem conectados, seus relacionamentos são superficiais. Ninguém realmente os 
            conhece porque eles não se revelam genuinamente.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">11. Interpretação Negativa de Intenções</h3>
<p>
            Frequentemente interpretam ações neutras como ataques pessoais. "Você não respondeu meu 
            mensagem em 2 horas - você me odeia?"
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">12. Perfeccionismo Defensivo</h3>
<p>
            Parecem perfeitos ou tentam desesperadamente parecer perfeitos. Qualquer falha é uma ameaça 
            existencial ao ego.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Impacto em Relacionamentos
          </h2>
<p>
            Relacionamentos com narcisistas encobertes são emocionalmente exaustivos. Você se sente 
            constantemente culpado, responsável por seus sentimentos, nunca suficiente. É um tipo de 
            abuso emocional sutil mas devastador.
          </p>
<p className="bg-primary/10 border-l-4 border-primary p-4 italic">
<strong>Importante:</strong> Se você cresceu com um dos pais narcisista, leia nosso artigo sobre{' '}
            <Link className="text-primary hover:underline" href="/blog/mae-narcisista-impacto-adulto">mãe</Link> narcisista e seu impacto na vida adulta
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Recuperação e Libertação
          </h2>
<p>
            Recuperação começa com reconhecimento. Você não é culpado. Você não é responsável pelos 
            sentimentos deles. Você merece relacionamentos onde sua realidade é validada e suas necessidades 
            importam.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">Passos para Recuperação</h3>
<ul className="list-disc list-inside space-y-2 text-foreground">
<li>Reconheça o padrão - você não está louco</li>
<li>Estabeleça limites firmes</li>
<li>Reduza contato se necessário</li>
<li>Procure apoio profissional</li>
<li>Desenvolva valores autênticos (não baseados na aprovação deles)</li>
</ul>
<div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 className="text-xl font-semibold text-foreground mb-3">Recuperação de Relacionamentos Narcisistas</h3>
<p className="text-foreground mb-4">
              Se você está em ou saindo de um relacionamento com alguém narcisista, ofereço atendimento 
              especializado em recuperação emocional e desenvolvimento de limites saudáveis.
            </p>
<CTAButton whatsapp={true}>Agendar Sessão</CTAButton>
</div>
</div>
<div className="mt-16 pt-8 border-t border-border">
<h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<Link href="/blog/mae-narcisista-impacto-adulto"></Link>
<a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Mãe Narcisista: Impacto na Vida Adulta
                </h4>
<p className="text-sm text-muted-foreground">Efeitos de crescer com mãe narcisista</p>
<div className="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Ler artigo</span>
<ArrowRight size="{16}" />
</div>
</a>
<Link href="/terapia/casais/conflitos-casal"></Link>
<a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: Conflitos de Casal
                </h4>
<p className="text-sm text-muted-foreground">Terapia para relacionamentos</p>
<div className="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Saiba mais</span>
<ArrowRight size="{16}" />
</div>
</a>
</div>
</div>
</article>
</div>
</Layout>
  );
}
