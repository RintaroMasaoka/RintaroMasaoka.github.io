import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const mathRequire = createRequire(require.resolve('rehype-katex'));
const htmlRequire = createRequire(mathRequire.resolve('hast-util-from-html-isomorphic'));
const parserRequire = createRequire(htmlRequire.resolve('hast-util-from-html'));
const { parseFragment, serialize } = await import(parserRequire.resolve('parse5'));

// Mark only explicit authored references, before the shared numbering pass.
export function decorateReferences(html) {
  const tree = parseFragment(html);
  function walk(node) {
    if (node.attrs?.some(a => a.name === 'class' && /\bkatex(?:-display)?\b/.test(a.value)) || ['a','code','pre','svg','script','style','button'].includes(node.tagName)) return;
    for (const child of [...(node.childNodes || [])]) {
      if (child.nodeName === '#text' && /\(@[a-zA-Z][\w:-]*\)/.test(child.value)) {
        const safe = child.value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
        const marked = safe.replace(/\(@([a-zA-Z][\w:-]*)\)/g, '<button type="button" class="equation-reference" data-reference-key="$1" aria-expanded="false" aria-controls="reader-preview">(@$1)</button>');
        const replacements = parseFragment(marked).childNodes;
        replacements.forEach(n => n.parentNode = node);
        node.childNodes.splice(node.childNodes.indexOf(child), 1, ...replacements);
      } else walk(child);
    }
  }
  walk(tree);
  return serialize(tree);
}
