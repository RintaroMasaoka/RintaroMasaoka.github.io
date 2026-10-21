// Exact two-soliton determinant: kappa=(1,2), C11=3e^(2x-8t), C22=3e^(4x-64t).
export function determinantSample(x,t){
 const logs=[0,Math.log(3)+2*x-8*t,Math.log(3)+4*x-64*t,6*x-72*t];
 const max=Math.max(...logs), terms=logs.map(v=>Math.exp(v-max));
 const sum=terms.reduce((a,b)=>a+b,0), weights=terms.map(v=>v/sum), slopes=[0,2,4,6];
 const mean=weights.reduce((a,p,i)=>a+p*slopes[i],0);
 return {weights,u:-2*weights.reduce((a,p,i)=>a+p*(slopes[i]-mean)**2,0)};
}
export function determinantPaths(t){
 const values=Array.from({length:401},(_,i)=>{const x=-16+i*32/400;return {px:12+i*336/400,...determinantSample(x,t)}});
 const path=fn=>values.map((v,i)=>`${i?'L':'M'}${v.px.toFixed(2)},${fn(v).toFixed(2)}`).join(' ');
 return [path(v=>12-v.u*12),...Array.from({length:4},(_,j)=>path(v=>86-v.weights[j]*72))];
}
export function initDeterminant(){
 document.querySelectorAll('[data-determinant]:not([data-ready])').forEach(root=>{
 root.dataset.ready='true';const slider=root.querySelector('input'), output=root.querySelector('output');
 const update=()=>{const t=Number(slider.value);output.textContent=t.toFixed(2);determinantPaths(t).forEach((d,i)=>root.querySelectorAll('[data-det-path]')[i].setAttribute('d',d));};
 slider.addEventListener('input',update);update();
 });
}
