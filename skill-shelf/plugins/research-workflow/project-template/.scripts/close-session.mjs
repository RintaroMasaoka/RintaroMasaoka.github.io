// Project-owned adapter for the current auto-research packet schema.
// Writes handoff files; commits ONLY an explicit session manifest. No network IO.
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root = process.cwd();
const args = process.argv.slice(2);
function arg(k) { const i=args.indexOf(k); if(i<0 || !args[i+1]) throw Error(`missing ${k}`); return args[i+1]; }
function local(p) { const a=path.resolve(root,p); if(!a.startsWith(root+path.sep)) throw Error('outside project'); return a; }
const packetPath=local(arg('--packet'));
const packet=fs.readFileSync(packetPath,'utf8');
if(arg('--kind')!=='auto-research') throw Error('unsupported kind');
const headings=['Focus','Last Session','Research Draft','Session Log','Backlog','Agenda','Commit'];
const matches=[...packet.matchAll(/^## (.+)$/gm)].filter(m=>headings.includes(m[1]));
const sections=new Map();
for(let i=0;i<matches.length;i++) {
 const m=matches[i]; if(sections.has(m[1])) throw Error('duplicate section');
 sections.set(m[1],packet.slice(m.index+m[0].length,matches[i+1]?.index ?? packet.length).trim()+'\n');
}
for(const k of ['Focus','Last Session','Research Draft','Session Log','Commit']) if(!sections.has(k)) throw Error(`missing ${k}`);
const manifest=fs.readFileSync(local(arg('--stage-manifest')),'utf8').split(/\r?\n/).filter(p=>p && !p.startsWith('#'));
manifest.forEach(local);
const packetRelative=path.relative(root,packetPath);
if(!manifest.includes(packetRelative)) throw Error(`manifest lacks session packet ${packetRelative}`);
const outputs={'research/focus.md':'Focus','.logs/last_session.md':'Last Session','.logs/last_research_draft.md':'Research Draft'};
for(const p of Object.keys(outputs)) if(!manifest.includes(p)) throw Error(`manifest lacks ${p}`);
const staged=execFileSync('git',['diff','--cached','--name-only'],{encoding:'utf8'}).trim();
if(staged) throw Error('pre-existing index changes; refusing mixed commit');
for(const [p,k] of Object.entries(outputs)) {fs.mkdirSync(path.dirname(local(p)),{recursive:true}); fs.writeFileSync(local(p),sections.get(k));}
const message=sections.get('Commit').match(/^message:\s*(.+)$/m)?.[1];
if(!message) throw Error('missing commit message');
execFileSync('git',['add','--',...manifest],{stdio:'inherit'});
execFileSync('git',['commit','-m',message],{stdio:'inherit'});
const beacon=local('.logs/.auto-research-active');
if(fs.existsSync(beacon)) fs.unlinkSync(beacon);
console.log('Handoff saved; explicit manifest committed; no push performed.');
