import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { noteMathOptions } from '../src/utils/note-math.mjs';
import { numberEquations } from '../src/utils/note-equations.mjs';
const require = createRequire(import.meta.url);
const katex = createRequire(require.resolve('rehype-katex'))('katex');
const tex = String.raw`\wa_\circ^2+\wb_\bullet+\wc+\opA(\lambda)\opB(\mu)+\opC+\opD+\vacAlpha+\vacDelta`;
const render = source => katex.renderToString(source, { ...noteMathOptions, displayMode: true, throwOnError: true });
const html = render(tex);
for (const name of ['weight-a','weight-b','weight-c','op-a','op-b','op-c','op-d','vac-alpha','vac-delta']) {
  assert.match(html, new RegExp(`class="[^"]*math-${name}`));
}
const numbered = numberEquations(render(tex + String.raw`\tag{motif-regression}`) + '<p>(@motif-regression)</p>');
assert.match(numbered, /math-op-b/);
assert.match(numbered, /math-weight-a/);
assert.match(numbered, /data-equation-number="1"/);
assert.match(numbered, /<p>\(1\)<\/p>/);
assert.equal(noteMathOptions.trust({ command: '\\htmlClass', class: 'math-weight-a arbitrary' }), false);
assert.equal(noteMathOptions.trust({ command: '\\htmlStyle', style: 'color:red' }), false);
assert.equal(noteMathOptions.trust({ command: '\\href', url: 'https://example.com' }), false);
const rejected = render(String.raw`\htmlClass{arbitrary}{a}`);
assert.doesNotMatch(rejected, /class="[^"]*arbitrary/);
console.log('PASS: shared motif commands, numbered rerendering, references, and restricted HTML trust.');
