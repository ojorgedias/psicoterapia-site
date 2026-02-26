/**
 * BlogPosting Schema Data for all blog articles
 * Used with useBlogPostingSchema hook from SEOSchema.tsx
 */

export interface BlogPostMetadata {
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  keywords: string[];
}

export const blogPostsMetadata: Record<string, BlogPostMetadata> = {
  'autossabotagem-inconsciente': {
    slug: 'autossabotagem-inconsciente',
    headline: 'Autossabotagem Inconsciente: A Manifestação da Sombra e Dinâmicas de Onipotência/Impotência',
    description: 'Investigação clínica profunda sobre autossabotagem: compreenda as raízes psicológicas, lealdades invisíveis, dinâmicas de onipotência/impotência e como integrar essas partes de si mesmo.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-01-15',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['autossabotagem', 'sombra', 'lealdades invisíveis', 'psicologia', 'Jung', 'onipotência', 'impotência'],
  },
  'padroes-familiares-relacionamentos': {
    slug: 'padroes-familiares-relacionamentos',
    headline: 'Padrões Familiares em Relacionamentos: Como Estruturas Invisíveis Governam Suas Escolhas',
    description: 'Explore como padrões familiares se entrelaçam com dinâmicas sociais e continuam operando automaticamente na vida adulta, afetando seus relacionamentos e escolhas.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-01-20',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['padrões familiares', 'lealdades invisíveis', 'relacionamentos', 'dinâmicas familiares', 'terapia casal'],
  },
  'mae-narcisista-impacto-adulto': {
    slug: 'mae-narcisista-impacto-adulto',
    headline: 'Mãe Narcisista: Como o Impacto na Infância Reverbera na Vida Adulta',
    description: 'Análise profunda sobre narcisismo materno: entenda os mecanismos psicológicos, as lealdades invisíveis criadas e como trabalhar a integração na terapia.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-02-01',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['narcisismo', 'mãe narcisista', 'trauma', 'relacionamento materno', 'psicologia'],
  },
  'medo-de-ser-feliz': {
    slug: 'medo-de-ser-feliz',
    headline: 'Medo de Ser Feliz: A Lealdade Invisível ao Sofrimento Familiar',
    description: 'Investigação sobre por que algumas pessoas sabotam sua própria felicidade: lealdades invisíveis, culpa, e como trabalhar a renegociação consciente desses compromissos.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-02-10',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['medo', 'felicidade', 'lealdades invisíveis', 'culpa', 'psicologia'],
  },
  'narcisismo-encoberto': {
    slug: 'narcisismo-encoberto',
    headline: 'Narcisismo Encoberto: Quando a Vulnerabilidade é uma Máscara',
    description: 'Entenda as dinâmicas do narcisismo encoberto: como funciona, como se diferencia do narcisismo óbvio, e as implicações clínicas para terapia.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-02-15',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['narcisismo', 'narcisismo encoberto', 'vulnerabilidade', 'máscara', 'psicologia'],
  },
  'integracao-psicologia-espiritualidade': {
    slug: 'integracao-psicologia-espiritualidade',
    headline: 'Integração Psicologia-Espiritualidade: Além do Spiritual Bypass',
    description: 'Como integrar desenvolvimento psicológico e espiritual de forma pragmática e rigorosa, evitando armadilhas comuns como spiritual bypass e espiritualidade como fuga.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-02-20',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['psicologia', 'espiritualidade', 'integração', 'spiritual bypass', 'desenvolvimento'],
  },
  'spiritual-bypass': {
    slug: 'spiritual-bypass',
    headline: 'Spiritual Bypass: Quando a Espiritualidade Vira Fuga',
    description: 'Análise crítica do spiritual bypass: como práticas espirituais podem ser usadas para evitar lidar com dinâmicas psicológicas não resolvidas.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-02-25',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['spiritual bypass', 'espiritualidade', 'psicologia', 'meditação', 'desenvolvimento'],
  },
  'ansiedade-mamute-interior': {
    slug: 'ansiedade-mamute-interior',
    headline: 'Ansiedade e o Mamute Interior: Medo Social Ancestral em Tempos Modernos',
    description: 'Compreenda a ansiedade através da lente do "Mamute Interior": como o medo social ancestral continua operando em contextos modernos e como trabalhar isso.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028909256/AGWHGezmmLvubdcQ.png',
    datePublished: '2024-03-01',
    dateModified: '2026-02-25',
    author: 'Jorge Dias',
    keywords: ['ansiedade', 'medo social', 'mamute interior', 'psicologia evolutiva', 'trauma'],
  },
};

/**
 * Get BlogPosting schema metadata for a specific article
 */
export function getBlogPostMetadata(slug: string): BlogPostMetadata | null {
  return blogPostsMetadata[slug] || null;
}

/**
 * Get all blog post metadata
 */
export function getAllBlogPostsMetadata(): BlogPostMetadata[] {
  return Object.values(blogPostsMetadata);
}
