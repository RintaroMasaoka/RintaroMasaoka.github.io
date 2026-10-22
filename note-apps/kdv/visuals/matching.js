import {response} from './green-response.js';

export function initMatchingFigure(){
  document.querySelectorAll('[data-endpoint-matching]').forEach(root=>{
    if(root.dataset.initialized)return;
    root.dataset.initialized='true';
    const slider=root.querySelector('input');
    const draw=()=>{
      const energy=Number(slider.value),atZero=response(energy,0);
      root.querySelector('[data-matching-energy]').textContent=energy.toFixed(3);
      root.querySelector('[data-matching-w]').textContent=atZero.W.toFixed(4);
      root.querySelector('[data-matching-left-slope]').textContent=atZero.slope.toFixed(3);
      root.querySelector('[data-matching-right-slope]').textContent=(-atZero.slope).toFixed(3);
      root.querySelector('[data-matching-status]').textContent=Math.abs(energy+1)<1e-9
        ?'Same value and slope: the two solutions coincide.'
        :'Same value, different slopes: the two solutions are distinct.';
      for(const svg of root.querySelectorAll('[data-matching-panel]')){
        const full=svg.dataset.matchingPanel==='full',range=full?3:.1;
        const ymin=full?-8:.8,ymax=full?16:1.2;
        const left=44,right=svg.getBoundingClientRect().width-28,top=10,bottom=180;
        const X=x=>left+(x+range)*(right-left)/(2*range);
        const Y=y=>bottom-(y-ymin)*(bottom-top)/(ymax-ymin);
        svg.querySelector('[data-matching-clip]').setAttribute('width',Math.max(0,right-left));
        svg.querySelector('[data-matching-axes]').setAttribute('d',`M${left} ${top} V${bottom} H${right}`);
        svg.querySelector('[data-matching-guides]').setAttribute('d',`M${X(0)} ${top} V${bottom} M${left} ${Y(full?0:1)} H${right}`);
        for(const side of ['left','right']){
          const d=Array.from({length:241},(_,i)=>{
            const x=-range+2*range*i/240;
            return `${i?'L':'M'}${X(x).toFixed(2)},${Y(response(energy,x)[side]).toFixed(2)}`;
          }).join(' ');
          svg.querySelector(`[data-matching-${side}]`).setAttribute('d',d);
        }
        for(const el of svg.querySelectorAll('[data-matching-x]'))el.setAttribute('x',X(Number(el.dataset.matchingX))-21);
        for(const el of svg.querySelectorAll('[data-matching-y]'))el.setAttribute('y',Y(Number(el.dataset.matchingY))-12.5);
        svg.querySelector('[data-matching-axis]').setAttribute('x',right+2);
        svg.querySelector('[data-matching-point]').setAttribute('cx',X(0));
        svg.querySelector('[data-matching-point]').setAttribute('cy',Y(1));
      }
    };
    const publish=()=>{draw();document.dispatchEvent(new CustomEvent('kdv:matching-energy',{detail:Number(slider.value)}));};
    slider.addEventListener('input',publish);
    document.addEventListener('kdv:matching-energy',event=>{slider.value=String(event.detail);draw()});
    root.querySelector('[data-matching-bound]').addEventListener('click',()=>{slider.value='-1';publish()});
    new ResizeObserver(draw).observe(root);
    draw();
  });
}
