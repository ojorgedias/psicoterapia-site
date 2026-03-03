import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function BurnoutDigital() {
  const readingTime = 12;
  const metadata = getBlogPostMetadata('ansiedade-mamute-interior');
  
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
    document.title = 'Burnout Digital - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entenda o burnout digital: como o cansaço crônico se desenvolve no contexto da hiperconexividade e como trabalhar a recuperação.');
    }
  }, []);

  return (
    <layout>
<div classname="bg-background">
<breadcrumbs '="" 'blog',="" 'burnout="" blog'="" digital'="" href:="" items="{[{" label:="" {="" },="" }]}=""></breadcrumbs>
<article classname="container max-w-3xl py-12 md:py-20">
<div classname="mb-8">
<h1 classname="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Burnout Digital: Autenticidade vs Performance na Era Virtual
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
            Burnout digital não é apenas cansaço. É o esgotamento emocional de estar constantemente 
            conectado, constantemente performando, constantemente consumindo. É a morte lenta da autenticidade.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            O Paradoxo Digital
          </h2>
<p>
            Redes sociais prometem conexão, mas entregam isolamento. Prometem liberdade, mas entregam 
            conformidade. Você está constantemente se comparando, se julgando, se otimizando para algoritmos.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Pressão Social Amplificada
          </h2>
<p>
            Seu "<link classname="text-primary hover:underline" href="/ansiedade"/>Mamute Interior" está em overdrive. Você é julgado por milhões. Seus erros são 
            permanentes. Sua vida é uma performance contínua.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Pensamento Pré-Fabricado
          </h2>
<p>
            Algoritmos determinam o que você pensa. Você está em uma bolha intelectual. Sua opinião é 
            formada por influenciadores, não por pensamento genuíno.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Recuperação
          </h2>
<p>
            Desconexão não é luxo. É necessidade. É um ato de liberdade. É você dizendo: "Minha 
            autenticidade importa mais que likes."
          </p>
<div classname="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 classname="text-xl font-semibold text-foreground mb-3">Recuperação de Burnout</h3>
<p classname="text-foreground mb-4">
              Ofereço atendimento especializado em burnout digital e desenvolvimento de autenticidade.
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
<p classname="text-sm text-muted-foreground">Recuperação emocional</p>
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
