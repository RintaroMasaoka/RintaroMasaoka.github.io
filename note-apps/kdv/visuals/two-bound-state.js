// Exact Jost solutions for u(x)=-6 sech²(x-1), k=i sqrt(-E).
// Their free-wave amplitudes at their respective infinities are one.
export function twoBoundResponse(energy,x){
  const q=Math.sqrt(-energy),t=Math.tanh(x-1),t0=Math.tanh(-1),d=(q+1)*(q+2);
  const p=t=>q*q-1+3*q*t+3*t*t;
  const l0=p(-t0)/d,r0=p(t0)/d;
  const left=Math.exp(q*x)*p(-t)/d/l0,right=Math.exp(-q*x)*p(t)/d/r0;
  const leftSlope=(q*p(-t0)-(3*q-6*t0)*(1-t0*t0))/d/l0;
  const rightSlope=(-q*p(t0)+(3*q+6*t0)*(1-t0*t0))/d/r0;
  const W=(q===1||q===2)?0:-2*q*(q-1)*(q-2)/d;
  return {left,right,leftSlope,rightSlope,W,leftAtZero:l0,rightAtZero:r0};
}
export const joinedProfile=(energy,x)=>twoBoundResponse(energy,x)[x<=0?'left':'right'];
export const boundWindows={ground:[-4.4,-3.8,-4],excited:[-1.75,-.25,-1]};
export function bindBoundControls(root,draw){
  const slider=root.querySelector('[data-two-energy]');
  let state='excited';
  const apply=(next,energy)=>{
    state=next;const [min,max]=boundWindows[state];slider.min=String(min);slider.max=String(max);slider.value=String(energy);
    root.querySelectorAll('[data-bound-window]').forEach(el=>{el.hidden=el.dataset.boundWindow!==state;});
    root.querySelectorAll('[data-bound-state]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.boundState===state)));
    draw();
  };
  const publish=()=>document.dispatchEvent(new CustomEvent('kdv:bound-energy',{detail:{state,energy:Number(slider.value)}}));
  slider.addEventListener('input',()=>{draw();publish()});
  root.querySelectorAll('[data-bound-state]').forEach(button=>button.addEventListener('click',()=>{
    apply(button.dataset.boundState,boundWindows[button.dataset.boundState][2]);publish();
  }));
  document.addEventListener('kdv:bound-energy',event=>apply(event.detail.state,event.detail.energy));
  apply(state,-1);
  return slider;
}
