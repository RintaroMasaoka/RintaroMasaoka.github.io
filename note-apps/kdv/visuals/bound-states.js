// Reflectionless left Marchenko data: kappa=(1,2,3), c(0)^2=(12,60,60).
// r_i=c_i exp(kappa_i x-4 kappa_i^3 t), A_ij=r_i r_j/(kappa_i+kappa_j).
// psi=(I+A)^(-1)r. Solve the diagonally rescaled system to avoid large r.
export const kappas = [1, 2, 3];
export const finalTime = .45;
export const spatialDomain = [-6, 20];
function solve(matrix, rhs) {
  const a=matrix.map((row,i)=>[...row,rhs[i]]), n=rhs.length;
  for(let j=0;j<n;j++) {
    let pivot=j;
    for(let i=j+1;i<n;i++) if(Math.abs(a[i][j])>Math.abs(a[pivot][j])) pivot=i;
    [a[j],a[pivot]]=[a[pivot],a[j]];
    for(let i=j+1;i<n;i++) {
      const ratio=a[i][j]/a[j][j];
      for(let k=j+1;k<=n;k++) a[i][k]-=ratio*a[j][k];
      a[i][j]=0;
    }
  }
  const out=Array(n).fill(0);
  for(let i=n-1;i>=0;i--) out[i]=(a[i][n]-out.reduce((s,v,j)=>j>i?s+a[i][j]*v:s,0))/a[i][i];
  return out;
}
export function boundStateSample(x,t) {
  const r=kappas.map((k,i)=>Math.sqrt([12,60,60][i])*Math.exp(k*x-4*k**3*t));
  const matrix=kappas.map((k,i)=>kappas.map((l,j)=>1/(k+l)+(i===j?1/r[i]**2:0)));
  const h=solve(matrix,[1,1,1]);
  const s=h.reduce((a,b)=>a+b,0), weighted=h.reduce((a,b,i)=>a+kappas[i]*b,0);
  return {u:2*s*s-4*weighted, psi:h.map((v,i)=>v/r[i])};
}
const X=x=>40+(x-spatialDomain[0])/(spatialDomain[1]-spatialDomain[0])*420;
// Common energy-axis display; wavefunction amplitude has a fixed visual factor 2.
export const boundStateY=value=>12+(3-value)*14;
export function boundStatePaths(t) {
  const series=[[],[],[],[]];
  for(let j=0;j<=780;j++) {
    const x=spatialDomain[0]+(spatialDomain[1]-spatialDomain[0])*j/780;
    const {u,psi}=boundStateSample(x,t);
    series[0].push([X(x),boundStateY(u)]);
    psi.forEach((v,i)=>series[i+1].push([X(x),boundStateY(-(kappas[i]**2)+2*v)]));
  }
  return series.map(points=>points.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(3)},${y.toFixed(3)}`).join(' '));
}
export function initBoundStates() {
  document.querySelectorAll('[data-bound-states]:not([data-bound-ready])').forEach(root=>{
    root.setAttribute('data-bound-ready','');
    const slider=root.querySelector('input'), output=root.querySelector('output');
    const play=root.querySelector('[data-bound-play]'), reset=root.querySelector('[data-bound-reset]');
    const plots=[...root.querySelectorAll('[data-bound-curve]')];
    let t=0, playing=false, previous=0, frame=0;
    const draw=()=>{
      boundStatePaths(t).forEach((d,i)=>plots[i].setAttribute('d',d));
      slider.value=String(t); output.textContent=t.toFixed(3);
    };
    const stop=()=>{playing=false;cancelAnimationFrame(frame);play.textContent='再生';play.setAttribute('aria-pressed','false');};
    const tick=now=>{
      if(!playing)return;
      t=Math.min(finalTime,t+Math.min(.1,(now-previous)/1000)*.032); previous=now; draw();
      if(t>=finalTime)stop(); else frame=requestAnimationFrame(tick);
    };
    play.addEventListener('click',()=>{
      if(playing){stop();return;}
      if(t>=finalTime)t=0;
      playing=true;play.textContent='一時停止';play.setAttribute('aria-pressed','true');previous=performance.now();frame=requestAnimationFrame(tick);
    });
    slider.addEventListener('input',()=>{stop();t=Number(slider.value);draw();});
    reset.addEventListener('click',()=>{stop();t=0;draw();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
    draw();
  });
}
