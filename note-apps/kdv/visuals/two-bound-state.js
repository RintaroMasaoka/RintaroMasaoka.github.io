// Symmetric reflectionless potential u=-2 d²/dx² log[cosh(2x)+10 cosh(x/5)].
// Two Darboux seeds: cosh(.9x), sinh(1.1x); Jost amplitudes at infinity are one.
const lower=.9,upper=1.1;
export const boundEnergies={ground:-1.21,excited:-.81};
const gap=boundEnergies.excited-boundEnergies.ground;
// Equal half-gap context outside the two eigenvalues, rather than an inherited viewport.
export const energyRange=[Number((boundEnergies.ground-gap/2).toFixed(2)),Number((boundEnergies.excited+gap/2).toFixed(2))];
export function twoBoundResponse(energy,x){
  const q=Math.sqrt(-energy),a=lower,b=upper;
  const c1=Math.cosh(a*x),s1=Math.sinh(a*x),c2=Math.cosh(b*x),s2=Math.sinh(b*x);
  const seed=b*c1*c2-a*s1*s2,diff=b*b-a*a;
  const w=diff*c1*s2/seed;
  const wx=diff*(a*s1*s2+b*c1*c2)/seed-w*w;
  const Q=a*b*(b*s1*s2-a*c1*c2)/seed;
  const Qx=a*b*diff*s1*c2/seed-Q*w,d=(q+a)*(q+b);
  const left=Math.exp(q*x)*(q*q-q*w+Q)/d,right=Math.exp(-q*x)*(q*q+q*w+Q)/d;
  const leftDx=Math.exp(q*x)*(q*(q*q-q*w+Q)-q*wx+Qx)/d;
  const rightDx=Math.exp(-q*x)*(-q*(q*q+q*w+Q)+q*wx+Qx)/d;
  const W=(Math.abs(energy-boundEnergies.ground)<1e-13||Math.abs(energy-boundEnergies.excited)<1e-13)?0:-2*q*(q-a)*(q-b)/d;
  return {left,right,leftDx,rightDx,W,potential:-2*wx};
}
export function joinedProfile(energy,x,point=1){
  const at=twoBoundResponse(energy,point),r=twoBoundResponse(energy,x);
  return x<=point?r.left*at.right:r.right*at.left;
}
export function matchingData(energy,point){
  const r=twoBoundResponse(energy,point),value=r.left*r.right;
  return {value,jump:r.W,delta:Math.abs(value)<1e-14?null:r.W/value};
}
export function profileScales(energy){
  const samples=Array.from({length:401},(_,i)=>twoBoundResponse(energy,-4+8*i/400));
  return {left:Math.max(...samples.map(r=>Math.abs(r.left))),right:Math.max(...samples.map(r=>Math.abs(r.right)))};
}
export function bindBoundControls(root,draw){
  const slider=root.querySelector('[data-two-energy]');
  const update=energy=>{
    slider.value=String(energy);
    root.querySelectorAll('[data-bound-state]').forEach(el=>el.setAttribute('aria-pressed',String(Math.abs(energy-Number(el.dataset.boundEnergy))<1e-9)));
    draw();
  };
  const publish=()=>document.dispatchEvent(new CustomEvent('kdv:bound-energy',{detail:Number(slider.value)}));
  slider.addEventListener('input',()=>{update(Number(slider.value));publish()});
  root.querySelectorAll('[data-bound-state]').forEach(button=>button.addEventListener('click',()=>{update(Number(button.dataset.boundEnergy));publish()}));
  document.addEventListener('kdv:bound-energy',event=>update(event.detail));
  update(boundEnergies.excited);
}
