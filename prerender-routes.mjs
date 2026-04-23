import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  // Main Pages
  "/",
  "/servicos",
  "/sobre",
  "/contato",
  "/blog",
  "/faq",
  "/conceitos-fundamentais",
  
  // Pillar Pages for Long-Tail SEO
  "/autossabotagem",
  "/padroes-familiares",
  "/crise-existencial",
  "/ansiedade",
  "/narcisismo",
  
  // Cluster 1: Terapia para Adultos
  "/terapia/adultos/crise-existencial",
  "/terapia/adultos/autossabotagem",
  "/terapia/adultos/regulacao-emocional",
  "/terapia/adultos/autonomia-identidade",
  
  // Cluster 2: Terapia para Casais
  "/terapia/casais/padroes-familiares",
  "/terapia/casais/conflitos-casal",
  "/terapia/casais/padroes-relacionamento",
  
  // Cluster 4: Autoridade
  "/autoridade/psicoterapia-espiritualidade",
  "/autoridade/filosofia-integrativa",
  
  // Original Blog Articles
  "/blog/ansiedade-ou-intuicao",
  "/blog/sombra-relacionamentos",
  "/blog/fobia-social",
  "/blog/narcisismo-era-digital",
  "/blog/burnout-digital-original",
  "/blog/guerra-sexos",
  "/blog/despertar-espiritual",
  "/blog/sindrome-impostor-original",
  
  // New SEO-Optimized Blog Articles
  "/blog/autossabotagem-inconsciente",
  "/blog/padroes-familiares-relacionamentos",
  "/blog/narcisismo-encoberto",
  "/blog/mae-narcisista-impacto-adulto",
  "/blog/medo-de-ser-feliz",
  "/blog/burnout-digital",
  "/blog/sindrome-impostor-terapeutas",
  "/blog/spiritual-bypass",
  "/blog/integracao-psicoterapia-espiritualidade",
  
  // Long-Tail SEO Articles - Autossabotagem Cluster
  "/sabotagem-relacionamento",
  "/por-que-desisto-tudo",
  "/sintomas-autossabotagem-trabalho",
  "/preguica-vs-autossabotagem",
  
  // Long-Tail SEO Articles - Ansiedade Cluster
  "/fobia-social",
  "/ataque-panico",
  "/terapia-online-ansiedade",
  "/ansiedade-domingo-noite",
  
  // Long-Tail SEO Articles - Crise Existencial Cluster
  "/crise-existencial-30-anos",
  "/depressao-vs-crise-existencial",
  "/vida-perde-sentido",
  "/crise-identidade-profissional",
  
  // Long-Tail SEO Articles - Narcisismo Cluster
  "/narcisismo-era-digital",
  "/parceiro-narcisismo-oculto",
  "/recuperar-autoestima-narcisista",
  "/egoismo-vs-narcisismo",
  
  // Long-Tail SEO Articles - Padrões Familiares Cluster
  "/quebrar-ciclos-familiares",
  "/culpa-afastar-familia",
  "/repeticao-padroes-familiares",
  "/maes-imaturas",
  
  // Legal Pages
  "/politica-privacidade",
  "/termos-uso",
];

const distDir = resolve(__dirname, 'dist');
const indexHtml = resolve(distDir, 'index.html');

try {
  const htmlContent = readFileSync(indexHtml, 'utf-8');

  ROUTES.forEach(route => {
    const routePath = resolve(distDir, route === "/" ? "" : route.substring(1));
    
    if (route === "/") {
      // Skip root - already exists as index.html
      console.log(`✓ Pré-renderizado: ${route} (root)`);
    } else {
      mkdirSync(routePath, { recursive: true });
      writeFileSync(resolve(routePath, 'index.html'), htmlContent);
      console.log(`✓ Pré-renderizado: ${route}`);
    }
  });

  console.log(`\n✓ Total de rotas pré-renderizadas: ${ROUTES.length}`);
} catch (error) {
  console.error('Erro ao pré-renderizar rotas:', error.message);
  process.exit(1);
}
