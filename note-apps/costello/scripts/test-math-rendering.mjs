import { createServer } from 'vite';
const server = await createServer({ configFile: false, server: { middlewareMode: true, hmr: false, watch: null, ws: false }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
try {
  await server.ssrLoadModule('/tests/math-rendering.tsx');
} finally {
  await server.close();
}
