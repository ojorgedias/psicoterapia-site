import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function MedoDeSerFeliz() {
  const readingTime = 11;
  const metadata = getBlogPostMetadata('medo-de-ser-feliz');
  
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
<breadcrumbs '="" 'blog',="" 'medo="" blog'="" de="" feliz'="" href:="" items="{[{" label:="" ser="" {="" },="" }]}=""></breadcrumbs>
<article classname="container max-w-3xl py-12 md:py-20">
<div classname="mb-8">
<h1 classname="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Medo de Ser Feliz: Raízes Psicológicas e Integração
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
            Você já percebeu que quando as coisas começam a ficar boas, algo dentro de você sabota? 
            Que você sente <link classname="text-primary hover:underline" href="/ansiedade"/>ansiedade quando deveria estar feliz? Que há uma culpa inexplicável associada 
            à alegria? Isso é querofobia - medo de ser feliz.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Temos Medo de Ser Feliz?
          </h2>
<h3 classname="text-xl font-semibold text-primary mt-6">Trauma Anterior</h3>
<p>
            Você experimentou felicidade seguida de perda ou punição. Seu sistema nervoso aprendeu: 
            "Felicidade = perigo iminente". Agora, sempre que você se aproxima da felicidade, seu alarme dispara.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Lealdade ao Sofrimento Familiar</h3>
<p>
            Seus pais sofriam. Você aprendeu que ser feliz era abandoná-los. Que ser feliz era desleal. 
            Que você deveria sofrer junto com eles.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Identidade Baseada no Sofrimento</h3>
<p>
            Sua identidade está fundida com o sofrimento. Você é "alguém que sofre". Felicidade ameaça 
            essa identidade.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Medo da Queda</h3>
<p>
            "Se sou feliz agora, quanto mais alto subo, mais dói a queda." Você sabota para manter a 
            queda controlada.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Integração e Libertação
          </h2>
<p>
            A solução não é "pensar positivo" ou "simplesmente ser feliz". É integração profunda do medo 
            e do trauma subjacente.
          </p>
<div classname="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 classname="text-xl font-semibold text-foreground mb-3">Pronto para Explorar?</h3>
<p classname="text-foreground mb-4">
              Ofereço atendimento especializado em trauma, <link classname="text-primary hover:underline" href="/padroes-familiares"/>padrões familiares e integração psicológica.
            </p>
<ctabutton whatsapp="">Agendar Sessão</ctabutton>
</div>
</div>
<div classname="mt-16 pt-8 border-t border-border">
<h3 classname="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div classname="grid grid-cols-1 md:grid-cols-2 gap-4">
<link href="/terapia/adultos/regulacao-emocional"/>
<a classname="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 classname="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Regulação Emocional
                </h4>
<p classname="text-sm text-muted-foreground">Abordagem clínica</p>
<div classname="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Saiba mais</span>
<arrowright size="{16}"></arrowright>
</div>
</a>
<link href="/faq"/>
<a classname="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 classname="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  FAQ: Perguntas Frequentes
                </h4>
<p classname="text-sm text-muted-foreground">Respostas rápidas</p>
<div classname="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Explorar</span>
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
