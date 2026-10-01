import { marked } from 'marked';
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../plugins/', import.meta.url));
const destination = fileURLToPath(new URL('../../public/tools/skill-shelf/reader.json', import.meta.url));
const documents = {};
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
async function markdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, {withFileTypes:true})) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(filename));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(filename);
  }
  return files.sort();
}
const files = await markdownFiles(root);
const known = new Set(files.map(file => path.relative(root, file).split(path.sep).join('/')));
for (const file of files) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  const source = await readFile(file, 'utf8');
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const sourceURL = `https://github.com/RintaroMasaoka/RintaroMasaoka.github.io/blob/main/skill-shelf/plugins/${relative}`;
  const renderer = new marked.Renderer();
  renderer.html = (text) => escape(text);
  renderer.link = (href, title, text) => {
    const local = path.posix.normalize(path.posix.join(path.posix.dirname(relative), href.split('#')[0]));
    if (!/^[a-z][a-z0-9+.-]*:/i.test(href) && known.has(local)) {
      return `<a href="#" data-document="${escape(local)}">${text}</a>`;
    }
    const url = new URL(href, sourceURL);
    return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? `<a href="${escape(url.href)}">${text}</a>` : text;
  };
  const document = { html: marked.parse(body, {renderer}), source: sourceURL };
  documents[relative] = document;
  const match = relative.match(/^([^/]+)\/skills\/([^/]+)\/SKILL.md$/);
  if (match) documents[`${match[1]}:${match[2]}`] = document;
}
await mkdir(path.dirname(destination), {recursive:true});
await writeFile(destination, JSON.stringify(documents));
console.log(`Built Skill Shelf reader: ${files.length} Markdown documents.`);
