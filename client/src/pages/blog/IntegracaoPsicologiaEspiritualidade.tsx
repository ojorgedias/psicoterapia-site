import { Link } from 'wouter';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function IntegracaoPsicologiaEspiritualidade() {
  const readingTime = 14;
  const metadata = getBlogPostMetadata('integracao-psicologia-espiritualidade');
  
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
<Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "IntegracaoPsicologiaEspiritualidade" }]} />
<article className="container max-w-3xl py-12 md:py-20">
<div className="mb-8">
<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Integração Psicologia e Espiritualidade: Abordagem Pragmática
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
            A evolução da experiência humana caminha lado a lado com a evolução do que é chamado de 
            espiritual. Mas integração genuína não significa misturar conceitos. Significa usar psicologia 
            clínica como base para compreender fenômenos espirituais.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Integração é Necessária?
          </h2>
<p>
            Porque muitos problemas "espirituais" têm raízes psicológicas. Um bloqueio espiritual pode ser 
            trauma não processado. Uma dificuldade em práticas espirituais pode ser <Link className="text-primary hover:underline" href="/autossabotagem">autossabotagem.</Link> Uma 
            "noite escura da alma" pode ser <Link className="text-primary hover:underline" href="/depressao-vs-crise-existencial">depressão.</Link>
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Psicologia Clínica Como Base
          </h2>
<p>
            Jung, Freud, teoria do trauma - esses conceitos não são opostos à espiritualidade. Eles são 
            ferramentas para compreender a psique humana. Eles permitem que você diferencie entre intuição 
            genuína e projeção psicológica.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Fenômenos Espirituais Através de Lente Psicológica
          </h2>
<h3 className="text-xl font-semibold text-primary mt-6">Experiências Místicas</h3>
<p>
            Não são menos reais porque têm correlatos neurobiológicos. A neurobiologia não invalida a 
            experiência. Ela a explica.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">Comunicação Espiritual</h3>
<p>
            Pode ser genuína. Mas também pode ser projeção, desejo, ou até dissociação. Discernimento 
            psicológico é essencial.
          </p>
<h3 className="text-xl font-semibold text-primary mt-6">Práticas Espirituais</h3>
<p>
            Podem ser transformadoras. Mas também podem ser usadas para evitar crescimento psicológico 
            (<Link className="text-primary hover:underline" href="/blog/spiritual-bypass">spiritual</Link> bypass).
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
<Link className="text-primary hover:underline" href="/autossabotagem">Autossabotagem</Link> em Práticas Espirituais
          </h2>
<p>
            Você medita mas não consegue manter a prática? Você estuda esoterismo mas não consegue 
            integrar? Você pode estar sabotando seu próprio desenvolvimento espiritual por razões 
            psicológicas.
          </p>
<p className="bg-primary/10 border-l-4 border-primary p-4 italic">
<strong>Leia também:</strong> Nosso artigo sobre{' '}
            <Link className="text-primary hover:underline" href="/blog/autossabotagem-inconsciente">autossabotagem</Link> inconsciente{' '}
            para entender como isso se manifesta.
          </p>
<h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Ética e Responsabilidade
          </h2>
<p>
            Integração genuína inclui responsabilidade profissional. Normalização de busca por ajuda 
            psicológica quando necessário. Transparência sobre riscos e contraindicações.
          </p>
<div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
<h3 className="text-xl font-semibold text-foreground mb-3">Integração Genuína</h3>
<p className="text-foreground mb-4">
              Ofereço atendimento especializado em integração psicologia-espiritualidade pragmática, 
              com foco em crescimento genuíno sem <Link className="text-primary hover:underline" href="/blog/spiritual-bypass">spiritual</Link> bypass.
            </p>
<CTAButton whatsapp="">Agendar Sessão</CTAButton>
</div>
</div>
<div className="mt-16 pt-8 border-t border-border">
<h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<Link href="/blog/spiritual-bypass"></Link>
<a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
<Link className="text-primary hover:underline" href="/blog/spiritual-bypass">Spiritual</Link> Bypass
                </h4>
<p className="text-sm text-muted-foreground">Quando espiritualidade evita crescimento</p>
<div className="flex items-center gap-2 text-primary mt-2 text-sm">
<span>Ler artigo</span>
<ArrowRight size="{16}" />
</div>
</a>
<Link href="/autoridade/filosofia-integrativa"></Link>
<a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Serviço: Filosofia Integrativa
                </h4>
<p className="text-sm text-muted-foreground">Abordagem clínica especializada</p>
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
