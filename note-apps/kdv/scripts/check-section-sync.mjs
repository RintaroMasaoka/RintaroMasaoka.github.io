import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {resolve} from 'node:path';
// Both the site build and this CLI are run from the site root.
const full=readFileSync(resolve('note-apps/kdv/content/full.md'),'utf8');
const source=readFileSync(resolve('note-apps/kdv/content/sections/scattering.md'),'utf8').trim();
const section=full.slice(full.indexOf('### 2.4.'),full.indexOf('## 3.')).trim();
assert.equal(section,source,'§§2.4–2.5 assembled content differs from canonical scattering.md; update both before publication.');
console.log('KdV scattering source and assembled reading path agree.');
const reflectionless=readFileSync(resolve('note-apps/kdv/content/sections/reflectionless.md'),'utf8').trim();
const reflectionlessMatch=full.match(/<!-- kdv-reflectionless:start -->\s*([\s\S]*?)\s*<!-- kdv-reflectionless:end -->/);
assert.ok(reflectionlessMatch,'Missing reflectionless composition markers.');
assert.equal(reflectionlessMatch[1].trim(),reflectionless,'Reflectionless assembled content differs from its canonical section source.');
console.log('KdV reflectionless source and assembled reading path agree.');
const hierarchy=readFileSync(resolve('note-apps/kdv/content/sections/hierarchy.md'),'utf8').trim();
assert.equal(full.slice(full.indexOf('## 4.'),full.indexOf('## 参考文献')).trim(),hierarchy,'§4 assembled content differs from canonical hierarchy.md; update both before publication.');
console.log('KdV hierarchy source and assembled reading path agree.');
