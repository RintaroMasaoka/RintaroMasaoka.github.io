import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {resolve} from 'node:path';
// Both the site build and this CLI are run from the site root.
const full=readFileSync(resolve('note-apps/kdv/content/full.md'),'utf8');
const source=readFileSync(resolve('note-apps/kdv/content/sections/scattering.md'),'utf8').trim();
const section=full.slice(full.indexOf('### 2.4.'),full.indexOf('## 3.')).trim();
assert.equal(section,source,'§§2.4–2.5 assembled content differs from canonical scattering.md; update both before publication.');
console.log('KdV scattering source and assembled reading path agree.');
