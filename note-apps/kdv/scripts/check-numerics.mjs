import assert from 'node:assert/strict';
import { createSolver, fft } from '../visuals/kdv-solver.js';
// Check FFT against a direct DFT, including its sign and inverse normalization.
const re=Float64Array.from({length:32},(_,j)=>Math.sin(j*.7)+j/32),im=new Float64Array(32),original=re.slice();
fft(re,im);
for(let k=0;k<32;k++){let r=0,s=0;for(let j=0;j<32;j++){r+=original[j]*Math.cos(-2*Math.PI*j*k/32);s+=original[j]*Math.sin(-2*Math.PI*j*k/32);}assert(Math.abs(re[k]-r)<1e-11);assert(Math.abs(im[k]-s)<1e-11);}
fft(re,im,true);re.forEach((v,j)=>assert(Math.abs(v-original[j])<1e-12));
const results={};
for(const dt of [.02,.01,.005]){
 const s=createSolver({mode:'single',dt});s.step(Math.round(48/dt));let maxError=0;
 for(let j=0;j<s.n;j++){const x=-50+j*100/s.n;maxError=Math.max(maxError,Math.abs(s.v[j]-2/Math.cosh(x-20+48)**2));}
 assert.equal(s.diagnostics().time,48);
 results[dt]={maxError,...s.diagnostics()};
}
assert(results[.01].maxError<.003);
assert(results[.005].maxError<results[.01].maxError*.4);
assert(results[.01].maxError<results[.02].maxError*.4);
for(const mode of ['collision','breakup']){
 const coarse=createSolver({mode}),fine=createSolver({mode,n:1024,dt:.005}),initial=coarse.diagnostics();
 let massDrift=0,squareDrift=0,maxDifference=0,min=0,max=0;
 for(let frame=0;frame<240;frame++){
  coarse.step(20);fine.step(40);const d=coarse.diagnostics();
  massDrift=Math.max(massDrift,Math.abs(d.mass/initial.mass-1));squareDrift=Math.max(squareDrift,Math.abs(d.square/initial.square-1));
  for(let j=0;j<512;j++){maxDifference=Math.max(maxDifference,Math.abs(coarse.v[j]-fine.v[2*j]));min=Math.min(min,coarse.v[j]);max=Math.max(max,coarse.v[j]);}
 }
 assert(massDrift<1e-10);assert(squareDrift<.0001);assert(maxDifference<.03);assert(min>-.4&&max<3.8);
 assert.equal(coarse.diagnostics().time,48);
 assert.equal(fine.diagnostics().time,48);
 results[mode]={massDrift,squareDrift,maxDifference,min,max,time:coarse.diagnostics().time};
}
// Exercise the actual browser worker contract, including its sampling times.
// This catches a solver-time change that was not propagated into saved frames.
const messages=[];
globalThis.self={postMessage:message=>messages.push(message)};
await import('../visuals/kdv-worker.js');
for(const mode of ['collision','breakup']){
 messages.length=0;self.onmessage({data:{mode}});
 const ready=messages.at(-1);assert.equal(ready.type,'ready');
 assert.equal(ready.dt,.01);assert.equal(ready.frames.length,161);
 assert.equal(ready.times.at(-1),32);
 ready.times.forEach((t,i)=>assert(Math.abs(t-i*.2)<1e-12));
 assert(ready.frames.every(f=>f.length===512&&f.every(Number.isFinite)));
 const final=ready.frames.at(-1),peaks=[];
 for(let j=1;j<final.length-1;j++)if(final[j]>final[j-1]&&final[j]>final[j+1]&&final[j]>.25)peaks.push({x:-50+j*100/512,height:final[j]});
 assert(peaks.length>=2);assert(peaks.every(p=>p.x>-45&&p.x<45));
 results[mode].worker={finalTime:ready.times.at(-1),frameCount:ready.frames.length,peaks};
}
delete globalThis.self;
console.log(JSON.stringify({pass:true,scheme:'Strang/FFT + RK4 nonlinear; N=512, dt=.01, L=100, verification t<=48; actual worker t<=32',results},null,2));
