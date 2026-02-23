/**
 * Content Structure for Psicoterapia Clínica Site
 * Organized by clusters and article categories
 */

export interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
  route: string;
  cluster: string;
  order: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  route: string;
  readingTime: number;
  category: string;
  order: number;
}

export interface InternalLink {
  text: string;
  route: string;
}

// Institutional Pages
export const institutionalPages: Page[] = [
  {
    id: "home",
    title: "Psicoterapia Clínica Online",
    slug: "home",
    description: "Atendimento psicológico online focado em autoconhecimento profundo, filosofia e pensamento integrativo",
    route: "/",
    cluster: "institutional",
    order: 1,
  },
  {
    id: "about",
    title: "Sobre",
    slug: "sobre",
    description: "Conheça a abordagem clínica e a formação do psicólogo",
    route: "/sobre",
    cluster: "institutional",
    order: 2,
  },
  {
    id: "how-it-works",
    title: "Como Funciona",
    slug: "como-funciona",
    description: "Entenda o processo de atendimento e as modalidades disponíveis",
    route: "/como-funciona",
    cluster: "institutional",
    order: 3,
  },
  {
    id: "contact",
    title: "Contato",
    slug: "contato",
    description: "Formulário de contato e agendamento de sessões",
    route: "/contato",
    cluster: "institutional",
    order: 4,
  },
];

// Cluster 1: Terapia para Adultos
export const cluster1Pages: Page[] = [
  {
    id: "crisis-existential",
    title: "Psicoterapia Online para Crise Existencial e Falta de Propósito",
    slug: "crise-existencial",
    description: "Investigação clínica para quem se sente perdido, sem propósito ou em transição dolorosa",
    route: "/terapia/adultos/crise-existencial",
    cluster: "adults",
    order: 1,
  },
  {
    id: "self-sabotage",
    title: "Tratamento Psicológico Online para Autossabotagem e Padrões de Repetição",
    slug: "autossabotagem",
    description: "Desconstruir ciclos repetitivos e restaurar a agência pessoal",
    route: "/terapia/adultos/autossabotagem",
    cluster: "adults",
    order: 2,
  },
  {
    id: "emotional-regulation",
    title: "Psicoterapia para Regulação Emocional: Ansiedade, Exagero e Distanciamento",
    slug: "regulacao-emocional",
    description: "Trabalho clínico rigoroso para equilibrar emoção e razão",
    route: "/terapia/adultos/regulacao-emocional",
    cluster: "adults",
    order: 3,
  },
  {
    id: "autonomy-identity",
    title: "Autonomia e Identidade Inabaláveis",
    slug: "autonomia-identidade",
    description: "Desenvolvimento de uma bússola interna genuína e autêntica",
    route: "/terapia/adultos/autonomia-identidade",
    cluster: "adults",
    order: 4,
  },
];

// Cluster 2: Terapia para Casais
export const cluster2Pages: Page[] = [
  {
    id: "family-patterns",
    title: "Padrões Familiares e Lealdades Invisíveis",
    slug: "padroes-familiares",
    description: "Compreender como a história familiar molda os relacionamentos atuais",
    route: "/terapia/casais/padroes-familiares",
    cluster: "couples",
    order: 1,
  },
  {
    id: "couple-conflicts",
    title: "Resolução de Conflitos de Casal e Choque de Valores",
    slug: "conflitos-casal",
    description: "Restabelecer diálogo e integração em relacionamentos polarizados",
    route: "/terapia/casais/conflitos-casal",
    cluster: "couples",
    order: 2,
  },
  {
    id: "relationship-patterns",
    title: "Transforme o Seu Padrão de Relacionamento",
    slug: "padroes-relacionamento",
    description: "Superar rompimentos dolorosos e evitar ciclos destrutivos",
    route: "/terapia/casais/padroes-relacionamento",
    cluster: "couples",
    order: 3,
  },
];

// Cluster 3: Terapia para Jovens (placeholder - content to be extracted)
export const cluster3Pages: Page[] = [
  {
    id: "youth-1",
    title: "Psicoterapia para Adolescentes",
    slug: "adolescentes",
    description: "Atendimento especializado para jovens em transição",
    route: "/terapia/jovens/adolescentes",
    cluster: "youth",
    order: 1,
  },
];

