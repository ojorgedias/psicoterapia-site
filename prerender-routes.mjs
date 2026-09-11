import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  // Páginas reais do site
  "/",
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
