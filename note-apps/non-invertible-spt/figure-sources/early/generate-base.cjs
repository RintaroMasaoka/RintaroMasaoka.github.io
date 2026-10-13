const fs=require('fs'),path=require('path');
const katex=require(process.env.KATEX_ROOT || 'katex');
const katexRoot=process.env.KATEX_ROOT ? path.resolve(process.env.KATEX_ROOT) : path.dirname(require.resolve('katex/package.json'));
const out=__dirname,assets=path.join(out,'assets');
fs.mkdirSync(assets,{recursive:true});
fs.mkdirSync(path.join(assets,'katex'),{recursive:true});
fs.copyFileSync(path.join(katexRoot,'dist/katex.min.css'),path.join(assets,'katex/katex.min.css'));
fs.cpSync(path.join(katexRoot,'dist/fonts'),path.join(assets,'katex/fonts'),{recursive:true});
fs.copyFileSync(path.join(katexRoot,'LICENSE'),path.join(assets,'katex/LICENSE'));
const C={ink:'#243746',line:'#566672',faint:'#d6dfe4',blue:'#156391',orange:'#a45119'};
const W=1120;
let all=[];
function start(id,h){return {id,w:W,h,labels:[],svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="${C.line}"/></marker></defs>`};}
function line(f,x1,y1,x2,y2,color=C.line,w=2,extra=''){f.svg+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${extra}/>`;}
function curve(f,d,color=C.line,w=3,extra=''){f.svg+=`<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" ${extra}/>`;}
function circle(f,x,y,r,color=C.line,fill='white',w=2){f.svg+=`<circle cx="${x}" cy="${y}" r="${r}" stroke="${color}" fill="${fill}" stroke-width="${w}"/>`;}
function label(f,id,tex,x,y,size=26,width=360,color=C.ink){
const meanings={'left-product':'Product of the two left-edge actions','right-product':'Product of the two right-edge actions','left-result':'Left-edge product with projective phase','right-result':'Right-edge product with inverse projective phase','global-product':'Global product restricted to the low-energy space','cancel':'Cancellation of the two end phases in the global product','operator-left':'Symmetry operator inserted along space','operator-middle':'The same symmetry operator inserted at a later time','time-shift':'Shift of the insertion time at fixed total imaginary time','commute':'Symmetry operator commutes with the Hamiltonian','fixed-time':'Total imaginary time is held fixed','bond-label':'Same spatial bond is modified at every time','fixed-position':'One fixed spatial position','a':'Temporal defect line a','left-space':'Untwisted low-energy state space and its dimension','right-space':'Defect-sector low-energy state space and its dimension'};
let meaning=meanings[id]||tex.replace(/\\text\{([^}]+)\}/g,'$1');
let role='direct label';
if(/^(tau|time)-/.test(id)){meaning='Imaginary time axis';role='axis label';}
if(/^x-/.test(id)){meaning='Spatial position axis';role='axis label';}
if(/^circle-/.test(id))meaning='Spatial circle in a spacetime cylinder';
if(id==='title'||id.endsWith('-title'))role='panel title';
if(id==='cancel'||id==='global-product'||id.endsWith('-space')||id==='commute')role='equation';
f.labels.push({id,tex,x,y,size,width,color,english_meaning:meaning,role,renderer:'KaTeX',font_family:'KaTeX Main / Math'});
}
function arrow(f,x1,y1,x2,y2){line(f,x1,y1,x2,y2,C.line,2,'marker-end="url(#arrow)"');}
function finish(f){f.svg+='</svg>';const letters=f.labels.map(l=>`<div class="label" data-label="${l.id}" style="left:${l.x}px;top:${l.y}px;font-size:${l.size}px;width:${l.width}px;color:${l.color}">${katex.renderToString(l.tex,{throwOnError:true})}</div>`).join('');const html=`<!doctype html><html lang="en"><meta charset="utf-8"><title>${f.id}</title><link rel="stylesheet" href="katex/katex.min.css"><style>html,body{margin:0;background:#fff}#figure{position:relative;width:${W}px;height:${f.h}px;overflow:hidden;background:#fff}svg{position:absolute;inset:0}.label{position:absolute;transform:translate(-50%,-50%);text-align:center;white-space:nowrap;line-height:1.2}.katex{font-size:1em}</style><div id="figure">${f.svg}${letters}</div></html>`;fs.writeFileSync(path.join(assets,f.id+'.html'),html);fs.writeFileSync(path.join(assets,f.id+'.geometry.svg'),f.svg);fs.writeFileSync(path.join(assets,f.id+'.labels.json'),JSON.stringify(f.labels,null,2));all.push({id:f.id,width:W,height:f.h,labels:f.labels});}

