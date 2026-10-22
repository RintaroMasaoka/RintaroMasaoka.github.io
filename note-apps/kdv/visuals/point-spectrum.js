import {fittedRange,placeVerticalTicks} from './plot-range.js';
import {matchingData,joinedProfile,bindBoundControls} from './two-bound-state.js';
export const pointCoupling=energy=>2/Math.sqrt(-energy)-2*Math.sqrt(-energy);
export const pointEnergy=delta=>-(((Math.sqrt(delta*delta+16)-delta)/4)**2);
export function pointProfile(energy,x){const q=Math.sqrt(-energy),r=Math.abs(x);return Math.exp(-q*r)*(q+Math.tanh(r))/q;}

export function initPointSpectrum(){
  document.querySelectorAll('[data-point-spectrum]').forEach(root=>{
    if(root.dataset.initialized)return;root.dataset.initialized='true';
    const slider=root.querySelector('input'),waveMode=root.dataset.pointMode==='wave';
    const pointSlider=root.querySelector('[data-point-position]');
    const draw=()=>{
      const point=pointSlider?Number(pointSlider.value):0;
      if(pointSlider)root.querySelector('[data-point-position-output]').textContent=point.toFixed(2);
      const energy=Number(slider.value),delta=waveMode?matchingData(energy,point).jump:pointCoupling(energy);
      root.querySelector(waveMode?'[data-two-energy-output]':'[data-point-energy]').textContent=energy.toFixed(3);
      const readout=root.querySelector('[data-point-coupling]');if(readout)readout.textContent=delta.toFixed(3);
      root.querySelector('[data-point-status]').textContent=root.dataset.pointMode==='wave'
        ?(Math.abs(delta)<1e-9?'Continuous value and slope at the matching point.':'Continuous value, different slopes at the matching point.')
        :Math.abs(delta)<1e-9?'No point potential: the slope is continuous.':delta>0?'Positive point potential: the slope jumps upward.':'Negative point potential: the slope jumps downward.';
      for(const svg of root.querySelectorAll('svg[data-point-panel]')){
        const wave=svg.dataset.pointPanel==='wave';
        const xmin=wave?-4:-1.25,xmax=wave?4:3.25;
        const samples=Array.from({length:401},(_,i)=>xmin+(xmax-xmin)*i/400);
        const waveValues=wave?[...samples,point].map(x=>joinedProfile(energy,x,point)):[];
        const magnitude=wave?Math.max(...waveValues.map(Math.abs)):1;
        const plotted=x=>magnitude>1e-12?joinedProfile(energy,x,point)/magnitude:0;
        if(wave&&magnitude<=1e-12)root.querySelector('[data-point-status]').textContent='Matching at a node gives the zero function. Choose a nonnodal point.';
        const values=wave?waveValues.map(v=>magnitude>1e-12?v/magnitude:0)
          :samples.flatMap(x=>[pointEnergy(x),-1+x/2]);
        const [ymin,ymax]=fittedRange(values,{includeZero:wave,floorSpan:wave&&magnitude<=1e-12?2:.1});
        svg.dataset.ymin=String(ymin);svg.dataset.ymax=String(ymax);
        const left=46,right=svg.getBoundingClientRect().width-26,top=12,bottom=182;
        const X=x=>left+(x-xmin)*(right-left)/(xmax-xmin),Y=y=>bottom-(y-ymin)*(bottom-top)/(ymax-ymin);
        svg.querySelector('rect').setAttribute('width',Math.max(0,right-left));
        svg.querySelector('[data-point-axes]').setAttribute('d',`M${left} ${top} V${bottom} H${right}`);
        svg.querySelector('[data-point-guides]').setAttribute('d',`M${X(wave?point:0)} ${top} V${bottom} M${left} ${Y(wave?0:-1)} H${right}`);
        const curve=Array.from({length:401},(_,i)=>{const x=wave?xmin+(point-xmin)*i/400:xmin+(xmax-xmin)*i/400;return `${i?'L':'M'}${X(x).toFixed(2)},${Y(wave?plotted(x):pointEnergy(x)).toFixed(2)}`}).join(' ');
        svg.querySelector('[data-point-curve]').setAttribute('d',curve);
        if(wave){const rightPath=Array.from({length:201},(_,i)=>{const x=point+(xmax-point)*i/200;return `${i?'L':'M'}${X(x).toFixed(2)},${Y(plotted(x)).toFixed(2)}`}).join(' ');svg.querySelector('[data-point-right]').setAttribute('d',rightPath);}
        const tangent=svg.querySelector('[data-point-tangent]');if(tangent)tangent.setAttribute('d',`M${X(xmin)} ${Y(-1+xmin/2)} L${X(xmax)} ${Y(-1+xmax/2)}`);
        for(const el of svg.querySelectorAll('[data-point-x]'))el.setAttribute('x',X(Number(el.dataset.pointX))-21);
        placeVerticalTicks(svg,'[data-plot-tick]',Y,ymin,ymax,wave?[0,1]:[-1,0]);
        svg.querySelector('[data-point-axis]').setAttribute('x',right+2);
        const marker=svg.querySelector('[data-point-marker]');marker.setAttribute('cx',X(wave?point:delta));marker.setAttribute('cy',Y(wave?plotted(point):energy));
        const anchor=svg.querySelector('[data-point-anchor]');if(anchor){anchor.setAttribute('cx',X(0));anchor.setAttribute('cy',Y(-1));}
      }
    };
    if(waveMode){bindBoundControls(root,draw);pointSlider.addEventListener('input',draw);}
    else{
      slider.addEventListener('input',draw);
      root.querySelector('button').addEventListener('click',()=>{slider.value='-1';draw()});
    }
    new ResizeObserver(draw).observe(root);draw();
  });
}
