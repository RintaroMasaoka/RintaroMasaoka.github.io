export const boundState=x=>1/(Math.sqrt(2)*Math.cosh(x));
export const boundNumerator=(x,source)=>boundState(x)*boundState(source);
export function initGreenKernel(){
  document.querySelectorAll('[data-green-kernel]:not([data-ready])').forEach(root=>{
    root.setAttribute('data-ready','');
    const slider=root.querySelector('[data-source-position-slider]');
    const draw=()=>{
      const source=Number(slider.value),overlap=boundState(source);
      root.querySelector('[data-source-position]').textContent=source.toFixed(1);
      root.querySelector('[data-source-overlap]').textContent=overlap.toFixed(3);
      for(const svg of root.querySelectorAll('[data-kernel-plot]')){
        const width=svg.clientWidth,left=40,right=width-18,bottom=136,top=10;
        const X=x=>left+(x+4)*(right-left)/8,Y=y=>bottom-y*(bottom-top)/.8;
        const factor=svg.dataset.kernelPlot==='input'?1:overlap;
        const path=Array.from({length:161},(_,i)=>{const x=-4+i/20;return `${i?'L':'M'}${X(x).toFixed(2)},${Y(factor*boundState(x)).toFixed(2)}`}).join(' ');
        svg.querySelector('[data-kernel-curve]').setAttribute('d',path);
        svg.querySelector('[data-kernel-axes]').setAttribute('d',`M${left} ${top} V${bottom} H${right}`);
        for(const label of svg.querySelectorAll('[data-kernel-x]'))label.setAttribute('x',X(Number(label.dataset.kernelX))-17);
        svg.querySelector('[data-kernel-axis-name]').setAttribute('x',right-10);
        const guide=svg.querySelector('[data-source-guide]');
        if(guide){
          guide.setAttribute('d',`M${X(source)} ${bottom} V${Y(overlap)}`);
          svg.querySelector('[data-source-marker]').setAttribute('x',X(source)-4);
          const dot=svg.querySelector('[data-overlap-marker]');dot.setAttribute('cx',X(source));dot.setAttribute('cy',Y(overlap));
        }
      }
      root.querySelector('[data-kernel-status]').textContent=Math.abs(source)<.05
        ?'点源位置と下段の曲線のピークが原点で一致し、下段の振幅は最大になる。'
        :`点源は${source<0?'左':'右'}側にあり、下段の曲線のピークは原点にある。`;
    };
    slider.addEventListener('input',draw);
    root.querySelector('[data-center-source]').addEventListener('click',()=>{slider.value='0';draw()});
    new ResizeObserver(draw).observe(root);
    draw();
  });
}
