import {placeVerticalTicks} from './plot-range.js';
import {twoBoundResponse as response,profileScales,bindBoundControls} from './two-bound-state.js';
export function initMatchingFigure(){
  document.querySelectorAll('[data-endpoint-matching]').forEach(root=>{
    if(root.dataset.initialized)return;root.dataset.initialized='true';
    const slider=root.querySelector('[data-two-energy]');
    const draw=()=>{
      const energy=Number(slider.value),W=response(energy,0).W,scales=profileScales(energy);
      root.querySelector('[data-two-energy-output]').textContent=energy.toFixed(3);
      root.querySelector('[data-matching-status]').textContent=Math.abs(W)<1e-9?'Proportional solutions: W = 0.':'Independent solutions: W is nonzero.';
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
