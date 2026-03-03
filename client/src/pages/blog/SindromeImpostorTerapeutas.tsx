import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function SindromeImpostorTerapeutas() {
  const readingTime = 11;
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
  
  useEffect(() =&gt; {
    document.title = 'Síndrome do Impostor em Terapeutas - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore a síndrome do impostor em terapeutas: como profissionais da saúde mental lidam com a sensação de inadequação.');
    }
  }, []);

  return (
    <layout>
<div classname="bg-background">
<breadcrumbs '="" '<link="" 'blog',="" blog'="" classname="text-primary hover:underline" href="/blog/sindrome-impostor" href:="" items="{[{" label:="" {="" },="">Síndrome do Impostor em Terapeutas' }]} /&gt;

      <article classname="container max-w-3xl py-12 md:py-20">
<div classname="mb-8">
<h1 classname="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Síndrome do Impostor em Psicólogos e Terapeutas
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
            O paradoxo do terapeuta: você ajuda outras pessoas a superar inseguranças, mas você mesmo 
            duvida de sua competência. Você tem 10 anos de experiência, mas ainda pensa: "Será que sou 
            bom mesmo? Será que estou enganando meus clientes?"
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Terapeutas Têm <link classname="text-primary hover:underline" href="/blog/sindrome-impostor"/>Síndrome do Impostor?
          </h2>
<h3 classname="text-xl font-semibold text-primary mt-6"><link classname="text-primary hover:underline" href="/autossabotagem"/>Autossabotagem Profissional</h3>
<p>
            Você aprendeu que ser competente era perigoso. Talvez seus pais se sentissem ameaçados por 
            seu sucesso. Agora, você sabota sua própria credibilidade.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Pressão de Perfeição</h3>
<p>
            Você é um "curador". Espera-se que você tenha tudo resolvido. Qualquer vulnerabilidade é 
            vista como incompetência.
          </p>
<h3 classname="text-xl font-semibold text-primary mt-6">Medo do Julgamento</h3>
<p>
            Seus clientes o julgam. Seus colegas o julgam. Você está constantemente sendo avaliado. 
            Seu <link classname="text-primary hover:underline" href="/ansiedade"/>Mamute Interior está em alerta máximo.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Autenticidade Como Ferramenta Clínica
          </h2>
<p>
            Paradoxalmente, sua vulnerabilidade é sua maior força. Quando você é autêntico sobre suas 
            próprias lutas, você se torna mais efetivo como terapeuta.
          </p>
<h2 classname="text-2xl font-display font-bold text-foreground mt-8">
            Integração
          </h2>
<p>
            Você é competente. Seus clientes melhoram porque você é bom no que faz. Sua dúvida não 
            invalida sua expertise.
          </p>
<div classname="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 classname="text-xl font-semibold text-foreground mb-3">Para Profissionais de Saúde Mental</h3>
<p classname="text-foreground mb-4">
              Ofereço atendimento especializado para terapeutas e psicólogos que lidam com síndrome do 
              impostor e <link classname="text-primary hover:underline" href="/autossabotagem"/>autossabotagem profissional.
            </p>
<ctabutton whatsapp="">Agendar Sessão</ctabutton>
</div>
</div>
<div classname="mt-16 pt-8 border-t border-border">
<h3 classname="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div classname="grid grid-cols-1 md:grid-cols-2 gap-4">
<link href="/blog/autossabotagem-inconsciente"/>
<a classname="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 classname="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Autossabotagem Inconsciente
                </h4>
<p classname="text-sm text-muted-foreground">Raízes e libertação</p>
<div classname="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Ler artigo</span>
<arrowright size="{16}"></arrowright>
</div>
</a>
</div>
</div>
</article>
</breadcrumbs></div>
</layout>
  );
}
