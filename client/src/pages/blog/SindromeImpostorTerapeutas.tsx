import { Link } from 'wouter';
import { updatePageMeta } from '@/lib/seoMetadata';
import { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';
import { Clock, ArrowRight } from 'lucide-react';
import { useBlogPostingSchema } from '@/components/SEOSchema';
import { getBlogPostMetadata } from '@/lib/blogPostingSchema';

export default function SindromeImpostorTerapeutas() {
  useEffect(() => {
    updatePageMeta('sindromeimpostorterapeutas');
  }, []);

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
  
  useEffect(() => {
    document.title = 'Síndrome do Impostor em Terapeutas - Psicólogo Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore a síndrome do impostor em terapeutas: como profissionais da saúde mental lidam com a sensação de inadequação.');
    }
  }, []);

  return (
    <Layout>
    <div className="bg-background">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: '<Link href="/blog/sindrome-impostor" className="text-primary hover:underline">Síndrome do Impostor</Link> em Terapeutas' }]} />

      <article className="container max-w-3xl py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Síndrome do Impostor em Psicólogos e Terapeutas
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min de leitura</span>
            </div>
            <span>23 de fevereiro de 2026</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            O paradoxo do terapeuta: você ajuda outras pessoas a superar inseguranças, mas você mesmo 
            duvida de sua competência. Você tem 10 anos de experiência, mas ainda pensa: "Será que sou 
            bom mesmo? Será que estou enganando meus clientes?"
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Por Que Terapeutas Têm <Link href="/blog/sindrome-impostor" className="text-primary hover:underline">Síndrome do Impostor</Link>?
          </h2>

          <h3 className="text-xl font-semibold text-primary mt-6"><Link href="/autossabotagem" className="text-primary hover:underline">Autossabotagem</Link> Profissional</h3>
          <p>
            Você aprendeu que ser competente era perigoso. Talvez seus pais se sentissem ameaçados por 
            seu sucesso. Agora, você sabota sua própria credibilidade.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Pressão de Perfeição</h3>
          <p>
            Você é um "curador". Espera-se que você tenha tudo resolvido. Qualquer vulnerabilidade é 
            vista como incompetência.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-6">Medo do Julgamento</h3>
          <p>
            Seus clientes o julgam. Seus colegas o julgam. Você está constantemente sendo avaliado. 
            Seu <Link href="/ansiedade" className="text-primary hover:underline">Mamute Interior</Link> está em alerta máximo.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Autenticidade Como Ferramenta Clínica
          </h2>
          <p>
            Paradoxalmente, sua vulnerabilidade é sua maior força. Quando você é autêntico sobre suas 
            próprias lutas, você se torna mais efetivo como terapeuta.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8">
            Integração
          </h2>
          <p>
            Você é competente. Seus clientes melhoram porque você é bom no que faz. Sua dúvida não 
            invalida sua expertise.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">Para Profissionais de Saúde Mental</h3>
            <p className="text-foreground mb-4">
              Ofereço atendimento especializado para terapeutas e psicólogos que lidam com síndrome do 
              impostor e <Link href="/autossabotagem" className="text-primary hover:underline">autossabotagem</Link> profissional.
            </p>
            <CTAButton whatsapp>Agendar Sessão</CTAButton>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">Leitura Relacionada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/autossabotagem-inconsciente">
              <a className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Autossabotagem Inconsciente
                </h4>
                <p className="text-sm text-muted-foreground">Raízes e libertação</p>
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
    </Layout>
  );
}
