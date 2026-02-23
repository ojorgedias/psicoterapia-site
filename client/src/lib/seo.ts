/**
 * SEO Configuration and Meta Tags
 * Handles page-specific SEO metadata
 */

import { SITE_CONFIG, PSYCHOLOGIST, SEO_KEYWORDS } from "@/../../shared/const";

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "Psicoterapia Clínica Online - Jorge Dias",
    description:
      "Psicoterapia online e presencial focada em investigação filosófica, autoconhecimento profundo e desenvolvimento integral. Atendimento para adultos, casais e questões existenciais.",
    keywords: [...SEO_KEYWORDS.general, "psicoterapia clínica online"],
  },
  about: {
    title: "Sobre - Psicoterapia Clínica",
    description:
      "Conheça a abordagem clínica de Jorge Dias, psicólogo especializado em investigação profunda e pensamento integrativo.",
    keywords: ["psicólogo", "abordagem clínica", "autoconhecimento", "desenvolvimento pessoal"],
  },
  howItWorks: {
    title: "Como Funciona - Psicoterapia Clínica",
    description:
      "Entenda como funciona o processo terapêutico, modalidades de atendimento e frequência de sessões.",
    keywords: ["psicoterapia online", "sessões terapêuticas", "atendimento psicológico"],
  },
  contact: {
    title: "Contato - Agende Sua Consulta",
    description: `Entre em contato com ${PSYCHOLOGIST.name} para agendar sua primeira sessão de psicoterapia.`,
    keywords: ["contato psicólogo", "agendar consulta", "psicoterapia"],
  },
  blog: {
    title: "Blog - Artigos sobre Psicologia e Desenvolvimento Pessoal",
    description:
      "Leia artigos sobre psicologia clínica, filosofia, relacionamentos, desenvolvimento pessoal e pensamento integrativo.",
    keywords: ["blog psicologia", "artigos terapia", "desenvolvimento pessoal"],
  },
  crisisExistential: {
    title: "Psicoterapia para Crise Existencial e Falta de Propósito",
    description:
      "Investigação clínica para crise existencial, autossabotagem, regulação emocional e desenvolvimento de autonomia genuína.",
    keywords: [...SEO_KEYWORDS.adults, "crise existencial", "falta de propósito"],
  },
  selfSabotage: {
    title: "Tratamento para Autossabotagem e Padrões de Repetição",
    description:
      "Psicoterapia focada em identificar e transformar padrões de autossabotagem e ciclos destrutivos de repetição.",
    keywords: [...SEO_KEYWORDS.adults, "autossabotagem", "padrões de repetição"],
  },
  emotionalRegulation: {
    title: "Psicoterapia para Regulação Emocional e Ansiedade",
    description:
      "Trabalho clínico para regulação emocional, controle da ansiedade e desenvolvimento de uma relação saudável com as emoções.",
    keywords: [...SEO_KEYWORDS.adults, "regulação emocional", "controle de ansiedade"],
  },
  autonomyIdentity: {
    title: "Desenvolvimento de Autonomia e Identidade Inabalável",
    description:
      "Psicoterapia focada no desenvolvimento de uma identidade genuína e autonomia livre de lealdades invisíveis.",
    keywords: [...SEO_KEYWORDS.adults, "identidade", "autonomia"],
  },
  familyPatterns: {
    title: "Padrões Familiares e Lealdades Invisíveis",
    description:
      "Investigação de padrões familiares e lealdades invisíveis que moldam os relacionamentos atuais.",
    keywords: [...SEO_KEYWORDS.couples, "padrões familiares", "lealdades invisíveis"],
  },
  coupleConflicts: {
    title: "Resolução de Conflitos de Casal e Choque de Valores",
    description:
      "Psicoterapia de casal focada na resolução de conflitos, integração de polaridades e restabelecimento da comunicação.",
    keywords: [...SEO_KEYWORDS.couples, "conflitos de casal", "comunicação"],
  },
  relationshipPatterns: {
    title: "Transforme Seu Padrão de Relacionamento",
    description:
      "Supere ciclos destrutivos de relacionamento e construa relacionamentos saudáveis e autênticos.",
    keywords: [...SEO_KEYWORDS.couples, "padrões de relacionamento", "relacionamentos saudáveis"],
  },
  psychologySpirituality: {
    title: "Psicologia e Espiritualidade de Forma Integrativa",
    description:
      "Integração ética entre desenvolvimento psicológico e espiritual, sem bypassing ou alienação.",
    keywords: [...SEO_KEYWORDS.spirituality, "integração psicológica"],
  },
  integrativePhilosophy: {
    title: "Filosofia e Pensamento Integrativo",
    description:
      "Fundamentos filosóficos da abordagem clínica: Tese, Antítese e Síntese na transformação pessoal.",
    keywords: [...SEO_KEYWORDS.spirituality, "filosofia", "pensamento integrativo"],
  },
};

/**
 * Generate structured data for rich snippets
 */
export const generateProfessionalSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${PSYCHOLOGIST.name} - Psicoterapia Clínica`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: `+55${PSYCHOLOGIST.whatsapp}`,
    email: PSYCHOLOGIST.email,
    areaServed: ["BR"],
    priceRange: "$$",
    serviceType: "Psychotherapy",
    knowsAbout: [
      "Clinical Psychology",
      "Existential Psychology",
      "Family Therapy",
      "Couples Therapy",
      "Personal Development",
      "Integrative Philosophy",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Presidente Epitácio",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      `https://wa.me/${PSYCHOLOGIST.whatsapp}`,
      `mailto:${PSYCHOLOGIST.email}`,
    ],
  };
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: Array<{ label: string; url?: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.url ? `${SITE_CONFIG.url}${item.url}` : undefined,
    })),
  };
};

/**
 * Generate article schema for blog posts
 */
export const generateArticleSchema = (
  title: string,
  description: string,
  datePublished: string,
  readingTime: number
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: PSYCHOLOGIST.name,
    },
    datePublished: datePublished,
    timeRequired: `PT${readingTime}M`,
  };
};
