import {fittedRange,placeVerticalTicks} from './plot-range.js';
import {twoBoundResponse as response,profileScales,energyRange,bindBoundControls} from './two-bound-state.js';
export function initMatchingFigure(){
  document.querySelectorAll('[data-endpoint-matching]').forEach(root=>{
    if(root.dataset.initialized)return;root.dataset.initialized='true';
    const slider=root.querySelector('[data-two-energy]');
    const draw=()=>{
      const energy=Number(slider.value),W=response(energy,0).W,scales=profileScales(energy);
      root.querySelector('[data-two-energy-output]').textContent=energy.toFixed(3);
      root.querySelector('[data-matching-w]').textContent=W===0?'0':W.toPrecision(3);
      root.querySelector('[data-matching-status]').textContent=Math.abs(W)<1e-9?'Proportional solutions: W = 0.':'Independent solutions: W is nonzero.';
      const spectrum=root.querySelector('[data-w-spectrum]');
      const [emin,emax]=energyRange,es=Array.from({length:401},(_,i)=>emin+(emax-emin)*i/400);
      const [wmin,wmax]=fittedRange(es.map(e=>response(e,0).W),{includeZero:true});
      const a=44,b=spectrum.clientWidth-28,top=12,bottom=142;
      const XE=e=>a+(e-emin)*(b-a)/(emax-emin),YW=w=>bottom-(w-wmin)*(bottom-top)/(wmax-wmin);
      spectrum.querySelector('[data-w-axes]').setAttribute('d',`M${a} ${top} V${bottom} H${b}`);
      spectrum.querySelector('[data-w-zero]').setAttribute('d',`M${a} ${YW(0)} H${b}`);
      spectrum.querySelector('[data-w-curve]').setAttribute('d',es.map((e,i)=>`${i?'L':'M'}${XE(e)},${YW(response(e,0).W)}`).join(' '));
      for(const dot of spectrum.querySelectorAll('[data-w-root]')){dot.setAttribute('cx',XE(Number(dot.dataset.wRoot)));dot.setAttribute('cy',YW(0));}
      const selected=spectrum.querySelector('[data-w-selected]');selected.setAttribute('cx',XE(energy));selected.setAttribute('cy',YW(W));
      for(const el of spectrum.querySelectorAll('[data-w-energy]'))el.setAttribute('x',XE(Number(el.dataset.wEnergy))-25);
      spectrum.querySelector('[data-w-energy-axis]').setAttribute('x',b+2);
      placeVerticalTicks(spectrum,'[data-w-tick]',YW,wmin,wmax,[0]);
      for(const svg of root.querySelectorAll('[data-matching-panel]')){
        const range=4,left=44,right=svg.clientWidth-28,top=10,bottom=180;
        const X=x=>left+(x+range)*(right-left)/(2*range),Y=y=>bottom-(y+1.12)*(bottom-top)/2.24;
        svg.querySelector('[data-matching-clip]').setAttribute('width',Math.max(0,right-left));
        svg.querySelector('[data-matching-axes]').setAttribute('d',`M${left} ${top} V${bottom} H${right}`);
        svg.querySelector('[data-matching-guides]').setAttribute('d',`M${X(0)} ${top} V${bottom} M${left} ${Y(0)} H${right}`);
        for(const side of ['left','right']){
          const d=Array.from({length:401},(_,i)=>{const x=-range+2*range*i/400;return `${i?'L':'M'}${X(x).toFixed(2)},${Y(response(energy,x)[side]/scales[side]).toFixed(2)}`}).join(' ');
          svg.querySelector(`[data-matching-${side}]`).setAttribute('d',d);
        }
        for(const el of svg.querySelectorAll('[data-matching-x]'))el.setAttribute('x',X(Number(el.dataset.matchingX))-21);
        placeVerticalTicks(svg,'[data-plot-tick]',Y,-1.12,1.12,[0,1,-1]);
        svg.querySelector('[data-matching-axis]').setAttribute('x',right+2);
      }
    };
    bindBoundControls(root,draw);new ResizeObserver(draw).observe(root);draw();
  });
}
