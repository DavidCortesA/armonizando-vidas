import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = path.join(projectRoot, 'dist');
const entryPoint = path.join(distDirectory, 'index.html');
const routes = [
  'aviso-de-privacidad',
  'banco-de-alimentos',
  'mujeres-de-valor',
  'orquestas-del-rey',
];

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = path.join(distDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(entryPoint, path.join(routeDirectory, 'index.html'));
  }),
);

console.log(`Created static fallbacks for ${routes.length} application routes.`);
