import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const astroRequire = createRequire(require.resolve('astro'));
const mathRequire = createRequire(require.resolve('rehype-katex'));
const htmlRequire = createRequire(mathRequire.resolve('hast-util-from-html-isomorphic'));
const parserRequire = createRequire(htmlRequire.resolve('hast-util-from-html'));
const {parseFragment, serialize} = await import(parserRequire.resolve('parse5'));
const {createHighlighter} = await import(astroRequire.resolve('shiki'));
const highlighter = await createHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: ['python', 'javascript', 'typescript', 'json', 'bash', 'html', 'css', 'latex'],
});
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const aliases = {py:'python', js:'javascript', ts:'typescript', sh:'bash', shell:'bash', tex:'latex'};
const labels = {python:'Python', javascript:'JavaScript', typescript:'TypeScript', json:'JSON', bash:'Shell', html:'HTML', css:'CSS', latex:'LaTeX', text:'Text'};

/** Applied after final composition, covering Markdown, Astro widgets and previews alike. */
export function decorateCodeBlocks(html) {
  if (!/<pre\b/i.test(html)) return html;
  const tree = parseFragment(html);
  function visit(parent) {
    for (let i = 0; i < (parent.childNodes || []).length; i++) {
      const node = parent.childNodes[i];
      if ((attr(node, 'class') || '').split(/\s+/).includes('note-code')) continue;
      const code = node.tagName === 'pre' && node.childNodes?.find(n => n.tagName === 'code');
      if (!code || /\b(?:language-math|math-display)\b/.test(attr(code, 'class') || '')) { visit(node); continue; }
      const raw = attr(node, 'data-code-language') || attr(node, 'data-language') || (attr(code, 'class') || '').match(/language-([\w+-]+)/)?.[1] || 'text';
      const language = aliases[raw] || raw;
      const source = text(code);
      const highlighted = highlighter.getLoadedLanguages().includes(language)
        ? highlighter.codeToHtml(source, {lang:language, themes:{light:'github-light',dark:'github-dark'}})
        : `<pre><code>${source.split('\n').map(line => `<span class="line">${escape(line)}</span>`).join('\n')}</code></pre>`;
      const pre = parseFragment(highlighted).childNodes[0];
      const generatedCode = pre.childNodes.find(n => n.tagName === 'code');
      // Retain source/worker hooks and accessibility attributes; discard the old highlighter's colors.
      for (const a of node.attrs || []) if (!['class','style','data-code-language'].includes(a.name)) pre.attrs.push(a);
      for (const a of code.attrs || []) if (!['class','style'].includes(a.name)) generatedCode.attrs.push(a);
      pre.attrs = pre.attrs.filter(a => !['style','tabindex','aria-label'].includes(a.name));
      pre.attrs.push({name:'tabindex',value:'0'}, {name:'aria-label',value:`${labels[language] || language} code`});
      const label = labels[language] || language;
      const wrapper = parseFragment(`<figure class="note-code" data-code-language="${escape(language)}"><figcaption class="note-code-toolbar"><span>${escape(label)}</span><button type="button" data-code-copy aria-label="Copy ${escape(label)} code">Copy</button></figcaption></figure>`).childNodes[0];
      wrapper.childNodes.push(pre); pre.parentNode = wrapper;
      wrapper.parentNode = parent; parent.childNodes[i] = wrapper;
    }
  }
  visit(tree);
  return serialize(tree);
}
