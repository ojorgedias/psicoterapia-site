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
  
  useEffect(() =&gt; {
    document.title = metadata?.headline + ' - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription &amp;&amp; metadata) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [metadata]);

  return (
    <layout>
<div classname="bg-background">
<breadcrumbs '="" 'blog',="" 'spiritual="" blog'="" bypass'="" href:="" items="{[{" label:="" {="" },="" }]}=""></breadcrumbs>
<article classname="container max-w-3xl py-12 md:py-20">
<div classname="mb-8">
<h1 classname="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Spiritual Bypass: Quando a Espiritualidade Evita Crescimento Psicológico
          </h1>
<div classname="flex items-center gap-4 text-muted-foreground">
<div classname="flex items-center gap-2">
<clock size="{18}"></clock>
<span>{readingTime} min de leitura</span>
</div>
<span>23 de fevereiro de 2026</span>
</div>
</div>
<div classname="prose prose-invert max-w-none text-foreground space-y-6">
<p classname="text-lg leading-relaxed">
            Spiritual bypass é quando você usa conceitos espirituais para evitar trabalho psicológico 
            genuíno. É quando você diz "estou em desenvolvimento espiritual" quando na verdade está 
            evitando lidar com trauma, medo ou responsabilidade.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Exemplos de <link classname="text-primary hover:underline" href="/blog/spiritual-bypass"/>Spiritual Bypass
          </h2>
<h3 classname="text-xl font-semibold text-primary mt-6">Perdão Forçado</h3>
<p>
            "Preciso perdoar porque estou em desenvolvimento espiritual" - mas você nunca processou a raiva 
            ou o trauma. Você apenas o reprimiu com um rótulo espiritual.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Desapego Defensivo</h3>
<p>
            "Não me importo com sucesso material, estou em desenvolvimento espiritual" - mas na verdade 
            você está sabotando seu sucesso por medo.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Transcendência Prematura</h3>
<p>
            "Estou além disso" - mas você nunca realmente processou seus problemas. Você apenas os 
            transcendeu intelectualmente.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Integração Genuína vs Bypass
          </h2>
<h3 classname="text-xl font-semibold text-primary mt-6">Integração Genuína</h3>
<ul classname="list-disc list-inside space-y-2 text-foreground">
<li>Você processa trauma psicológico</li>
<li>Você desenvolve limites saudáveis</li>
<li>Você toma responsabilidade pelas suas ações</li>
<li>Você integra espiritualidade com crescimento psicológico</li>
</ul>
<h3 classname="text-xl font-semibold text-primary mt-6"><link classname="text-primary hover:underline" href="/blog/spiritual-bypass"/>Spiritual Bypass</h3>
<ul classname="list-disc list-inside space-y-2 text-foreground">
<li>Você evita processar trauma</li>
<li>Você usa espiritualidade como desculpa</li>
<li>Você não toma responsabilidade</li>
<li>Você reprime em vez de integrar</li>
</ul>
<p classname="bg-primary/10 border-l-4 border-primary p-4 italic">
<strong>Leia também:</strong> Nossa abordagem de{' '}
            <link classname="text-primary hover:underline" href="/autoridade/psicologia-espiritualidade"/>integração psicologia-espiritualidade pragmática
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Caminho para Integração Genuína
          </h2>
<p>
            Integração genuína requer coragem. Requer que você enfrente o que você está evitando. 
            Requer psicologia clínica como base.
          </p>
<div classname="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 classname="text-xl font-semibold text-foreground mb-3">Integração Psicologia-Espiritualidade</h3>
<p classname="text-foreground mb-4">
              Ofereço atendimento especializado em integração genuína de psicologia e espiritualidade, 
              com foco em evitar <link classname="text-primary hover:underline" href="/blog/spiritual-bypass"/>spiritual bypass.
            </p>
<ctabutton whatsapp="">Agendar Sessão</ctabutton>
</div>
</div>
<div classname="mt-16 pt-8 border-t border-border">
<h3 classname="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div classname="grid grid-cols-1 md:grid-cols-2 gap-4">
<link href="/autoridade/psicologia-espiritualidade"/>
<a classname="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 classname="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: Psicologia e Espiritualidade
                </h4>
<p classname="text-sm text-muted-foreground">Integração pragmática</p>
<div classname="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Saiba mais</span>
<arrowright size="{16}"></arrowright>
</div>
</a>
</div>
</div>
</article>
</div>
</layout>
  );
}
