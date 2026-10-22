import {scatteringState,boundState,scatteringPotential} from './scattering-state.js';
const coefficient=z=>`${z[0].toFixed(3)} ${z[1]<0?'−':'+'} ${Math.abs(z[1]).toFixed(3)}i`;
export default function initScatteringIntro(){
 document.querySelectorAll('[data-scattering-intro]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='true';
  const mode=root.dataset.scatteringIntro,slider=root.querySelector('input');
  let kind=mode==='data'?'scattering':'minus',state,lastK;
  const bound=boundState();
  const draw=()=>{
   const k=Number(slider.value),isBound=kind==='bound';
   if(!isBound&&lastK!==k){state=scatteringState(k);lastK=k;}
   root.querySelector('[data-scattering-k-value]').textContent=k.toFixed(2);
   root.querySelector('[data-scattering-k-control]').hidden=isBound;
   for(const caption of root.querySelectorAll('[data-state-caption]'))caption.hidden=caption.dataset.stateCaption!==kind;
   for(const button of root.querySelectorAll('[data-scattering-tab]'))button.setAttribute('aria-pressed',String(button.dataset.scatteringTab===kind));
   root.querySelector('[data-scattering-open]').hidden=mode!=='data'||isBound;
   root.querySelector('[data-scattering-bound]').hidden=!isBound;
   for(const label of root.querySelectorAll('[data-scattering-label]')){
    const name=label.dataset.scatteringLabel;
    label.hidden=!(name===kind||(isBound&&name==='bound-asymptote')||(!isBound&&mode==='data'&&['incident','transmitted'].includes(name)));
   }
   if(state){root.querySelector('[data-coefficient-a]').textContent=coefficient(state.a);root.querySelector('[data-coefficient-b]').textContent=coefficient(state.b);}
   root.querySelector('[data-bound-kappa]').textContent=bound.kappa.toFixed(4);
   root.querySelector('[data-bound-tail]').textContent=bound.tail.toFixed(4);
   root.querySelector('[data-bound-energy]').textContent=bound.energy.toFixed(4);
   const status=root.querySelector('[data-scattering-status]');if(status)status.textContent=kind==='minus'?'Left normalization: the solid and dashed curves agree at the left.':'Right normalization: the solid and dashed curves agree at the right.';
   const svg=root.querySelector('[data-scattering-wave]'),width=svg.getBoundingClientRect().width;
   const left=46,right=width-28,top=12,bottom=182,X=x=>left+(x+8)*(right-left)/16;
   const samples=Array.from({length:641},(_,j)=>-8+j/40);
   const value=x=>isBound?bound.at(x):state.at(x,kind)[0];
   const reference=x=>isBound?bound.asymptote(x):mode==='jost'?Math.cos(k*x):state.farField(x)[0];
   const values=samples.flatMap(x=>[value(x),...(isBound?(x<=-2?[reference(x)]:[]):[reference(x)])]);
   let min=Math.min(0,...values),max=Math.max(0,...values),span=Math.max(.5,max-min);min-=span*.08;max+=span*.08;
   const Y=y=>bottom-(y-min)*(bottom-top)/(max-min);
   root.dataset.ymin=min;root.dataset.ymax=max;
   const path=(fn,valid=()=>true)=>{let active=false;return samples.map(x=>{if(!valid(x)){active=false;return ''}const p=`${active?'L':'M'}${X(x).toFixed(2)},${Y(fn(x)).toFixed(2)}`;active=true;return p}).join(' ')};
   svg.querySelector('[data-wave-clip]').setAttribute('width',Math.max(0,right-left));svg.querySelector('[data-wave-clip]').setAttribute('x',left);svg.querySelector('[data-wave-clip]').setAttribute('height',bottom-top);
   svg.querySelector('[data-wave-curve]').setAttribute('d',path(value));
   svg.querySelector('[data-wave-reference]').setAttribute('d',path(reference,x=>mode==='jost'||(isBound?x<=-2:Math.abs(x)>=5)));
   svg.querySelector('[data-wave-axes]').setAttribute('d',`M${left} ${top} V${bottom} H${right}`);
   svg.querySelector('[data-wave-zero]').setAttribute('d',`M${left} ${Y(0)} H${right}`);
   for(const tick of svg.querySelectorAll('[data-wave-x]'))tick.setAttribute('x',X(Number(tick.dataset.waveX))-18);
   let previous=-Infinity;
   for(const tick of svg.querySelectorAll('[data-wave-y]')){
    const v=Number(tick.dataset.waveY),y=Y(v);const show=v>=min&&v<=max&&Math.abs(y-previous)>=25;
    tick.style.display=show?'':'none';if(show){tick.setAttribute('y',y-11);previous=y;}
   }
   svg.querySelector('foreignObject[data-wave-axis]').setAttribute('x',right+2);
   const endpoint=svg.querySelector('[data-wave-endpoint]');endpoint.hidden=mode!=='jost';endpoint.style.display=mode==='jost'?'':'none';
   endpoint.setAttribute('x',X(kind==='minus'?-8:5));endpoint.setAttribute('width',X(-5)-X(-8));
   endpoint.setAttribute('y',top);endpoint.setAttribute('height',bottom-top);
   const potential=root.querySelector('[data-scattering-potential]');
   const U=y=>25-y*48;
   potential.querySelector('[data-potential-axes]').setAttribute('d',`M${left} 12 V78 M${left} 25 H${right}`);
   const energyLine=potential.querySelector('[data-potential-energy]');energyLine.style.display=isBound?'':'none';energyLine.setAttribute('d',`M${left} ${U(bound.energy)} H${right}`);
   potential.querySelector('[data-potential-curve]').setAttribute('d',samples.map((x,j)=>`${j?'L':'M'}${X(x).toFixed(2)},${U(scatteringPotential(x)).toFixed(2)}`).join(' '));
   const channels=root.querySelector('[data-open-channels]');if(channels){
    channels.style.display=isBound?'none':'';
    const middle=X(0),ends={incident:[left,middle-16,30],reflected:[middle-16,left,72],transmitted:[middle+16,right,72]};
    for(const [name,[from,to,y]]of Object.entries(ends)){
     channels.querySelector(`[data-channel-arrow="${name}"]`).setAttribute('d',`M${from} ${y} H${to}`);
     const label=channels.querySelector(`[data-channel-label="${name}"]`);label.setAttribute('x',(from+to)/2-70);label.setAttribute('y',y-27);
    }
    channels.querySelector('[data-channel-origin]').setAttribute('x',middle-25);
   }
  };
  slider.addEventListener('input',draw);
  for(const button of root.querySelectorAll('[data-scattering-tab]'))button.addEventListener('click',()=>{kind=button.dataset.scatteringTab;draw()});
  new ResizeObserver(draw).observe(root);draw();
 });
}