// The two colored end supports have independent operator factors. No arrows
// along the chain: multiplication is algebraic, not transport of a phase.
{
const f=start('edge-phase-cancellation',450);
label(f,'title','\\text{Open-chain low-energy space}',560,35,29,900);
label(f,'left','\\text{Left edge}',130,95,24,230,C.blue);label(f,'bulk','\\text{Bulk}',560,95,24,200);label(f,'right','\\text{Right edge}',990,95,24,230,C.orange);
for(const y of [160,310]){line(f,75,y,1045,y,C.faint,4);f.svg+=`<ellipse cx="130" cy="${y}" rx="88" ry="25" fill="${C.blue}" fill-opacity="0.08"/><ellipse cx="990" cy="${y}" rx="88" ry="25" fill="${C.orange}" fill-opacity="0.08"/>`;for(let j=0;j<12;j++)circle(f,75+j*970/11,y,5.5,j<2?C.blue:j>9?C.orange:C.line,'white',2);}
label(f,'left-product','V_g^L V_h^L',145,127,28,250,C.blue);label(f,'right-product','V_g^R V_h^R',975,127,28,250,C.orange);
arrow(f,130,190,130,253);arrow(f,990,190,990,253);
label(f,'left-multiply','\\text{Multiply}',235,225,20,180);label(f,'right-multiply','\\text{Multiply}',885,225,20,180);
label(f,'left-result','\\beta(g,h)V_{gh}^L',160,277,28,315,C.blue);label(f,'right-result','\\beta(g,h)^{-1}V_{gh}^R',950,277,28,325,C.orange);
label(f,'global-product','U_gU_h=(V_g^LV_h^L)(V_g^RV_h^R)',560,204,28,670);
label(f,'cancel','\\underbrace{\\beta(g,h)\\,\\beta(g,h)^{-1}}_{1}\\;V_{gh}^L V_{gh}^R=U_{gh}',560,390,29,930);
finish(f);
}

// Gray grid is a schematic of local time slices/site worldlines. The
// horizontal operator reaches across all sites; the vertical seam touches
// the same spatial bond at every represented time slice.
{
const f=start('defect-orientations',550);
label(f,'left-title','\\text{Operator at one time}',205,38,25,350);label(f,'middle-title','\\text{Shift the insertion time}',565,38,25,350);label(f,'right-title','\\text{Defect along time}',925,38,25,350);
const starts=[65,425,785],tops=135,bottom=430;
for(let p=0;p<3;p++){const x=starts[p];for(let i=0;i<6;i++)line(f,x+20+i*46,tops,x+20+i*46,bottom,C.faint,1.3);for(const y of [155,200,245,290,335,380,425])line(f,x+20,y,x+250,y,C.faint,1.3);arrow(f,x-4,bottom+15,x+270,bottom+15);arrow(f,x-4,bottom+15,x-4,tops-20);label(f,'tau-'+p,'\\tau',x-26,tops-20,25,40);label(f,'x-'+p,'x',x+278,bottom+23,25,40);}
line(f,85,325,315,325,C.blue,5);line(f,445,225,675,225,C.blue,5);
label(f,'operator-left','U_g',280,301,29,100,C.blue);label(f,'operator-middle','U_g',640,201,29,100,C.blue);
arrow(f,340,277,405,277);label(f,'time-shift','\\text{Shift}',374,247,18,90);
label(f,'commute','[U_g,H]=0',385,92,26,430);
label(f,'fixed-time','\\tau_1+\\tau_2\\text{ fixed}',385,502,25,650);
line(f,923,135,923,430,C.orange,3,'stroke-dasharray="8 6"');
for(const y of [155,200,245,290,335,380,425]){line(f,900,y,946,y,C.orange,5);circle(f,900,y,3,C.line,C.line,1);circle(f,946,y,3,C.line,C.line,1);}
label(f,'bond-label','\\text{Modified bond at every time}',925,93,21,375,C.orange);label(f,'fixed-position','\\text{One fixed spatial position}',925,502,23,380);
finish(f);
}

// Two cylinders depict different quantizations, not two vacua. A fixed
// temporal seam has one intersection with every spatial circle slice.
{
const f=start('vacuum-defect-sector',525);
label(f,'title','\\text{SPT: one vacuum sector}',560,38,30,900);
label(f,'left-title','\\text{No defect}',265,95,26,430);label(f,'right-title','\\text{Defect along time}',855,95,26,440);
for(const cx of [265,855]){const top=175,bottom=355,rx=180,ry=38;f.svg+=`<ellipse cx="${cx}" cy="${top}" rx="${rx}" ry="${ry}" fill="#f5f8fa" stroke="${C.line}" stroke-width="2"/>`;line(f,cx-rx,top,cx-rx,bottom,C.line,2);line(f,cx+rx,top,cx+rx,bottom,C.line,2);curve(f,`M${cx-rx} ${bottom} A${rx} ${ry} 0 0 0 ${cx+rx} ${bottom}`,C.line,2);curve(f,`M${cx-rx} ${bottom} A${rx} ${ry} 0 0 1 ${cx+rx} ${bottom}`,C.line,2,'stroke-dasharray="6 5"');arrow(f,cx-215,bottom,cx-215,top);label(f,'time-'+cx,'\\tau',cx-235,top-18,25,40);label(f,'circle-'+cx,'\\text{Spatial circle}',cx,bottom+58,23,400);}
line(f,855,213,855,393,C.orange,5);circle(f,855,213,5,C.orange,C.orange,1);circle(f,855,393,5,C.orange,C.orange,1);label(f,'a','a',892,281,32,60,C.orange);
label(f,'left-space','\\mathcal F(1)\\cong\\mathbb C,\\qquad\\dim\\mathcal F(1)=1',265,478,27,525);
label(f,'right-space','\\mathcal F(a),\\qquad\\dim\\mathcal F(a)=d_a',855,478,27,525);
finish(f);
}
fs.writeFileSync(path.join(assets,'base-figures.json'),JSON.stringify(all,null,2));
console.log('Generated '+all.length+' figures with '+all.reduce((n,f)=>n+f.labels.length,0)+' KaTeX labels.');
