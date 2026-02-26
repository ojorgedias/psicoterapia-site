export const seoMetadata = {
  home: {
    title: 'Psicólogo Jorge Dias | Psicoterapia Clínica',
    description: 'Psicoterapia clínica especializada em crise existencial, autossabotagem e padrões familiares. Atendimento online e presencial em Presidente Epitácio.',
    keywords: 'psicólogo, psicoterapia, crise existencial, autossabotagem, padrões familiares',
  },
  about: {
    title: 'Minha Abordagem - Psicólogo Jorge Dias | Psicoterapia Clínica',
    description: 'Conheça a abordagem filosófica e clínica de Jorge Dias. Integração de psicologia, filosofia e antropologia para autoconhecimento genuíno e desenvolvimento autêntico.',
    keywords: 'psicoterapia clínica, abordagem filosófica, psicologia integrativa, desenvolvimento pessoal',
  },
  faq: {
    title: 'FAQ - Psicólogo Jorge Dias | Perguntas Frequentes sobre Psicoterapia',
    description: 'Perguntas frequentes sobre psicoterapia clínica, autossabotagem, padrões familiares, crise existencial e desenvolvimento pessoal. Respostas profundas baseadas em filosofia, psicologia e antropologia.',
    keywords: 'psicoterapia, perguntas frequentes, autossabotagem, padrões familiares, crise existencial',
  },
  conceitos: {
    title: 'Conceitos Fundamentais - Psicólogo Jorge Dias | Dialética, Mediação e Arqueologia Pessoal',
    description: 'Entenda os conceitos fundamentais da abordagem de Jorge Dias: dialética hegeliana, subjetivação pela mediação, arqueologia pessoal de pressupostos, sombra e lealdades invisíveis.',
    keywords: 'dialética, mediação, arqueologia pessoal, sombra, lealdades invisíveis, psicologia',
  },
  blog: {
    title: 'Blog - Psicólogo Jorge Dias | Artigos sobre Psicoterapia e Desenvolvimento Pessoal',
    description: 'Artigos profundos sobre psicoterapia clínica, autossabotagem, padrões familiares, narcisismo, relacionamentos e integração psicologia-espiritualidade.',
    keywords: 'blog psicologia, artigos terapia, autossabotagem, narcisismo, relacionamentos',
  },
  services: {
    title: 'Serviços - Psicólogo Jorge Dias | Terapia para Adultos e Casais',
    description: 'Serviços de psicoterapia clínica: terapia para adultos (crise existencial, autossabotagem, regulação emocional), terapia para casais e integração psicologia-espiritualidade.',
    keywords: 'terapia para adultos, terapia para casais, psicoterapia clínica, crise existencial',
  },
  contact: {
    title: 'Contato - Psicólogo Jorge Dias | Agende sua Sessão',
    description: 'Entre em contato com o psicólogo Jorge Dias para agendar sua sessão. Atendimento online para todo o Brasil e presencial em Presidente Epitácio - SP.',
    keywords: 'contato psicólogo, agendar sessão, psicoterapia online',
  },
  crisisExistential: {
    title: 'Crise Existencial - Psicólogo Jorge Dias | Terapia Especializada',
    description: 'Terapia especializada em crise existencial. Quando a estrutura anterior se torna insuportável e você precisa reconstruir de forma autêntica.',
    keywords: 'crise existencial, terapia existencial, desenvolvimento pessoal, psicoterapia',
  },
  selfSabotage: {
    title: 'Autossabotagem - Psicólogo Jorge Dias | Investigação Clínica',
    description: 'Investigação clínica de autossabotagem: compreenda as raízes psicológicas, lealdades invisíveis e dinâmicas de onipotência/impotência.',
    keywords: 'autossabotagem, psicologia, terapia, lealdades invisíveis, sombra',
  },
  familyPatterns: {
    title: 'Padrões Familiares - Psicólogo Jorge Dias | Terapia para Casais',
    description: 'Terapia especializada em padrões familiares e lealdades invisíveis. Como estruturas familiares continuam governando seu comportamento na vida adulta.',
    keywords: 'padrões familiares, lealdades invisíveis, terapia casal, relacionamentos',
  },
  autossabotagemBlog: {
    title: 'Autossabotagem Inconsciente - Psicólogo Jorge Dias | Blog',
    description: 'Artigo profundo sobre autossabotagem: manifestação da sombra, dinâmicas de onipotência/impotência, lealdades invisíveis e integração psicológica.',
    keywords: 'autossabotagem, sombra, lealdades invisíveis, psicologia, Jung',
  },
};

export function updatePageMeta(page: keyof typeof seoMetadata) {
  const meta = seoMetadata[page];
  
  // Update title
  document.title = meta.title;
  
  // Update meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', meta.description);
  
  // Update meta keywords
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (!keywordsMeta) {
    keywordsMeta = document.createElement('meta');
    keywordsMeta.setAttribute('name', 'keywords');
    document.head.appendChild(keywordsMeta);
  }
  keywordsMeta.setAttribute('content', meta.keywords);
  
  // Update OG tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', meta.title);
  
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', meta.description);
}
