// Adapt chapter Markdown to the existing single-manuscript KdV composition.
import { createRequire } from 'node:module';
const require = createRequire(`${process.cwd()}/package.json`);
const mathRequire = createRequire(require.resolve('rehype-katex'));
const htmlRequire = createRequire(mathRequire.resolve('hast-util-from-html-isomorphic'));
const parserRequire = createRequire(htmlRequire.resolve('hast-util-from-html'));
const { parseFragment, serialize } = await import(parserRequire.resolve('parse5'));
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const walk = (node, fn) => { fn(node); for (const child of node.childNodes || []) walk(child, fn); };
const inner = node => serialize({ nodeName: '#document-fragment', childNodes: node.childNodes });
const textNode = (value, parentNode) => ({ nodeName: '#text', value, parentNode });

export function prepareFieldTheoryChapter(html, chapter) {
  if (!chapter?.id || !/^\d+$/.test(String(chapter.section)) || typeof chapter.title !== 'string') {
    throw new Error('Field-theory chapter requires id, numeric section and title');
  }
  const tree = parseFragment(html), nodes = [], ids = new Map();
  walk(tree, node => {
    if (!/^h[1-6]$/.test(node.tagName || '')) return;
    const id = attr(node, 'id');
    if (!id || ids.has(id)) throw new Error('Field-theory headings require unique rendered IDs');
    if (node.tagName === 'h6') throw new Error('Field-theory h6 cannot be shifted to a valid HTML heading');
    ids.set(id, `${chapter.id}-${id}`);
    nodes.push(node);
  });
  if (nodes.filter(node => node.tagName === 'h1').length !== 1 || nodes[0]?.tagName !== 'h1') {
    throw new Error('Field-theory chapter requires one initial h1');
  }
  let subsection = 0;
  for (const node of nodes) {
    const level = Number(node.tagName.slice(1));
    node.attrs.find(a => a.name === 'id').value = ids.get(attr(node, 'id'));
    node.tagName = node.nodeName = `h${level + 1}`;
    if (level === 1) node.childNodes = [textNode(`${chapter.section}. ${chapter.title}`, node)];
    if (level === 2) node.childNodes.unshift(textNode(`${chapter.section}.${++subsection}. `, node));
  }
  walk(tree, node => {
    const href = attr(node, 'href');
    if (!href?.startsWith('#')) return;
    let id;
    try { id = decodeURIComponent(href.slice(1)); } catch { return; }
    if (ids.has(id)) node.attrs.find(a => a.name === 'href').value = `#${ids.get(id)}`;
  });
  return {
    html: serialize(tree),
    headings: nodes.map(node => ({
      id: attr(node, 'id'), depth: Number(node.tagName.slice(1)),
      labelHtml: inner(node), href: `#${attr(node, 'id')}`,
    })),
  };
}

export function insertFieldTheoryBeforeReferences(html, additionsHtml) {
  const tree = parseFragment(html);
  const boundaries = tree.childNodes.filter(node => node.tagName === 'h2' && text(node).trim() === '参考文献');
  const boundary = boundaries[0];
  if (boundaries.length !== 1 || tree.childNodes.slice(tree.childNodes.indexOf(boundary) + 1).some(node => node.tagName === 'h2')) {
    throw new Error('Expected one final top-level KdV bibliography boundary');
  }
  const additions = parseFragment(additionsHtml).childNodes;
  for (const node of additions) node.parentNode = tree;
  tree.childNodes.splice(tree.childNodes.indexOf(boundary), 0, ...additions);
  return serialize(tree);
}
