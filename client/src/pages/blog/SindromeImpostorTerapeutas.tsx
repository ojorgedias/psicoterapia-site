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
  
  useEffect(() => {
    document.title = 'Síndrome do Impostor em Terapeutas - Psicoterapeuta Jorge Dias';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore a síndrome do impostor em terapeutas: como profissionais da saúde mental lidam com a sensação de inadequação.');
    }
  }, []);

  return (
    <Layout>
<div className="bg-background">
<Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Síndrome do Impostor" }]} /></div>
</Layout>
  );
}
