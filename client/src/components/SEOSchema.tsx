import { useEffect } from 'react';

interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  image: string;
  priceRange: string;
  areaServed: string[];
  knowsAbout: string[];
}

interface FAQSchema {
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

interface BlogPostingSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': 'Person';
    name: string;
  };
}

export function useLocalBusinessSchema(data: LocalBusinessSchema) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'PsychologistOrTherapist',
      name: data.name,
      description: data.description,
      url: data.url,
      telephone: data.telephone,
      email: data.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
      image: data.image,
      priceRange: data.priceRange,
      areaServed: data.areaServed.map(area => ({
        '@type': 'Place',
        name: area,
      })),
      knowsAbout: data.knowsAbout,
      sameAs: [
        'https://www.instagram.com/jorgediaspsicologia',
        'https://www.linkedin.com/in/jorgediaspsicologia',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
}

export function useFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);
}

export function useBlogPostingSchema(data: BlogPostingSchema) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: data.headline,
      description: data.description,
      image: data.image,
      datePublished: data.datePublished,
      dateModified: data.dateModified,
      author: {
        '@type': 'Person',
        name: data.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Psicólogo Jorge Dias',
        logo: {
          '@type': 'ImageObject',
          url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
        },
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
}: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Ensure robots meta tag is set to index, follow (CRITICAL FIX)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow');

    // CRITICAL FIX: Remove all existing canonical tags first to avoid duplicates
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(tag => tag.remove());
    
    // Add single canonical tag
    if (canonical) {
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonical);
      document.head.appendChild(canonicalLink);
    }

    // Update OG image
    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImage);
    }
  }, [title, description, canonical, ogImage]);

  return null;
}
