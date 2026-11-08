// Input is the reader's already-rendered HTML. Keep SVG definitions and their
// references together while giving each inserted preview its own namespace.
let serial = 0;
const urlAttributes = new Set([
 'clip-path', 'mask', 'fill', 'stroke', 'filter', 'marker',
 'marker-start', 'marker-mid', 'marker-end', 'cursor',
]);

// Respect quotes so a literal '>' (or id-looking text) stays inside its value.
// This parses rendered markup for ID relocation, not for sanitization.
function tokenize(html) {
 const parts = [];
 let start = 0, index = 0;
 while (index < html.length) {
  if (html[index] !== '<') { index++; continue; }
  if (index > start) parts.push({text: html.slice(start, index)});
  const tagStart = index++;
  if (html.startsWith('!--', index)) {
   const end = html.indexOf('-->', index + 3);
   index = end < 0 ? html.length : end + 3;
  } else {
   let quote = '';
   while (index < html.length) {
    const char = html[index++];
    if (quote) { if (char === quote) quote = ''; }
    else if (char === '"' || char === "'") quote = char;
    else if (char === '>') break;
   }
  }
  const text = html.slice(tagStart, index);
  const match = /^<(\/?)\s*([a-z][\w:-]*)\b/i.exec(text);
  parts.push({text, name: match?.[2].toLowerCase(), closing: match?.[1] === '/',
   selfClosing: /\/\s*>$/.test(text), attributes: match && !match[1] ? attributes(text, match[0].length) : []});
  start = index;
 }
 if (start < html.length) parts.push({text: html.slice(start)});
 return parts;
}

function attributes(tag, index) {
 const result = [];
 while (index < tag.length) {
  const start = index;
  while (/\s/.test(tag[index] ?? '') && index < tag.length) index++;
  if (index >= tag.length || tag[index] === '>' || tag[index] === '/') break;
  const nameStart = index;
  while (index < tag.length && !/[\s=/>]/.test(tag[index])) index++;
  const name = tag.slice(nameStart, index).toLowerCase();
  if (!name) break;
  while (index < tag.length && /\s/.test(tag[index])) index++;
  let valueStart, valueEnd;
  if (tag[index] === '=') {
   index++;
   while (index < tag.length && /\s/.test(tag[index])) index++;
   const quote = tag[index] === '"' || tag[index] === "'" ? tag[index++] : '';
   valueStart = index;
   while (index < tag.length && (quote ? tag[index] !== quote : !/[\s>]/.test(tag[index]))) index++;
   valueEnd = index;
   if (quote && tag[index] === quote) index++;
  }
  result.push({name, start, end: index, valueStart, valueEnd});
 }
 return result;
}

function rewrite(part, ids) {
 let text = part.text;
 // Reverse offsets preserve all spelling, spacing and unrelated attribute values.
 for (const attr of [...(part.attributes ?? [])].reverse()) {
  if (!ids && attr.name === 'id') {
   text = text.slice(0, attr.start) + text.slice(attr.end);
   continue;
  }
  if (!ids || attr.valueStart === undefined) continue;
  const value = text.slice(attr.valueStart, attr.valueEnd);
  let replacement = value;
  if (attr.name === 'id') replacement = ids.get(value) ?? value;
  else if (attr.name === 'href' || attr.name === 'xlink:href') {
   if (value.startsWith('#') && ids.has(value.slice(1))) replacement = '#' + ids.get(value.slice(1));
  } else if (urlAttributes.has(attr.name)) {
   replacement = value.replace(/url\(\s*(["']?)#([^\s)"']+)\1\s*\)/g,
    (all, quote, id) => ids.has(id) ? all.replace('#' + id, '#' + ids.get(id)) : all);
  }
  if (replacement !== value) text = text.slice(0, attr.valueStart) + replacement + text.slice(attr.valueEnd);
 }
 return text;
}

function namespaceSvg(parts, prefix) {
 const ids = new Map();
 for (const part of parts) for (const attr of part.attributes ?? []) {
  if (attr.name === 'id' && attr.valueStart !== undefined) {
   const id = part.text.slice(attr.valueStart, attr.valueEnd);
   ids.set(id, prefix + id);
  }
 }
 return parts.map(part => rewrite(part, ids)).join('');
}

export function preparePreviewMarkup(html) {
 const prefix = `reader-preview-${++serial}-`;
 let depth = 0, svg = [], result = '', diagram = 0;
 for (const part of tokenize(String(html))) {
  if (part.name === 'svg' && !part.closing && !part.selfClosing) depth++;
  if (depth || (part.name === 'svg' && !part.closing)) {
   svg.push(part);
   if (part.name === 'svg' && part.closing) depth--;
   if (depth === 0) {
    result += namespaceSvg(svg, `${prefix}${++diagram}-`);
    svg = [];
   }
  } else result += rewrite(part);
 }
 // Rendered SVG is balanced; failing closed here avoids inserting a partial view.
 if (depth) throw new Error('Unclosed SVG in reference preview');
 return result;
}
