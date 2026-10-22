// Endpoint-normalized Jost solutions for the centered potential u=-6 sech²x.
export const boundEnergies={ground:-4,excited:-1};
const halfWidth=Math.abs(boundEnergies.excited)/2;
export const energyRange=[boundEnergies.excited-halfWidth,boundEnergies.excited+halfWidth];
export function twoBoundResponse(energy,x){
  const q=Math.sqrt(-energy),t=Math.tanh(x),d=(q+1)*(q+2),p=t=>q*q-1+3*q*t+3*t*t;
  let left=Math.exp(q*x)*p(-t)/d,right=Math.exp(-q*x)*p(t)/d;
  let leftDx=Math.exp(q*x)*(q*p(-t)-(3*q-6*t)*(1-t*t))/d;
  let rightDx=Math.exp(-q*x)*(-q*p(t)+(3*q+6*t)*(1-t*t))/d;
  if(q===1){right=.5/Math.cosh(x)*t;left=-right;rightDx=.5/Math.cosh(x)*(1-2*t*t);leftDx=-rightDx;}
  if(q===2){left=right=.25/Math.cosh(x)**2;leftDx=rightDx=-2*t*left;}
  const W=(q===1||q===2)?0:-2*q*(q-1)*(q-2)/d;
  return {left,right,leftDx,rightDx,W,potential:-6*(1-t*t)};
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
