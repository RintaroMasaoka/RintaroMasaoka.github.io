import { noteMathOptions } from './note-math.mjs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const mathRequire = createRequire(require.resolve('rehype-katex'));
const htmlRequire = createRequire(mathRequire.resolve('hast-util-from-html-isomorphic'));
const parserRequire = createRequire(htmlRequire.resolve('hast-util-from-html'));
const { parseFragment, serialize } = await import(parserRequire.resolve('parse5'));
const katex = mathRequire('katex');
const hasClass = (node, name) => node.attrs?.some(a => a.name === 'class' && a.value.split(/\s+/).includes(name));
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const find = (node, predicate) => predicate(node) ? node : (node.childNodes || []).map(n => find(n, predicate)).find(Boolean);

/** Assign display numbers after the whole manuscript, including disclosures, is composed.
 * Source tags identify equations; displayed numbers never depend on those tag values.
 */
export function numberEquations(html) {
  const tree = parseFragment(html), equations = [], numbers = new Map();
  function collect(node) {
    if (hasClass(node, 'katex-display')) {
      const annotation = find(node, n => n.tagName === 'annotation');
      const tex = annotation && text(annotation), key = tex?.match(/\\tag\{([^}]+)\}/)?.[1];
      if (key) {
        if (numbers.has(key)) throw new Error(`Duplicate note equation key: ${key}`);
        const number = String(numbers.size + 1);
        numbers.set(key, number); equations.push({ node, tex, key, number });
      }
      return;
    }
    for (const child of node.childNodes || []) collect(child);
  }
  collect(tree);
  for (const { node, tex, key, number } of equations) {
    const replacement = parseFragment(katex.renderToString(tex.replace(/\\tag\{([^}]+)\}/, `\\tag{${number}}`), { ...noteMathOptions, displayMode: true, throwOnError: true })).childNodes[0];
    // Re-rendering the number replaces the earlier rehype layout as well.
    // Keep the formula in its own scrollport and the tag outside that scrollport.
    const visible = find(replacement, n => hasClass(n, 'katex-html'));
    const tag = visible?.childNodes.find(n => hasClass(n, 'tag'));
    if (tag) {
      visible.attrs.find(a => a.name === 'class').value += ' numbered-equation';
      const body = parseFragment('<span class="equation-body" tabindex="0"></span>').childNodes[0];
      body.childNodes = visible.childNodes.filter(n => n !== tag);
      for (const child of body.childNodes) child.parentNode = body;
      visible.childNodes = [body, tag];
      body.parentNode = visible;
    }
    replacement.attrs.push({ name: 'id', value: `eq-${key}` }, { name: 'data-equation-key', value: key }, { name: 'data-equation-number', value: number });
    const parent = node.parentNode;
    parent.childNodes[parent.childNodes.indexOf(node)] = replacement;
    replacement.parentNode = parent;
  }
  function references(node) {
    // Preserve formulas (e.g. f(0)), figure lettering, code and source citations.
    if (hasClass(node, 'katex') || hasClass(node, 'katex-display') || ['a','code','pre','svg','script','style'].includes(node.tagName)) return;
    if (node.nodeName === '#text') node.value = node.value.replace(/\(@([a-zA-Z][\w:-]*)\)|\((\d+(?:\.\d+)?[a-z]?)\)/g, (original, explicit, legacy) => {
      const key = explicit || legacy;
      if (explicit && !numbers.has(key)) throw new Error(`Unknown note equation reference: ${key}`);
      return numbers.has(key) ? `(${numbers.get(key)})` : original;
    });
    for (const child of node.childNodes || []) references(child);
  }
  references(tree);
  return serialize(tree);
}
