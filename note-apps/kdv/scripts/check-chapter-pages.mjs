import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(`${process.cwd()}/package.json`);
const mathRequire = createRequire(require.resolve('rehype-katex'));
const htmlRequire = createRequire(mathRequire.resolve('hast-util-from-html-isomorphic'));
const parserRequire = createRequire(htmlRequire.resolve('hast-util-from-html'));
const {parse} = await import(parserRequire.resolve('parse5'));
const attr=(n,key)=>n.attrs?.find(a=>a.name===key)?.value;
const walk=(n,fn)=>{fn(n);for(const c of n.childNodes||[])walk(c,fn);};
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const config=JSON.parse(fs.readFileSync('note-apps/kdv/note.config.json','utf8'));
const output=process.argv[2]||'dist';
const pages=new Map();
for(const href of ['/notes/kdv/',...config.chapters.map(c=>c.href)]) {
 const html=fs.readFileSync(path.join(output,href,'index.html'),'utf8');
 const tree=parse(html),ids=new Map(), links=[],equations=new Map(),keys=[],footnotes=[];
 walk(tree,n=>{
  const id=attr(n,'id');if(id){assert(!ids.has(id),`${href}: duplicate ${id}`);ids.set(id,n);}
  if(n.tagName==='a')links.push(attr(n,'href'));
  const key=attr(n,'data-equation-key');if(key)equations.set(key,attr(n,'data-equation-number'));
  if(attr(n,'data-reference-key'))keys.push(attr(n,'data-reference-key'));
  if(n.tagName==='li'&&id?.startsWith('user-content-fn-'))footnotes.push(n);
 });
 const payload=JSON.parse(text(ids.get('reader-preview-data')));
 assert.equal([...ids.values()].filter(n=>n.tagName==='h1').length,1,`${href}: page title`);
 const chapterTitles=[...ids.values()].filter(n=>n.tagName==='h1').map(text);
 if(href!=='/notes/kdv/references/')assert.equal(chapterTitles.length,1);
 for(const key of keys)assert(payload.equationIndex[key],`${href}: missing preview ${key}`);
 for(const node of footnotes)assert(attr(node,'value'),`${href}: footnote lost its printed ordinal`);
 pages.set(href,{html,ids,links,equations,payload,keys});
}
const allNumbers=[];
for(const [href,page]of pages) {
 for(const target of [...page.links,...Object.values(page.payload.equationIndex||{}).map(e=>e.href)]) {
  if(!target)continue;
  const url=new URL(target,`https://example.invalid${href}`);
  if(url.origin!=='https://example.invalid'||!pages.has(url.pathname))continue;
  if(url.hash)assert(pages.get(url.pathname).ids.has(decodeURIComponent(url.hash.slice(1))),`${href}: missing destination ${target}`);
 }
 if(href!=='/notes/kdv/')allNumbers.push(...page.equations.values());
 for(const chapter of config.chapters)assert(page.links.includes(chapter.href),`${href}: missing chapter navigation ${chapter.id}`);
}
assert.deepEqual(allNumbers.map(Number).sort((a,b)=>a-b),Array.from({length:allNumbers.length},(_,i)=>i+1),'Note-wide equation sequence changed across page boundaries');
assert.equal(pages.get('/notes/kdv/references/').keys.length,0,'Bibliographic issue numbers must not become equation previews');
const landing=pages.get('/notes/kdv/');
const routes=JSON.parse(text(landing.ids.get('kdv-anchor-routes')));
for(const [id,href]of Object.entries(routes))assert(pages.get(href)?.ids.has(id),`Legacy fragment ${id} points to missing target`);
assert.equal(pages.get('/notes/kdv/').equations.size,1,'Landing must contain introduction only');
console.log(`KdV chapter pages passed: ${pages.size} routes, ${allNumbers.length} stable equations, local/cross-page links, previews, footnotes and legacy fragments.`);
