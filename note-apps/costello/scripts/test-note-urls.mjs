import { createServer } from 'vite';

const server = await createServer({
  configFile: false,
  base: '/notes/costello/',
  server: { middlewareMode: true, hmr: false, watch: null, ws: false },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true, include: [] },
});
try { await server.ssrLoadModule('/tests/note-urls.ts'); }
finally { await server.close(); }
