export function initKdvSimulations() {
  document.querySelectorAll('[data-kdv-numerical]:not([data-sim-ready])').forEach(figure=>{
    figure.dataset.simReady='true';
    const play=figure.querySelector('[data-sim-play]'),reset=figure.querySelector('[data-sim-reset]'),speed=figure.querySelector('[data-sim-speed]'),seek=figure.querySelector('[data-sim-seek]'),time=figure.querySelector('[data-sim-time]'),curve=figure.querySelector('[data-sim-curve]'),status=figure.querySelector('[data-sim-status]');
    let frames=null,worker=null,running=false,position=0,last=0,raf=0;
    play.disabled=false;
    const draw=()=>{
      const index=Math.min(160,Math.max(0,Math.round(position)));seek.value=String(index);time.value=(index*.05).toFixed(2);time.textContent=time.value;
      if(frames)curve.setAttribute('d',Array.from(frames[index],(v,j)=>`${j?'L':'M'}${(62+j*500/512).toFixed(2)},${(245-v*52).toFixed(2)}`).join(' '));
      figure.dataset.simFrame=String(index);
    };
    const pause=()=>{running=false;cancelAnimationFrame(raf);last=0;play.textContent='Play';play.setAttribute('aria-pressed','false');};
    const tick=now=>{
      if(!running)return;
      if(last)position+=Math.min(now-last,100)/1000*20*Number(speed.value);
      last=now;draw();
      if(position>=160){pause();status.textContent='End of playback. Press Play to restart or use the time slider.';return;}
      raf=requestAnimationFrame(tick);
    };
    const start=()=>{if(position>=160)position=0;running=true;last=0;play.textContent='Pause';play.setAttribute('aria-pressed','true');status.textContent='Playing. Use the time slider to select a frame.';raf=requestAnimationFrame(tick);};
    play.addEventListener('click',()=>{
      if(frames){if(running){pause();status.textContent='Paused. Use the time slider to select a frame.';}else start();return;}
      play.disabled=true;play.textContent='Computing…';status.textContent='Computing from the initial profile…';
      try {
        worker=new Worker(new URL('./kdv-worker.js',import.meta.url),{type:'module'});
        const fail=()=>{worker?.terminate();worker=null;play.disabled=false;play.textContent='Retry';status.textContent='Computation failed. Press Retry.';};
        worker.onerror=fail;
        worker.onmessage=({data})=>{
          if(data.type==='progress'){status.textContent=`Computing from the initial profile… ${Math.round(data.value*100)}%`;return;}
          if(data.type!=='ready'){fail();return;}
          frames=data.frames;worker.terminate();worker=null;play.disabled=false;reset.disabled=false;seek.disabled=false;speed.disabled=false;
          figure.querySelector('[data-sim-diagnostics]').textContent=`計算区間全体での最大相対変化：∫η dx は ${data.maxMassDrift.toExponential(1)}、∫η² dx は ${data.maxSquareDrift.toExponential(1)}。これらは保存量の変化であり、解そのものの誤差ではない。`;
          figure.dataset.simComputed='true';draw();start();
        };
        worker.postMessage({mode:figure.dataset.kdvNumerical});
      }catch{play.disabled=false;play.textContent='Retry';status.textContent='Unable to start computation in this browser.';}
    });
    reset.addEventListener('click',()=>{pause();position=0;draw();status.textContent='Reset to the initial profile.';});
    seek.addEventListener('input',()=>{pause();position=Number(seek.value);draw();status.textContent='Showing the selected time.';});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&running){pause();status.textContent='Paused.';}});
    // Stop off-screen playback so reading elsewhere does not leave motion running.
    new IntersectionObserver(entries=>{if(!entries[0].isIntersecting&&running){pause();status.textContent='Paused.';}}).observe(figure);
    draw();
  });
}
