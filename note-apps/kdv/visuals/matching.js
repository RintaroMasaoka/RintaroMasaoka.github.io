import {fittedRange,placeVerticalTicks} from './plot-range.js';
import {matchingResponse as response,boundEnergy} from './matching-model.js';
export function initMatchingFigure(){
  document.querySelectorAll('[data-endpoint-matching]').forEach(root=>{
    if(root.dataset.initialized)return;root.dataset.initialized='true';
    const slider=root.querySelector('[data-two-energy]');
    const draw=()=>{
      const energy=Number(slider.value),W=response(energy,0).W;
      const samples=Array.from({length:401},(_,i)=>{const x=-4+8*i/400;return {x,...response(energy,x)};});
      const [ymin,ymax]=fittedRange(samples.flatMap(r=>[r.left,r.right]),{includeZero:true,floorSpan:.1});
      root.querySelector('[data-matching-w]').textContent=W===0?'0':W.toPrecision(4);
      root.querySelector('[data-two-energy-output]').textContent=energy.toFixed(3);
      root.querySelector('[data-matching-status]').textContent=Math.abs(W)<1e-9?'Bound state: coincident profiles.':'Independent solutions.';
      const style=getComputedStyle(root);
      const insetLeft=parseFloat(style.getPropertyValue('--plot-left'))||44;
      const insetRight=parseFloat(style.getPropertyValue('--plot-right'))||28;
      for(const svg of root.querySelectorAll('[data-matching-panel]')){
        const range=4,left=insetLeft,right=svg.clientWidth-insetRight,top=10;
        const plotHeight=Math.max(170,Math.min(320,(right-left)*.5)),bottom=top+plotHeight;
        svg.setAttribute('height',bottom+44);
        svg.querySelector('[data-matching-clip]').setAttribute('height',plotHeight);
        for(const label of svg.querySelectorAll('[data-matching-x]'))label.setAttribute('y',bottom+14);
        svg.querySelector('[data-matching-axis]').setAttribute('y',bottom-23);
        const X=x=>left+(x+range)*(right-left)/(2*range),Y=y=>bottom-(y-ymin)*(bottom-top)/(ymax-ymin);
        svg.querySelector('[data-matching-clip]').setAttribute('width',Math.max(0,right-left));
        svg.querySelector('[data-matching-axes]').setAttribute('d',`M${left} ${top} V${bottom} H${right}`);
        svg.querySelector('[data-matching-guides]').setAttribute('d',`M${X(0)} ${top} V${bottom} M${left} ${Y(0)} H${right}`);
        for(const side of ['left','right']){
          const d=samples.map((r,i)=>`${i?'L':'M'}${X(r.x).toFixed(2)},${Y(r[side]).toFixed(2)}`).join(' ');
          svg.querySelector(`[data-matching-${side}]`).setAttribute('d',d);
        }
        for(const el of svg.querySelectorAll('[data-matching-x]'))el.setAttribute('x',X(Number(el.dataset.matchingX))-21);
        placeVerticalTicks(svg,'[data-plot-tick]',Y,ymin,ymax,[0]);
        svg.querySelector('[data-matching-axis]').setAttribute('x',right+2);
      }
    };
    const button=root.querySelector('[data-bound-state]');
    const update=energy=>{slider.value=String(energy);button.setAttribute('aria-pressed',String(energy===boundEnergy));draw();};
    slider.addEventListener('input',()=>update(Number(slider.value)));
    button.addEventListener('click',()=>update(boundEnergy));
    new ResizeObserver(draw).observe(root);update(boundEnergy);
  });
}
