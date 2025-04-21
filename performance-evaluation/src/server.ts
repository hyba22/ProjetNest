import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Solution hybride pour tous les environnements
const getDirname = () => {
  try {
    return dirname(fileURLToPath(import.meta.url)); // ESM
  } catch {
    return __dirname; // CommonJS (fallback)
  }
};

const serverDistFolder = getDirname();
const browserDistFolder = resolve(serverDistFolder, '../browser');
