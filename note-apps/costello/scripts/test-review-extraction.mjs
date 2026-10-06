import { createServer } from 'vite';
const server = await createServer({ configFile: false, server: { middlewareMode: true, hmr: false, watch: null, ws: false }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
try { await server.ssrLoadModule('/tests/review-extraction.ts'); }
finally { await server.close(); }