// Cluster 4: Autoridade/Aprofundamento
export const cluster4Pages: Page[] = [
  {
    id: "psychology-spirituality",
    title: "Psicologia e Espiritualidade de Forma Integrativa",
    slug: "psicologia-espiritualidade",
    description: "Integração ética entre desenvolvimento psicológico e espiritual",
    route: "/autoridade/psicologia-espiritualidade",
    cluster: "authority",
    order: 1,
  },
  {
    id: "integrative-philosophy",
    title: "Filosofia e Pensamento Integrativo",
    slug: "filosofia-integrativa",
    description: "Fundamentos filosóficos da abordagem clínica",
    route: "/autoridade/filosofia-integrativa",
    cluster: "authority",
    order: 2,
  },
];

// Blog Articles
export const blogArticles: Article[] = [
  {
    id: "article-1",
    title: "Ansiedade ou Intuição? Entendendo os sinais do corpo além do diagnóstico",
    slug: "ansiedade-ou-intuicao",
    description: "Como diferenciar o medo patológico da intuição real e resgatar sua bússola interna",
    route: "/blog/ansiedade-ou-intuicao",
    readingTime: 6,
    category: "emotional-regulation",
    order: 1,
  },
  {
    id: "article-2",
    title: "A Sombra nos Relacionamentos: O que o comportamento do outro diz sobre você",
    slug: "sombra-relacionamentos",
    description: "Como a projeção psicológica destrói casais e como recolher suas próprias sombras",
    route: "/blog/sombra-relacionamentos",
    readingTime: 7,
    category: "couples",
    order: 2,
  },
  {
    id: "article-3",
    title: "Fobia Social e a Necessidade de Aprovação: A biologia do medo da rejeição",
    slug: "fobia-social",
    description: "Entenda o 'Mamute Interior' e como atualizar seu sistema mental ancestral",
    route: "/blog/fobia-social",
    readingTime: 8,
    category: "emotional-regulation",
    order: 3,
  },
  {
    id: "article-4",
    title: "O Narcisismo na Era Digital: Transtorno real ou adaptação cultural?",
    slug: "narcisismo-era-digital",
    description: "Além do diagnóstico: como a economia da atenção molda comportamentos",
    route: "/blog/narcisismo-era-digital",
    readingTime: 9,
    category: "digital-culture",
    order: 4,
  },
  {
    id: "article-5",
    title: "Burnout Digital e Vício em Celular: Como os algoritmos estão moldando os seus valores",
    slug: "burnout-digital",
    description: "A terceirização do pensamento e como recuperar sua autonomia mental",
    route: "/blog/burnout-digital",
    readingTime: 8,
    category: "digital-culture",
    order: 5,
  },
  {
    id: "article-6",
    title: "Guerra dos Sexos e Polarização: A morte do diálogo nos relacionamentos",
    slug: "guerra-sexos",
    description: "Como a polarização extrema destrói casais e como atingir a Síntese",
    route: "/blog/guerra-sexos",
    readingTime: 9,
    category: "couples",
    order: 6,
  },
  {
    id: "article-7",
    title: "Despertar Espiritual Sem Religião: O Perigo da Fuga Através do Misticismo",
    slug: "despertar-espiritual",
    description: "Evitar o bypassing espiritual e integrar psicologia com espiritualidade",
    route: "/blog/despertar-espiritual",
    readingTime: 8,
    category: "spirituality",
    order: 7,
  },
  {
    id: "article-8",
    title: "Síndrome do Impostor e Insegurança: Por que assumir a ignorância é a verdadeira cura",
    slug: "sindrome-impostor",
    description: "A Técnica do Manto da Ignorância e o resgate da verdadeira autoconfiança",
    route: "/blog/sindrome-impostor",
    readingTime: 7,
    category: "professional-development",
    order: 8,
  },
];

// Helper functions for internal linking
export const getLinkByRoute = (route: string): InternalLink | null => {
  const allPages = [
    ...institutionalPages,
    ...cluster1Pages,
    ...cluster2Pages,
    ...cluster3Pages,
    ...cluster4Pages,
  ];
  const allContent = [...allPages, ...blogArticles];
  const page = allContent.find((p) => p.route === route);
  return page ? { text: page.title, route: page.route } : null;
};

export const getRelatedArticles = (currentArticleId: string, count: number = 3): Article[] => {
  const current = blogArticles.find((a) => a.id === currentArticleId);
  if (!current) return [];

  return blogArticles
    .filter((a) => a.id !== currentArticleId && a.category === current.category)
    .slice(0, count);
};

export const getAllPages = (): Page[] => [
  ...institutionalPages,
  ...cluster1Pages,
  ...cluster2Pages,
  ...cluster3Pages,
  ...cluster4Pages,
];

export const getPageByRoute = (route: string): Page | undefined => {
  return getAllPages().find((p) => p.route === route);
};

export const getArticleByRoute = (route: string): Article | undefined => {
  return blogArticles.find((a) => a.route === route);
};
