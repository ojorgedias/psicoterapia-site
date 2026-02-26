import { useEffect } from 'react';

interface EEATSchemaProps {
  pageType: 'home' | 'about' | 'service' | 'blog' | 'faq' | 'concept';
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function useEEATSchema(props: EEATSchemaProps) {
  useEffect(() => {
    // Remove existing schema if present
    const existingSchema = document.querySelector('script[data-eeat-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Create Person schema (Author/Expert)
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Jorge Dias',
      'jobTitle': 'Psychologist',
      'url': 'https://psicoterapia-site.com',
      'credential': 'CRP 08/31462',
      'knowsAbout': [
        'Clinical Psychology',
        'Existential Psychology',
        'Psychoanalysis',
        'Philosophy',
        'Spirituality Integration'
      ],
      'areaServed': [
        'BR',
        'Worldwide (Online)'
      ]
    };

    // Create MedicalWebPage schema for clinical content
    const medicalPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      'name': props.title,
      'description': props.description,
      'url': props.url,
      'author': {
        '@type': 'Person',
        'name': 'Jorge Dias',
        'credential': 'CRP 08/31462'
      },
      'reviewedBy': {
        '@type': 'Person',
        'name': 'Jorge Dias',
        'credential': 'CRP 08/31462'
      },
      'datePublished': props.datePublished || new Date().toISOString().split('T')[0],
      'dateModified': props.dateModified || new Date().toISOString().split('T')[0]
    };

    // Create appropriate schema based on page type
    let schema;
    if (props.pageType === 'blog' || props.pageType === 'service' || props.pageType === 'concept') {
      schema = medicalPageSchema;
    } else {
      schema = personSchema;
    }

    // Add schema to document
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-eeat-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const schemaScript = document.querySelector('script[data-eeat-schema]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [props]);
}

// LocalBusiness Schema for location-based SEO
export function useLocalBusinessSchema() {
  useEffect(() => {
    const existingSchema = document.querySelector('script[data-localbusiness-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Psicólogo Jorge Dias',
      'image': 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
      'description': 'Psicoterapia clínica para autoconhecimento profundo. Investigação filosófica e clínica rigorosa.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Presidente Epitácio',
        'addressLocality': 'Presidente Epitácio',
        'addressRegion': 'SP',
        'postalCode': '',
        'addressCountry': 'BR'
      },
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Presidente Epitácio'
        },
        {
          '@type': 'Country',
          'name': 'Brazil'
        },
        {
          '@type': 'Country',
          'name': 'Worldwide (Online)'
        }
      ],
      'priceRange': '$$',
      'url': 'https://psicoterapia-site.com',
      'knowsAbout': [
        'Clinical Psychology',
        'Psychotherapy',
        'Existential Psychology'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-localbusiness-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.querySelector('script[data-localbusiness-schema]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);
}
