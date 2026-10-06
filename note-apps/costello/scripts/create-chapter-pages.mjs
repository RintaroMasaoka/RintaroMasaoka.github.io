import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const noteRoot = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(readFileSync(resolve(noteRoot, 'note.config.json'), 'utf8'));
const outDir = resolve(noteRoot, '../../public/notes/costello');
const html = readFileSync(resolve(outDir, 'index.html'), 'utf8');

// GitHub Pages serves a real index file on direct chapter visits and reloads.
// Vite's absolute asset URLs retain the note's base at every directory depth.
for (const chapter of config.chapters) {
  if (!/^[a-z0-9-]+$/.test(chapter.id)) throw new Error(`Invalid chapter ID: ${chapter.id}`);
  const chapterDir = resolve(outDir, chapter.id);
  mkdirSync(chapterDir, { recursive: true });
  writeFileSync(resolve(chapterDir, 'index.html'), html);
}
console.log(`Created ${config.chapters.length} static chapter entries.`);
