import {readFileSync, existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import katex from 'katex';
const config=JSON.parse(readFileSync('note.config.json','utf8'));
const ids=new Set(), refs=new Set(), equations=new Set();
for(const c of config.chapters){
 assert(!ids.has(c.id));ids.add(c.id);
 assert(/^content\/[a-z-]+\.md$/.test(c.file));
 const s=readFileSync(c.file,'utf8');
 for(const m of s.matchAll(/<!-- reference: ([a-z0-9-]+) -->/g)){
  const key=`/${c.id}#ref-${m[1]}`;assert(!refs.has(key));refs.add(key);
 }
 for(const m of s.matchAll(/```equation\nid: ([\w-]+)\n([\s\S]*?)```/g)){
  assert(!equations.has(m[1]));equations.add(m[1]);katex.renderToString(m[2],{throwOnError:true,strict:false,displayMode:true});
 }
 for(const m of s.matchAll(/^part [\w-]+: (.+)$/gm)) katex.renderToString(m[1],{throwOnError:true,strict:false});
 assert.equal((s.match(/<!-- reference:/g)||[]).length,(s.match(/<!-- \/reference -->/g)||[]).length);
}
for(const c of config.chapters){
 const s=readFileSync(c.file,'utf8');
 for(const m of s.matchAll(/\]\((\/[^)]+|#[^)]+)\)/g)){
  const target=m[1];
  if(target.startsWith('#eq-')) assert(equations.has(target.slice(4)),target);
  else if(target.includes('#ref-')) assert(refs.has(target.startsWith('#')?`/${c.id}${target}`:target),target);
  else if(target.startsWith('/diagrams/')) {
   assert(/^\/diagrams\/[a-z0-9-]+\.svg$/.test(target),target);
   assert(existsSync(`public${target}`),target);
  }
  else if(target.startsWith('/')) assert(ids.has(target.slice(1)),target);
 }
}
console.log(`PASS: ${ids.size} chapters, ${refs.size} passage references, ${equations.size} equation IDs, custom TeX and internal links.`);
