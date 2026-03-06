import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  "/terapia/adultos/crise-existencial",
  "/terapia/adultos/autossabotagem",
  "/terapia/adultos/regulacao-emocional",
  "/terapia/adultos/autonomia-identidade",
  "/terapia/casais/padroes-familiares",
  "/terapia/casais/conflitos-casal",
  "/terapia/casais/padroes-relacionamento",
  "/autossabotagem",
  "/padroes-familiares",
  "/crise-existencial",
  "/ansiedade",
  "/narcisismo",
  "/servicos",
  "/sobre",
  "/contato",
  "/blog",
  "/faq",
  "/conceitos-fundamentais",
];

const distDir = resolve(__dirname, 'dist');
const indexHtml = resolve(distDir, 'index.html');

try {
  const htmlContent = readFileSync(indexHtml, 'utf-8');

  ROUTES.forEach(route => {
    const routePath = resolve(distDir, route.substring(1));
    mkdirSync(routePath, { recursive: true });
    writeFileSync(resolve(routePath, 'index.html'), htmlContent);
    console.log(`✓ Pré-renderizado: ${route}`);
  });

  console.log(`\n✓ Total de rotas pré-renderizadas: ${ROUTES.length}`);
} catch (error) {
  console.error('Erro ao pré-renderizar rotas:', error.message);
  process.exit(1);
}
