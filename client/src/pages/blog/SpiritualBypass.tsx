import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function SpiritualBypass() {
  const readingTime = 13;
  const metadata = getBlogPostMetadata('spiritual-bypass');
  
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
    document.title = metadata?.headline + ' - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metadata) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [metadata]);

  return (
    <Layout>
<div className="bg-background">
<Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Spiritual Bypass" }]} />
<article className="container max-w-3xl py-12 md:py-20">
<div className="mb-8">
<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Spiritual Bypass: Quando a Espiritualidade Evita Crescimento Psicológico
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
            Spiritual bypass é quando você usa conceitos espirituais para evitar trabalho psicológico 
            genuíno. É quando você diz "estou em desenvolvimento espiritual" quando na verdade está 
            evitando lidar com trauma, medo ou responsabilidade.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Exemplos de <Link className="text-primary hover:underline" href="/blog/spiritual-bypass">Spiritual</Link> Bypass
          </h2>
<h3 className="text-xl font-semibold text-primary mt-6">Perdão Forçado</h3>
<p>
            "Preciso perdoar porque estou em desenvolvimento espiritual" - mas você nunca processou a raiva 
            ou o trauma. Você apenas o reprimiu com um rótulo espiritual.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">Desapego Defensivo</h3>
<p>
            "Não me importo com sucesso material, estou em desenvolvimento espiritual" - mas na verdade 
            você está sabotando seu sucesso por medo.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">Transcendência Prematura</h3>
<p>
            "Estou além disso" - mas você nunca realmente processou seus problemas. Você apenas os 
            transcendeu intelectualmente.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Integração Genuína vs Bypass
          </h2>
<h3 className="text-xl font-semibold text-primary mt-6">Integração Genuína</h3>
<ul className="list-disc list-inside space-y-2 text-foreground">
<li>Você processa trauma psicológico</li>
<li>Você desenvolve limites saudáveis</li>
<li>Você toma responsabilidade pelas suas ações</li>
<li>Você integra espiritualidade com crescimento psicológico</li>
</ul>
<h3 className="text-xl font-semibold text-primary mt-6"><Link className="text-primary hover:underline" href="/blog/spiritual-bypass">Spiritual</Link> Bypass</h3>
<ul className="list-disc list-inside space-y-2 text-foreground">
<li>Você evita processar trauma</li>
<li>Você usa espiritualidade como desculpa</li>
<li>Você não toma responsabilidade</li>
<li>Você reprime em vez de integrar</li>
</ul>
<p className="bg-primary/10 border-l-4 border-primary p-4 italic">
<strong>Leia também:</strong> Nossa abordagem de{' '}
            <Link className="text-primary hover:underline" href="/autoridade/psicologia-espiritualidade">integração</Link> psicologia-espiritualidade pragmática
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Caminho para Integração Genuína
          </h2>
<p>
            Integração genuína requer coragem. Requer que você enfrente o que você está evitando. 
            Requer psicologia clínica como base.
          </p>
<div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 className="text-xl font-semibold text-foreground mb-3">Integração Psicologia-Espiritualidade</h3>
<p className="text-foreground mb-4">
              Ofereço atendimento especializado em integração genuína de psicologia e espiritualidade, 
              com foco em evitar <Link className="text-primary hover:underline" href="/blog/spiritual-bypass">spiritual</Link> bypass.
            </p>
<CTAButton whatsapp="">Agendar Sessão</CTAButton>
</div>
</div>
<div className="mt-16 pt-8 border-t border-border">
<h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<Link href="/autoridade/psicologia-espiritualidade"></Link>
<a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: Psicologia e Espiritualidade
                </h4>
<p className="text-sm text-muted-foreground">Integração pragmática</p>
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
