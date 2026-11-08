// The specialized figure adapter composes one manuscript. Split only after the
// common equation pass so chapter boundaries never change numbers or identities.
import { createRequire } from 'node:module';
import { numberEquations } from '../../../src/utils/note-equations.mjs';
const require = createRequire(`${process.cwd()}/package.json`);
const mathRequire = createRequire(require.resolve('rehype-katex'));
const htmlRequire = createRequire(mathRequire.resolve('hast-util-from-html-isomorphic'));
const parserRequire = createRequire(htmlRequire.resolve('hast-util-from-html'));
const { parseFragment, serialize } = await import(parserRequire.resolve('parse5'));
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const walk = (node, fn) => { fn(node); for (const child of node.childNodes || []) walk(child, fn); };
const inner = nodes => serialize({nodeName:'#document-fragment', childNodes:nodes});
const clean = html => {
  const tree = parseFragment(html);
  walk(tree, node => { if (node.attrs) node.attrs = node.attrs.filter(a => a.name !== 'id'); });
  return serialize(tree);
};
export function chapterPage(raw, note, chapterId, headings) {
  const sourceTree = parseFragment(raw);
  function markReferences(node) {
    if (['a','button','code','pre','svg','script','style'].includes(node.tagName) || (attr(node,'class')||'').split(/\s+/).includes('katex')) return;
    if (!node.childNodes) return;
    node.childNodes = node.childNodes.flatMap(child => {
      if (child.nodeName !== '#text') { markReferences(child); return [child]; }
      if (!/\(@[a-zA-Z][\w:-]*\)/.test(child.value)) return [child];
      const html = child.value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\(@([a-zA-Z][\w:-]*)\)/g,
        (match,key) => `<button type="button" class="equation-reference" data-reference-key="${key}" aria-label="Preview equation">${match}</button>`);
      const nodes = parseFragment(html).childNodes; for (const n of nodes) n.parentNode = node; return nodes;
    });
  }
  markReferences(sourceTree);
  // The original manuscript's endnotes belong to the classical chapters.
  // Number them before the adopted chapters, then distribute them to their
  // owning pages below. This preserves the established equation identities
  // and numbers without assigning any display numbers in the manuscript.
  const extension = note.chapters.find(chapter => chapter.file !== 'full.md');
  if (extension) {
    const notes = sourceTree.childNodes.filter(node => node.tagName === 'section' && attr(node, 'data-footnotes') !== undefined);
    sourceTree.childNodes = sourceTree.childNodes.filter(node => !notes.includes(node));
    const boundary = sourceTree.childNodes.findIndex(node => node.tagName === 'h2' && text(node).startsWith(`${extension.section}. `));
    if (boundary < 0) throw Error('Missing adopted KdV chapter boundary');
    sourceTree.childNodes.splice(boundary, 0, ...notes);
  }
  const tree = parseFragment(numberEquations(serialize(sourceTree)));
  const chapters = note.chapters.map(chapter => ({...chapter, nodes:[]}));
  let index = -1, footnotes;
  for (const node of tree.childNodes) {
    if (node.tagName === 'section' && attr(node, 'data-footnotes') !== undefined) { footnotes = node; continue; }
    if (node.tagName === 'h2' && (/^\d+\./.test(text(node)) || text(node) === '参考文献')) {
      index++;
      if (!chapters[index]) throw Error('Unexpected KdV chapter boundary');
      // Historical heading aliases immediately precede their canonical heading.
      if (index) {
        const previous = chapters[index-1].nodes, pending = [];
        while (previous.length && (attr(previous.at(-1), 'data-kdv-heading-alias') !== undefined || previous.at(-1).nodeName === '#text' && !text(previous.at(-1)).trim())) pending.unshift(previous.pop());
        chapters[index].nodes.push(...pending);
      }
    }
    if (index < 0 && text(node).trim()) throw Error('Content precedes the KdV introduction');
    if (index >= 0) chapters[index].nodes.push(node);
  }
  if (index !== chapters.length-1) throw Error('KdV configuration and manuscript chapters disagree');
  for (const chapter of chapters) {
    const title = chapter.nodes.find(n => n.tagName === 'h2');
    title.tagName = title.nodeName = 'h1';
  }
  const owner = new Map(), equations = new Map();
  const allFootnotes = new Map();
  if (footnotes) walk(footnotes, n => { if(n.tagName==='li' && attr(n,'id')) { n.attrs.push({name:'value',value:String(allFootnotes.size+1)}); allFootnotes.set(attr(n,'id'),n); } });
  for (const chapter of chapters) {
    const ids = new Set();
    for (const node of chapter.nodes) walk(node,n=>{ const href=attr(n,'href'); if(href?.startsWith('#') && allFootnotes.has(href.slice(1))) ids.add(href.slice(1)); });
    if (ids.size) {
      const section = structuredClone(footnotes);
      walk(section,n=>{ if(n.tagName==='ol') n.childNodes=n.childNodes.filter(child=>child.tagName==='li' && ids.has(attr(child,'id'))); });
      chapter.nodes.push(section);
      for (const id of ids) if (!owner.has(id)) owner.set(id,chapter.href);
    }
  }
  for (const chapter of chapters) for (const node of chapter.nodes) walk(node, n => {
    const id = attr(n, 'id'); if (id) owner.set(id, chapter.href);
    const key = attr(n, 'data-equation-key'), number = attr(n, 'data-equation-number');
    if (key) { equations.set(key,{title:`Equation (${number})`,html:clean(inner([n])),href:`${chapter.href}#${id}`}); }
  });
  // Materialize equation previews before splitting: references to earlier chapters
  // remain usable without loading those chapters into the browser document.
  for (const chapter of chapters) {
    const localIds = new Set(); for(const node of chapter.nodes) walk(node,n=>{if(attr(n,'id'))localIds.add(attr(n,'id'));});
    function rewrite(node) {
      for (const child of node.childNodes || []) rewrite(child);
      const key = attr(node,'data-reference-key');
      if (key && equations.has(key)) node.attrs.find(a=>a.name==='aria-label').value = `Preview ${equations.get(key).title.toLowerCase()}`;
      const href=attr(node,'href');
      if(href?.startsWith('#')) {
        let id;try{id=decodeURIComponent(href.slice(1));}catch{return;}
        if(!localIds.has(id)&&owner.has(id))node.attrs.find(a=>a.name==='href').value=owner.get(id)+href;
      }
    }
    for(const node of chapter.nodes)rewrite(node);
    chapter.html=inner(chapter.nodes);
    chapter.headings=headings.filter(h=>h.depth > 2 && localIds.has(h.id));
    const usedKeys=new Set([...chapter.html.matchAll(/data-reference-key="([^"]+)"/g)].map(m=>m[1]));
    chapter.equationIndex=Object.fromEntries([...equations].filter(([key])=>usedKeys.has(key)));
  }
  const active=chapters.find(c=>c.id===chapterId);
  if(!active)throw Error(`Unknown KdV chapter: ${chapterId}`);
  return {...active,anchorRoutes:Object.fromEntries(owner)};
}
