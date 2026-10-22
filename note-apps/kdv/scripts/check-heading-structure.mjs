import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {headingAliases} from './headings.mjs';
const html=readFileSync(process.argv[2] || 'dist/notes/kdv/index.html','utf8');
const body=html.match(/<article\b[^>]*id="manuscript"[^>]*>([\s\S]*?)<\/article>/)?.[1];
assert.ok(body,'Missing composed manuscript');
const plain=s=>s.replace(/<[^>]+>/g,'').replaceAll('&amp;','&').trim();
const headings=[...body.matchAll(/<h([234])\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)].map(m=>({depth:+m[1],id:m[2],label:plain(m[3])}));
const toc=html.match(/<ol class="subsection-list">([\s\S]*?)<\/ol>/)?.[1];
assert.ok(toc,'Missing contents');
const entries=[...toc.matchAll(/<a\b[^>]*href="#([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(m=>({id:m[1],label:plain(m[2])}));
assert.deepEqual(entries,headings.filter(h=>h.depth<=3).map(({id,label})=>({id,label})),'Contents must use the composed main heading labels, order and targets');
let parent='';
for(const h of headings){
 if(h.depth===3)parent=h.label.match(/^(\d+\.\d+)\./)?.[1] || '';
 if(h.depth===4){const section=h.label.match(/^(\d+\.\d+)\.\d+\./)?.[1];assert.equal(section,parent,`Misplaced subsection: ${h.label}`);}
}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const [old,target]of Object.entries(headingAliases)){
 assert.equal(ids.filter(id=>id===old).length,1,`Missing prior shared URL: ${old}`);
 assert.ok(headings.some(h=>h.id===target),`Missing new heading: ${target}`);
}
for(const chapter of ['3','4'])assert.equal(headings.filter(h=>h.depth===3&&h.label.startsWith(`${chapter}.`)).length,3,`Chapter ${chapter} must expose its three main reading questions`);
console.log(`KdV heading structure passed: ${headings.length} body landmarks, ${entries.length} main contents entries, ${Object.keys(headingAliases).length} old URL targets.`);
