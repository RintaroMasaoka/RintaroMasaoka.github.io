// Exact stationary Green response for L=-d_x^2-2 sech^2(x).
// E=-q^2<0, k=i q. q is an internal trial decay rate, not a reader-facing alias.
export const energyDomain = [-1.5, -.5];
export const initialEnergy = -1.25;
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
export const X = x => 52+(x+4)*31;
export const Y = y => 232-y*160/1.8;
export const PY = y => 230-y*180/.85;
export const SX = x => 52+(x+1)*124;
export const SY = value => 182-value*72;
export const SDY = slope => 322-slope*39;
const path = points => points.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(3)},${y.toFixed(3)}`).join(' ');
export function sourcePaths(E) {
  const q=Math.sqrt(-E);
  const derivative=(x,left)=>{
    const t=Math.tanh(x);
    return left?Math.exp(q*x)*(q-t-(1-t*t)/q):Math.exp(-q*x)*(-q-t+(1-t*t)/q);
  };
  const left=Array.from({length:101},(_,i)=>-1+i/100);
  const right=Array.from({length:101},(_,i)=>i/100);
  const slope=response(E,0).slope, jump=-2*slope;
  return {
    sourceLeft:path(left.map(x=>[SX(x),SY(response(E,x).left)])),
    sourceRight:path(right.map(x=>[SX(x),SY(response(E,x).right)])),
    derivativeLeft:path(left.map(x=>[SX(x),SDY(derivative(x,true))])),
    derivativeRight:path(right.map(x=>[SX(x),SDY(derivative(x,false))])),
    jumpPath:`M${SX(0)} ${SDY(slope)} V${SDY(-slope)}`,
    leftY:SDY(slope),rightY:SDY(-slope),jump,
    sourceAmplitude:Math.abs(jump)<1e-9?null:1/jump,
  };
}
// Fixed linear axes in both panels: changing energy moves only the solutions.
// Zoom: the same two solutions, on fixed linear axes near the comparison point.
export const MX = x => 52+(x+3)*248/6;
export const ZX = x => 52+(x+.1)*1240;
export const ZY = y => 210-(y-.96)*1800;
export function matchingPaths(E) {
  const xs=Array.from({length:321},(_,j)=>-3+j*6/320), values=xs.map(x=>response(E,x));
  const y=value=>218-(value+4)/12*154;
  const ticks=[-4,0,4,8].map(value=>({value,y:y(value)}));
  const zoomXs=Array.from({length:101},(_,j)=>-.1+j/500), slope=response(E,0).slope;
  return {
    overviewLeft:path(xs.map((x,j)=>[MX(x),y(values[j].left)])),
    overviewRight:path(xs.map((x,j)=>[MX(x),y(values[j].right)])),
    overviewPoint:[MX(0),y(1)], zeroY:y(0), ticks,
    zoomLeft:path(zoomXs.map(x=>[ZX(x),ZY(response(E,x).left)])),
    zoomRight:path(zoomXs.map(x=>[ZX(x),ZY(response(E,x).right)])),
    leftSlope:slope, rightSlope:-slope,
  };
}
export function paths(E) {
  const xs=Array.from({length:241},(_,j)=>-4+j/30);
  return {
    ...matchingPaths(E),
    ...sourcePaths(E),
    regularized:path(xs.map(x=>[X(x),PY(response(E,x).regularized)])),
    projector:path(xs.map(x=>[X(x),PY(response(E,x).projector)])),
    Wvalue:response(E,0).W,
  };
}
export function initGreenResponse() {
  const roots=[...document.querySelectorAll('[data-green-stage]')].filter(el=>!el.hasAttribute('data-green-ready'));
  if(!roots.length)return;
  roots.forEach(el=>el.setAttribute('data-green-ready',''));
  const update=(E,sourceOnly=false)=>[...document.querySelectorAll('[data-green-stage]')].filter(el=>(el.dataset.greenStage==='source')===sourceOnly).forEach(el=>{
    const p=paths(E), pole=Math.abs(E+1)<1e-8;
    el.querySelector('[data-green-energy]').value=String(E);
    el.querySelector('[data-green-energy-output]').textContent=E.toFixed(3);
    for(const key of ['overviewLeft','overviewRight','zoomLeft','zoomRight','regularized','sourceLeft','sourceRight','derivativeLeft','derivativeRight'])
      el.querySelector(`[data-green-path="${key}"]`)?.setAttribute('d',p[key]);
    for(const side of ['left','right']){
      const output=el.querySelector(`[data-green-${side}-slope]`);
      if(output)output.textContent=Math.abs(p[side+'Slope'])<1e-9?'0.000':p[side+'Slope'].toFixed(3);
    }
    const w=el.querySelector('[data-green-w]');if(w)w.textContent=Math.abs(p.Wvalue)<1e-9?'0.000':p.Wvalue.toFixed(3);
    el.querySelector('[data-green-jump-path]')?.setAttribute('d',p.jumpPath);
    el.querySelector('[data-green-source-left]')?.setAttribute('cy',p.leftY);
    el.querySelector('[data-green-source-right]')?.setAttribute('y',p.rightY-4);
    const jump=el.querySelector('[data-green-jump]');if(jump)jump.textContent=pole?'0.000':p.jump.toFixed(3);
    const amplitude=el.querySelector('[data-green-amplitude]');if(amplitude)amplitude.textContent=pole?'未定義':p.sourceAmplitude.toFixed(3);
    el.querySelector('[data-green-status]').textContent=el.dataset.greenStage==='matching'
      ?(pole?'二本の解が表示区間全体で一致する。両端で減衰する束縛状態である。':'x = 0 の値はどちらも1だが、傾きが異なり、二本の解は一致しない。')
      :el.dataset.greenStage==='source'
      ?(pole?'傾きの跳びが0。点源なしの束縛状態になり、単位点源への応答はこの固有値では定義されない。':'下図の接続点にある破線の縦線分が傾きの跳び。その値が、上図の曲線に対応する点源の強さである。')
      :(pole?'E = −1 での極限。二つの曲線は一致する。':'エネルギーを E = −1 に近づけると、極の係数の形に近づく。');
  });
  roots.forEach(el=>{
    el.querySelector('[data-green-energy]').addEventListener('input',e=>update(Number(e.target.value),el.dataset.greenStage==='source'));
    el.querySelector('[data-green-pole]').addEventListener('click',()=>update(-1,el.dataset.greenStage==='source'));
    el.querySelector('[data-green-reset]').addEventListener('click',()=>update(el.dataset.greenStage==='source'?-1.8:initialEnergy,el.dataset.greenStage==='source'));
  });
  update(initialEnergy);
  update(-1.8,true);
}
