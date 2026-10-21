// Exact stationary Green response for L=-d_x^2-2 sech^2(x).
// E=-q^2<0, k=i q. q is an internal trial decay rate, not a reader-facing alias.
export const energyDomain = [-2.25, -.25];
export function response(E, x) {
  const q = Math.sqrt(-E), t = Math.tanh(x), d = Math.abs(x);
  return {
    left: Math.exp(q*x)*(q-t)/q,
    right: Math.exp(-q*x)*(q+t)/q,
    slope: (q*q-1)/q,
    W: -2*q*(q-1)/(q+1),
    regularized: .5*Math.exp(-q*d)*(q+Math.tanh(d)),
    projector: .5/Math.cosh(x),
  };
}
export const X = x => 56+(x+4)*48;
export const Y = y => 232-y*160/1.8;
export const PY = y => 230-y*180/.85;
const path = points => points.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(3)},${y.toFixed(3)}`).join(' ');
// Overview: all samples, one shared linear amplitude scale for the two solutions.
// Zoom: fixed linear axes, so tangent slopes can be compared across energies.
export const MX = x => 52+(x+4)*31;
export const ZX = x => 52+(x+.5)*248;
export const ZY = y => 210-y*72;
export function matchingPaths(E) {
  const xs=Array.from({length:321},(_,j)=>-4+j/40), values=xs.map(x=>response(E,x));
  const lo=Math.min(0,...values.flatMap(v=>[v.left,v.right]));
  const hi=Math.max(1,...values.flatMap(v=>[v.left,v.right]));
  const span=hi-lo, rawStep=span/4, decade=10**Math.floor(Math.log10(rawStep));
  const step=([1,2,5,10].find(n=>n*decade>=rawStep))*decade;
  const lower=Math.floor(lo/step)*step, upper=Math.ceil(hi/step)*step;
  const y=value=>218-(value-lower)/(upper-lower)*154;
  const ticks=[];
  for(let value=lower;value<=upper+step/2;value+=step)ticks.push({value:+value.toPrecision(10),y:y(value)});
  const zoomXs=Array.from({length:101},(_,j)=>-.5+j/100), slope=response(E,0).slope;
  return {
    overviewLeft:path(xs.map((x,j)=>[MX(x),y(values[j].left)])),
    overviewRight:path(xs.map((x,j)=>[MX(x),y(values[j].right)])),
    overviewPoint:[MX(0),y(1)], zeroY:y(0), ticks,
    zoomLeft:path(zoomXs.map(x=>[ZX(x),ZY(response(E,x).left)])),
    zoomRight:path(zoomXs.map(x=>[ZX(x),ZY(response(E,x).right)])),
    leftTangent:path([-.5,.5].map(x=>[ZX(x),ZY(1+slope*x)])),
    rightTangent:path([-.5,.5].map(x=>[ZX(x),ZY(1-slope*x)])),
    leftSlope:slope, rightSlope:-slope,
  };
}
export function paths(E) {
  const xs=Array.from({length:241},(_,j)=>-4+j/30);
  return {
    ...matchingPaths(E),
    regularized:path(xs.map(x=>[X(x),PY(response(E,x).regularized)])),
    projector:path(xs.map(x=>[X(x),PY(response(E,x).projector)])),
    Wvalue:response(E,0).W,
  };
}
export function initGreenResponse() {
  const roots=[...document.querySelectorAll('[data-green-stage]')].filter(el=>!el.hasAttribute('data-green-ready'));
  if(!roots.length)return;
  roots.forEach(el=>el.setAttribute('data-green-ready',''));
  const update=E=>document.querySelectorAll('[data-green-stage]').forEach(el=>{
    const p=paths(E), pole=Math.abs(E+1)<1e-8;
    el.querySelector('[data-green-energy]').value=String(E);
    el.querySelector('[data-green-energy-output]').textContent=E.toFixed(2);
    for(const key of ['overviewLeft','overviewRight','zoomLeft','zoomRight','leftTangent','rightTangent','regularized'])
      el.querySelector(`[data-green-path="${key}"]`)?.setAttribute('d',p[key]);
    const dot=el.querySelector('[data-green-overview-point]');
    if(dot)dot.setAttribute('cy',p.overviewPoint[1]);
    el.querySelector('[data-green-zero]')?.setAttribute('d',`M52 ${p.zeroY} H300`);
    const tickNodes=el.querySelectorAll('[data-green-tick]');
    tickNodes.forEach((node,j)=>{
      const tick=p.ticks[j];node.toggleAttribute('hidden',!tick);
      if(tick){
        node.setAttribute('transform',`translate(0,${tick.y})`);
        // Clone the matching tick's server-rendered KaTeX, never raw SVG text.
        const template=el.querySelector(`template[data-tick-value="${tick.value}"]`);
        node.querySelector('[data-green-tick-label]').replaceChildren(template.content.cloneNode(true));
      }
    });
    for(const side of ['left','right']){
      const output=el.querySelector(`[data-green-${side}-slope]`);
      if(output)output.textContent=Math.abs(p[side+'Slope'])<1e-9?'0.000':p[side+'Slope'].toFixed(3);
    }
    const w=el.querySelector('[data-green-w]');if(w)w.textContent=Math.abs(p.Wvalue)<1e-9?'0.000':p.Wvalue.toFixed(3);
    el.querySelector('[data-green-status]').textContent=el.dataset.greenStage==='matching'
      ?(pole?'二本の解が表示区間全体で一致する。両端で減衰する束縛状態である。':'x = 0 の値はどちらも1だが、傾きが異なり、二本の解は一致しない。')
      :(pole?'E = −1 での極限。二つの曲線は一致する。':'エネルギーを E = −1 に近づけると、極の係数の形に近づく。');
  });
  roots.forEach(el=>{
    el.querySelector('[data-green-energy]').addEventListener('input',e=>update(Number(e.target.value)));
    el.querySelector('[data-green-pole]').addEventListener('click',()=>update(-1));
    el.querySelector('[data-green-reset]').addEventListener('click',()=>update(-1.8));
  });
  update(-1.8);
}
