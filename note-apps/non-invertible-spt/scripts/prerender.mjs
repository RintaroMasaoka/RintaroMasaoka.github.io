import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const config = JSON.parse(await readFile('note.config.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('Prerender requires a fresh Vite build; run build before rerunning this script.');
}
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const server = await createServer({ server: { middlewareMode: true, hmr: false, watch: null, ws: false }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
try {
  const { NotesReader } = await server.ssrLoadModule('/app/page.tsx');
  const { siteBasePath } = await server.ssrLoadModule('/lib/site-path.ts');
  if (siteBasePath !== (process.env.VITE_SITE_BASE_PATH || '').replace(/\/$/, '')) {
    throw new Error(`SSR base path mismatch: ${siteBasePath}`);
  }
  for (const chapter of config.chapters) {
    const body = renderToString(createElement(NotesReader, { initialId: chapter.id }));
    const html = template.replace('<div id="root"></div>', '<div id="root">' + body + '</div>')
      .replace(/<title>.*?<\/title>/s, '<title>' + escape(chapter.plainTitle + ' | ' + config.title) + '</title>')
      .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + escape(chapter.plainDescription) + '">');
    await mkdir('dist/' + chapter.id, { recursive: true });
    await writeFile('dist/' + chapter.id + '/index.html', html);
    if (chapter === config.chapters[0]) await writeFile('dist/index.html', html);
  }
  console.log('Prerendered routes: ' + config.chapters.map(chapter => '/' + chapter.id).join(', '));
} finally { await server.close(); }
