import assert from 'node:assert/strict';
import {twoBoundResponse as response,joinedProfile,boundWindows} from '../visuals/two-bound-state.js';
import {matchingRange} from '../visuals/plot-range.js';
const h=1e-3;
let maxResidual=0,maxWError=0;
for(const [min,max] of Object.values(boundWindows))for(let i=0;i<=100;i++){
 const E=min+(max-min)*i/100,r0=response(E,0),[lo,hi]=matchingRange(E,4,response);
 assert.ok(Math.abs(r0.leftAtZero)>.005&&Math.abs(r0.rightAtZero)>.005,'point normalization singular');
 assert.ok(Math.abs(r0.leftAtZero*r0.rightAtZero*(r0.rightSlope-r0.leftSlope)-r0.W)<1e-12,'W versus normalized slope difference');
 for(let j=0;j<=80;j++){
  const x=-4+j*.1,r=response(E,x),a=response(E,x-h),b=response(E,x+h);
  for(const side of ['left','right']){
   assert.ok(Number.isFinite(r[side])&&r[side]>lo&&r[side]<hi,'profile clipped');
   const residual=(-(b[side]-2*r[side]+a[side])/(h*h)+(-6/Math.cosh(x-1)**2-E)*r[side])/(1+Math.abs(r[side]));
   maxResidual=Math.max(maxResidual,Math.abs(residual));
  }
  const normalizedW=r.left*(b.right-a.right)/(2*h)-(b.left-a.left)/(2*h)*r.right;
  maxWError=Math.max(maxWError,Math.abs(normalizedW*r0.leftAtZero*r0.rightAtZero-r0.W));
 }
}
console.log({maxResidual,maxWError});assert.ok(maxResidual<1e-5);assert.ok(maxWError<1e-5);
for(const E of [-4,-1]){
 assert.equal(response(E,0).W,0);
 for(let i=0;i<=100;i++){
  const x=-4+i*.08,r=response(E,x),z=x-1;
  const exact=E===-4?Math.cosh(1)**2/Math.cosh(z)**2:(Math.tanh(z)/Math.cosh(z))/(Math.tanh(-1)/Math.cosh(1));
  assert.ok(Math.abs(r.left-r.right)<1e-9&&Math.abs(joinedProfile(E,x)-exact)<1e-9);
 }
}
assert.ok(joinedProfile(-1,0)>0&&joinedProfile(-1,2)<0,'excited node');
assert.ok(joinedProfile(-4,0)>0&&joinedProfile(-4,2)>0,'ground state has no node');
console.log({boundEnergies:[-4,-1],maxResidual,maxWError,normalization:'regular in both slider windows'});

// Structural layout contract: no device-specific preview is an acceptance step.
// A container owns the width; plot coordinates follow that width on resize.
const {readFile}=await import('node:fs/promises');
for(const [component,runtime] of [['MatchingFigure.astro','matching.js'],['PointSpectrum.astro','point-spectrum.js']]){
 const source=await readFile(new URL(`../components/${component}`,import.meta.url),'utf8');
 const js=await readFile(new URL(`../visuals/${runtime}`,import.meta.url),'utf8');
 assert.ok(source.includes('min-inline-size:0;width:100%;max-width:480px'));
 assert.ok(source.includes('inline-size:100%;max-inline-size:100%'));
 assert.ok(!/overflow-x\s*:\s*(auto|scroll)|min-width\s*:\s*\d+px|viewBox=/.test(source),'fixed canvas or horizontal scrolling');
 assert.ok(js.includes('getBoundingClientRect().width')&&js.includes('ResizeObserver(draw)'),'coordinates must follow the container');
}
const controls=await readFile(new URL('../components/BoundStateControls.astro',import.meta.url),'utf8');
assert.ok(controls.includes('repeat(auto-fit,minmax(min(100%,11rem),1fr))'),'controls must reflow within the available width');
console.log('Container-sized plots and intrinsic control reflow: structural layout contract passed.');
