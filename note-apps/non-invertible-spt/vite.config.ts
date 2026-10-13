import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import note from './note.config.json';
const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({
  base: process.env.VITE_SITE_BASE_PATH ? process.env.VITE_SITE_BASE_PATH.replace(/\/$/, '') + '/' : '/',
  plugins: [react(), { name: 'note-metadata', transformIndexHtml(html) {
    return html.replaceAll('__LANG__', note.language).replaceAll('__SITE_TITLE__', escape(note.title))
      .replaceAll('__SITE_DESCRIPTION__', escape(note.description)).replaceAll('__THEME_KEY__', note.id + '-theme');
  } }],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  cacheDir: '.cache/vite',
  server: { host: '127.0.0.1', fs: { allow: ['.'] } },
  build: { outDir: 'dist', emptyOutDir: true },
});
