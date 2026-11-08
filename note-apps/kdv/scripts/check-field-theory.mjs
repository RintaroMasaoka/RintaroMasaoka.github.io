import assert from 'node:assert/strict';
import { prepareFieldTheoryChapter, insertFieldTheoryBeforeReferences } from './field-theory.mjs';
import { chapterPage } from './chapter-pages.mjs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const katex = createRequire(require.resolve('rehype-katex'))('katex');

const source = `<h1 id="root">Original title</h1>
<h2 id="common" data-topic="keep">A <em>subsection</em></h2>
<p><a href="#common">Local</a> <a href="#%E5%9B%BA%E6%9C%89">Encoded</a> <a href="#eq-energy">Equation</a> <a href="/other/#common">Other page</a></p>
<h3 id="detail">Detail</h3><h2 id="固有">Second</h2>
<div id="eq-energy" data-equation-key="energy" data-equation-number="42">formula</div>
<div data-extra-visual="field-calculator"></div><!-- program-marker -->`;
const a = prepareFieldTheoryChapter(source, { id: 'field', section: '6', title: 'Field & theory' });
const b = prepareFieldTheoryChapter(source, { id: 'quantum', section: '7', title: 'Quantum' });
assert.match(a.html, /<h2 id="field-root">6\. Field &amp; theory<\/h2>/);
assert.match(a.html, /<h3 id="field-common" data-topic="keep">6\.1\. A <em>subsection<\/em><\/h3>/);
assert.match(a.html, /<h4 id="field-detail">Detail<\/h4>/);
assert.match(a.html, /<h3 id="field-固有">6\.2\. Second<\/h3>/);
assert.match(a.html, /href="#field-common"/);
assert.match(a.html, /href="#field-固有"/);
assert.match(a.html, /href="\/other\/#common"/);
assert.match(a.html, /href="#eq-energy"/);
assert.match(a.html, /id="eq-energy" data-equation-key="energy" data-equation-number="42"/);
assert.match(a.html, /<div data-extra-visual="field-calculator"><\/div><!-- program-marker -->/);
assert.deepEqual(a.headings[1], { id: 'field-common', depth: 3, labelHtml: '6.1. A <em>subsection</em>', href: '#field-common' });
assert.equal(new Set([...a.headings, ...b.headings].map(h => h.id)).size, a.headings.length + b.headings.length);
assert.match(b.html, /href="#quantum-common"/);

const manuscript = '<h2 id="five">5. Existing chapter</h2><p>End of five</p><h2 id="references">参考文献</h2><p>Bibliography</p><section data-footnotes=""><ol><li id="fn-1">Footnote</li></ol></section>';
const merged = insertFieldTheoryBeforeReferences(manuscript, a.html + b.html);
assert(merged.indexOf('End of five') < merged.indexOf('id="field-root"'));
assert(merged.indexOf('id="field-root"') < merged.indexOf('id="quantum-root"'));
assert(merged.indexOf('id="quantum-root"') < merged.indexOf('id="references"'));
assert(merged.indexOf('Bibliography') < merged.indexOf('<section data-footnotes'));
assert.match(merged, /<section data-footnotes=""><ol><li id="fn-1">Footnote<\/li><\/ol><\/section>$/);
assert.throws(() => insertFieldTheoryBeforeReferences('<h2>5. End</h2>', a.html), /bibliography boundary/);
assert.throws(() => insertFieldTheoryBeforeReferences('<section><h2>参考文献</h2></section>', a.html), /bibliography boundary/);
assert.throws(() => insertFieldTheoryBeforeReferences('<h2>参考文献</h2><h2>Later chapter</h2>', a.html), /bibliography boundary/);
assert.throws(() => prepareFieldTheoryChapter('<h2 id="orphan">Missing root</h2>', { id: 'field', section: 6, title: 'Title' }), /initial h1/);
// Original endnote equations keep their numbers when new chapters are adopted.
const math = key => katex.renderToString('x=1\\tag{' + key + '}', {displayMode: true});
const note = {chapters: [
  {id: 'intro', section: '1', file: 'full.md', href: '/notes/kdv/intro/'},
  {id: 'field', section: '6', file: 'content/sections/field.md', href: '/notes/kdv/field/'},
  {id: 'references', section: '', file: 'full.md', href: '/notes/kdv/references/'},
]};
const composed = '<h2>1. Intro</h2>' + math('old-main') + '<a href="#fn-original">Note</a>' +
  '<h2>6. Field</h2>' + math('new-field') + '<p>(@old-note)</p><h2>参考文献</h2>' +
  '<section data-footnotes><ol><li id="fn-original">' + math('old-note') + '</li></ol></section>';
const intro = chapterPage(composed, note, 'intro', []);
const field = chapterPage(composed, note, 'field', []);
assert.match(intro.html, /data-equation-key="old-note" data-equation-number="2"/);
assert.match(field.html, /data-equation-key="new-field" data-equation-number="3"/);
assert.equal(field.equationIndex['old-note'].href, '/notes/kdv/intro/#eq-old-note');
console.log('Field-theory adapter passed: heading shifts, collision isolation, links, untouched equations and markers, bibliography insertion and footnotes.');
