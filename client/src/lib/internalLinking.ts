/**
 * Internal Linking Strategy for SEO
 * This file defines strategic internal links to improve:
 * 1. Page authority distribution
 * 2. User navigation and engagement
 * 3. Keyword relevance and topical clustering
 * 4. Crawlability and indexation
 */

export const internalLinkingStrategy = {
  // Hub pages (high authority, link to many pages)
  hubs: {
    home: {
      path: '/',
      linksTo: [
        { path: '/servicos', anchor: 'Serviços' },
        { path: '/sobre', anchor: 'Minha Abordagem' },
        { path: '/blog', anchor: 'Blog' },
        { path: '/faq', anchor: 'FAQ' },
        { path: '/conceitos-fundamentais', anchor: 'Conceitos Fundamentais' },
      ],
    },
    services: {
      path: '/servicos',
      linksTo: [
        { path: '/terapia/adultos/crise-existencial', anchor: 'Crise Existencial' },
        { path: '/terapia/adultos/autossabotagem', anchor: 'Autossabotagem' },
        { path: '/terapia/casais/padroes-familiares', anchor: 'Padrões Familiares' },
        { path: '/autoridade/psicoterapia-espiritualidade', anchor: 'Psicoterapia e Espiritualidade' },
      ],
    },
    blog: {
      path: '/blog',
      linksTo: [
        { path: '/blog/autossabotagem-inconsciente', anchor: 'Autossabotagem Inconsciente' },
        { path: '/blog/padroes-familiares-relacionamentos', anchor: 'Padrões Familiares' },
        { path: '/blog/narcisismo-encoberto', anchor: 'Narcisismo Encoberto' },
        { path: '/blog/mae-narcisista-impacto-adulto', anchor: 'Mãe Narcisista' },
        { path: '/blog/medo-de-ser-feliz', anchor: 'Medo de Ser Feliz' },
      ],
    },
  },

  // Pillar pages (topic clusters)
  pillars: {
    selfSabotage: {
      mainPage: '/terapia/adultos/autossabotagem',
      relatedPages: [
        '/blog/autossabotagem-inconsciente',
        '/conceitos-fundamentais', // Links to shadow integration
        '/terapia/adultos/crise-existencial',
      ],
      keywords: ['autossabotagem', 'sombra', 'lealdades invisíveis', 'onipotência', 'impotência'],
    },
    familyPatterns: {
      mainPage: '/terapia/casais/padroes-familiares',
      relatedPages: [
        '/blog/padroes-familiares-relacionamentos',
        '/blog/mae-narcisista-impacto-adulto',
        '/conceitos-fundamentais', // Links to invisible loyalties
      ],
      keywords: ['padrões familiares', 'lealdades invisíveis', 'relacionamentos', 'dinâmicas familiares'],
    },
    existentialCrisis: {
      mainPage: '/terapia/adultos/crise-existencial',
      relatedPages: [
        '/conceitos-fundamentais', // Links to dialectics
        '/terapia/adultos/autonomia-identidade',
        '/autoridade/filosofia-integrativa',
      ],
      keywords: ['crise existencial', 'dialética', 'desenvolvimento pessoal', 'autenticidade'],
    },
    psychologySpirituality: {
      mainPage: '/autoridade/psicoterapia-espiritualidade',
      relatedPages: [
        '/blog/integracao-psicoterapia-espiritualidade',
        '/blog/spiritual-bypass',
        '/conceitos-fundamentais',
      ],
      keywords: ['psicoterapia espiritualidade', 'integração', 'desenvolvimento espiritual', 'spiritual bypass'],
    },
  },

  // Contextual linking recommendations
  contextualLinks: {
    // When mentioning autossabotage, link to:
    autossabotage: [
      { text: 'Autossabotagem Inconsciente', path: '/blog/autossabotagem-inconsciente' },
      { text: 'Serviço de Autossabotagem', path: '/terapia/adultos/autossabotagem' },
      { text: 'Sombra e Integração', path: '/conceitos-fundamentais' },
    ],

    // When mentioning family patterns, link to:
    familyPatterns: [
      { text: 'Padrões Familiares', path: '/terapia/casais/padroes-familiares' },
      { text: 'Lealdades Invisíveis', path: '/conceitos-fundamentais' },
      { text: 'Artigo: Padrões Familiares', path: '/blog/padroes-familiares-relacionamentos' },
    ],

    // When mentioning existential crisis, link to:
    existentialCrisis: [
      { text: 'Crise Existencial', path: '/terapia/adultos/crise-existencial' },
      { text: 'Dialética Hegeliana', path: '/conceitos-fundamentais' },
      { text: 'Autonomia e Identidade', path: '/terapia/adultos/autonomia-identidade' },
    ],

    // When mentioning shadow, link to:
    shadow: [
      { text: 'Conceitos Fundamentais', path: '/conceitos-fundamentais' },
      { text: 'Autossabotagem', path: '/blog/autossabotagem-inconsciente' },
    ],

    // When mentioning invisible rules, link to:
    invisibleRules: [
      { text: 'Conceitos Fundamentais', path: '/conceitos-fundamentais' },
      { text: 'Padrões Familiares', path: '/terapia/casais/padroes-familiares' },
    ],

    // When mentioning spirituality, link to:
    spirituality: [
      { text: 'Psicoterapia e Espiritualidade', path: '/autoridade/psicoterapia-espiritualidade' },
      { text: 'Spiritual Bypass', path: '/blog/spiritual-bypass' },
      { text: 'Integração', path: '/conceitos-fundamentais' },
    ],
  },

  // SEO recommendations
  seoRecommendations: [
    {
      title: 'Create topic clusters',
      description: 'Group related content around pillar pages to establish topical authority',
      priority: 'high',
    },
    {
      title: 'Add breadcrumb navigation',
      description: 'Helps users and search engines understand site structure',
      priority: 'high',
    },
    {
      title: 'Optimize anchor text',
      description: 'Use descriptive, keyword-rich anchor text for internal links',
      priority: 'medium',
    },
    {
      title: 'Create related posts section',
      description: 'Add "Related Content" sections to blog posts and service pages',
      priority: 'medium',
    },
    {
      title: 'Build content hub',
      description: 'Create a comprehensive guide page that links to all related content',
      priority: 'medium',
    },
  ],
};

/**
 * Get contextual links for a given topic
 */
export function getContextualLinks(topic: keyof typeof internalLinkingStrategy.contextualLinks) {
  return internalLinkingStrategy.contextualLinks[topic] || [];
}

/**
 * Get pillar page information for a topic
 */
export function getPillarPage(topic: keyof typeof internalLinkingStrategy.pillars) {
  return internalLinkingStrategy.pillars[topic];
}
