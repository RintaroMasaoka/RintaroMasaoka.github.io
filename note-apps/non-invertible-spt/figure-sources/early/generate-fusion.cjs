const fs=require('fs'),path=require('path');
const katex=require(process.env.KATEX_ROOT || 'katex');
const katexRoot=process.env.KATEX_ROOT ? path.resolve(process.env.KATEX_ROOT) : path.dirname(require.resolve('katex/package.json'));
const root=__dirname,assets=path.join(root,'assets'),id='fusion-associator',width=1120,height=590;
fs.mkdirSync(assets,{recursive:true});fs.mkdirSync(path.join(assets,'katex'),{recursive:true});
fs.copyFileSync(path.join(katexRoot,'dist/katex.min.css'),path.join(assets,'katex/katex.min.css'));fs.cpSync(path.join(katexRoot,'dist/fonts'),path.join(assets,'katex/fonts'),{recursive:true});fs.copyFileSync(path.join(katexRoot,'LICENSE'),path.join(assets,'katex/LICENSE'));
const C={ink:'#243746',line:'#156391',intermediate:'#a45119',map:'#566672'},labels=[];
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="${C.map}"/></marker></defs>`;
function line(x1,y1,x2,y2,color=C.line,w=4,extra=''){svg+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${extra}/>`;}
function curve(d,color=C.line,w=4){svg+=`<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}"/>`;}
function junction(x,y){svg+=`<circle cx="${x}" cy="${y}" r="6" fill="${C.line}"/>`;}
function label(key,tex,x,y,size,w,meaning,role,color=C.ink){labels.push({id:key,tex,x,y,size,width:w,color,english_meaning:meaning,role,renderer:'KaTeX',font_family:'KaTeX Main / Math'});}
label('scope','a,b,c\\text{ fixed; }d\\text{ fixed}',560,33,29,1000,'The ordered input simple lines and the total output simple line are fixed','scope');
label('left-title','\\text{One left-associated basis junction}',245,83,23,470,'One total junction from the left-associated basis','panel title');
label('right-title','\\text{Right-associated basis junctions}',875,83,23,470,'Basis junctions summed over the right-associated basis','panel title');
for(const [x,t] of [[95,'a'],[245,'b'],[395,'c'],[725,'a'],[875,'b'],[1025,'c']])label('input-'+x,t,x,125,30,70,'Input simple line '+t,'simple line');
curve('M95 150 L95 190 L170 260 L245 190 L245 150');
line(170,260,170,310,C.intermediate);
curve('M395 150 L395 250 L282.5 370');line(170,310,282.5,370,C.intermediate);line(282.5,370,282.5,420);
junction(170,260);junction(282.5,370);
label('e','e',210,291,30,70,'Intermediate simple line in the left-associated basis','intermediate simple line',C.intermediate);
label('mu','\\mu',127,260,30,70,'Basis choice for the a,b to e junction','junction basis index');label('nu','\\nu',240,382,30,70,'Basis choice for the e,c to d junction','junction basis index');
label('left-output','d',282.5,449,30,80,'The same fixed total output simple line d','simple line');
curve('M875 150 L875 190 L950 260 L1025 190 L1025 150');
line(950,260,950,310,C.intermediate);curve('M725 150 L725 250 L837.5 370');line(950,310,837.5,370,C.intermediate);line(837.5,370,837.5,420);
junction(950,260);junction(837.5,370);
label('f','f',910,291,30,70,'Intermediate simple line in the right-associated basis','intermediate simple line',C.intermediate);
label('mu-prime','\\mu^{\\prime}',1000,260,30,80,'Basis choice for the b,c to f junction','junction basis index');label('nu-prime','\\nu^{\\prime}',885,382,30,80,'Basis choice for the a,f to d junction','junction basis index');
label('right-output','d',837.5,449,30,80,'The same fixed total output simple line d','simple line');
label('F-title','F\\text{ matrix entries}',560,215,24,320,'Coefficients in the expansion of one left basis junction in the right basis','basis change');
label('F-expansion','\\displaystyle =\\sum_{f,\\mu^{\\prime},\\nu^{\\prime}}F_{(e,\\mu,\\nu),(f,\\mu^{\\prime},\\nu^{\\prime})}',560,292,23,340,'A chosen left basis junction is a linear combination of all allowed right basis junctions','basis expansion');
label('left-mu-range','\\mu=1,\\ldots,N_{ab}^{\\ e}',265,499,25,510,'First left junction has N_ab^e independent basis choices','index range');
label('left-nu-range','\\nu=1,\\ldots,N_{ec}^{\\ d}',265,545,25,510,'Second left junction has N_ec^d independent basis choices','index range');
label('right-mu-range','\\mu^{\\prime}=1,\\ldots,N_{bc}^{\\ f}',855,499,25,510,'First right junction has N_bc^f independent basis choices','index range');
label('right-nu-range','\\nu^{\\prime}=1,\\ldots,N_{af}^{\\ d}',855,545,25,510,'Second right junction has N_af^d independent basis choices','index range');
svg+='</svg>';
const letters=labels.map(l=>`<div class="label" data-label="${l.id}" style="left:${l.x}px;top:${l.y}px;font-size:${l.size}px;width:${l.width}px;color:${l.color}">${katex.renderToString(l.tex,{throwOnError:true})}</div>`).join('');
const html=`<!doctype html><html lang="en"><meta charset="utf-8"><title>${id}</title><link rel="stylesheet" href="katex/katex.min.css"><style>html,body{margin:0;background:#fff}#figure{position:relative;width:${width}px;height:${height}px;overflow:hidden;background:#fff}svg{position:absolute;inset:0}.label{position:absolute;transform:translate(-50%,-50%);text-align:center;white-space:nowrap;line-height:1.2}.katex{font-size:1em}</style><div id="figure">${svg}${letters}</div></html>`;
fs.writeFileSync(path.join(assets,id+'.html'),html);fs.writeFileSync(path.join(assets,id+'.geometry.svg'),svg);fs.writeFileSync(path.join(assets,id+'.labels.json'),JSON.stringify(labels,null,2));fs.writeFileSync(path.join(assets,'fusion-figure.json'),JSON.stringify([{id,width,height,labels}],null,2));
console.log('Generated revised fusion figure with '+labels.length+' TeX labels.');
