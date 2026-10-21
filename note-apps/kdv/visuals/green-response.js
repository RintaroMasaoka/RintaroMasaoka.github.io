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
export const EX = E => 56+(E+2.25)*192;
export const WY = w => 410-(w+.65)*100;
export const PY = y => 230-y*180/.85;
const path = points => points.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(3)},${y.toFixed(3)}`).join(' ');
export function paths(E) {
  const xs=Array.from({length:241},(_,j)=>-4+j/30), v=response(E,0);
  return {
    left:path(xs.filter(x=>x<=0).map(x=>[X(x),Y(response(E,x).left)])),
    right:path(xs.filter(x=>x>=0).map(x=>[X(x),Y(response(E,x).right)])),
    leftTangent:path([-.45,0].map(x=>[X(x),Y(1+v.slope*x)])),
    rightTangent:path([0,.45].map(x=>[X(x),Y(1-v.slope*x)])),
    W:path(Array.from({length:201},(_,j)=>{const e=-2.25+j/100;return[EX(e),WY(response(e,0).W)]})),
    regularized:path(xs.map(x=>[X(x),PY(response(E,x).regularized)])),
    projector:path(xs.map(x=>[X(x),PY(response(E,x).projector)])),
    marker:[EX(E),WY(v.W)], Wvalue:v.W,
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
    for(const key of ['left','right','leftTangent','rightTangent','regularized'])
      el.querySelector(`[data-green-path="${key}"]`)?.setAttribute('d',p[key]);
    const dot=el.querySelector('[data-green-marker]');
    if(dot){dot.setAttribute('cx',p.marker[0]);dot.setAttribute('cy',p.marker[1]);}
    const w=el.querySelector('[data-green-w]');if(w)w.textContent=Math.abs(p.Wvalue)<1e-9?'0.000':p.Wvalue.toFixed(3);
    el.querySelector('[data-green-status]').textContent=el.dataset.greenStage==='matching'
      ?(pole?'値と傾きが一致し、一つの束縛状態につながる。':'接続点の値は一致するが、左右の傾きは異なる。')
      :(pole?'E = −1 での極限。二つの曲線は一致する。':'エネルギーを E = −1 に近づけると、極の係数の形に近づく。');
  });
  roots.forEach(el=>{
    el.querySelector('[data-green-energy]').addEventListener('input',e=>update(Number(e.target.value)));
    el.querySelector('[data-green-pole]').addEventListener('click',()=>update(-1));
    el.querySelector('[data-green-reset]').addEventListener('click',()=>update(-1.8));
  });
  update(-1.8);
}
