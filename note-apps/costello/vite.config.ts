import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import {fileURLToPath} from 'node:url';
import {readFileSync, realpathSync} from 'node:fs';
import {resolve} from 'node:path';
const noteRoot = fileURLToPath(new URL('.', import.meta.url));
// Shared dependencies can resolve outside the note root; permit only KaTeX's assets.
const katexAssets = realpathSync(fileURLToPath(new URL('node_modules/katex/dist', import.meta.url)));
// Keep fonts with the stylesheet so an already-open note does not need to
// contact the development server when a new mathematical glyph is encountered.
const embeddedKatex = {
  name: 'embedded-katex-fonts',
  enforce: 'pre' as const,
  resolveId(id: string) {
    if (id === 'katex/dist/katex.min.css') return '\0costello-katex.css';
  },
  load(id: string) {
    if (id !== '\0costello-katex.css') return;
    const css = readFileSync(resolve(katexAssets, 'katex.min.css'), 'utf8');
    return css.replace(/src:url\((fonts\/[^)]+\.woff2)\)[^;}]+/g, (_, font: string) => {
      const data = readFileSync(resolve(katexAssets, font)).toString('base64');
      return `src:url("data:font/woff2;base64,${data}") format("woff2")`;
    });
  },
};
export default defineConfig({
  base: '/notes/costello/',
  plugins: [embeddedKatex, react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: { alias: { '@': noteRoot } },
  server: { watch: { usePolling: true }, fs: { allow: [noteRoot, katexAssets] } },
  build: { outDir: '../../public/notes/costello', emptyOutDir: true },
});
