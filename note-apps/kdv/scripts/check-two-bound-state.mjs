import assert from 'node:assert/strict';
import {twoBoundResponse as response,joinedProfile,matchingData,profileScales,energyRange,boundEnergies} from '../visuals/two-bound-state.js';
const h=1e-3;
let maxResidual=0,maxWError=0,maxPointError=0;
for(let i=0;i<=170;i++){
 const E=energyRange[0]+(energyRange[1]-energyRange[0])*i/170,scales=profileScales(E);
 for(let j=0;j<=80;j++){
  const x=-4+j*.1,r=response(E,x),a=response(E,x-h),b=response(E,x+h);
  for(const side of ['left','right']){
   assert.ok(Number.isFinite(r[side])&&Math.abs(r[side]/scales[side])<1.001,'scaled profile clipped');
   const residual=(-(b[side]-2*r[side]+a[side])/(h*h)+(-6/Math.cosh(x)**2-E)*r[side])/(1+Math.abs(r[side]));
   maxResidual=Math.max(maxResidual,Math.abs(residual));
  }
  maxWError=Math.max(maxWError,Math.abs(r.left*r.rightDx-r.leftDx*r.right-r.W));
 }
 for(const c of [-2,-1,-.5,0,.5,1,2]){
  const r=response(E,c),m=matchingData(E,c);
  const leftValue=r.left*r.right,rightValue=r.right*r.left;
  assert.equal(leftValue,rightValue);
  maxPointError=Math.max(maxPointError,Math.abs(r.left*r.rightDx-r.leftDx*r.right-m.jump));
  for(const x of [-4,c,4])assert.ok(Number.isFinite(joinedProfile(E,x,c)),'nonfinite product construction');
  if(m.delta!==null)assert.ok(Math.abs(m.delta*m.value-r.W)<1e-12,'point-potential jump');
 }
}
assert.ok(maxResidual<1e-5,{maxResidual});assert.ok(maxWError<1e-10,{maxWError});assert.ok(maxPointError<1e-10);
for(const E of Object.values(boundEnergies)){
 assert.equal(response(E,0).W,0);
 for(let i=0;i<=100;i++){
  const x=-4+i*.08,r=response(E,x);
  const exactLeft=E===boundEnergies.ground?1/(4*Math.cosh(x)**2):-Math.tanh(x)/(2*Math.cosh(x));
  assert.ok(Math.abs(r.left-exactLeft)<1e-10,'exact bound eigenfunction');
  assert.ok(Math.abs(r.right-(E===boundEnergies.ground?1:-1)*r.left)<1e-10,'bound proportionality');
 }
 let norm=0;const step=.005;
 for(let j=0;j<=8000;j++){const x=-20+j*step,w=(j===0||j===8000)?1:j%2?4:2;norm+=w*response(E,x).left**2*step/3;}
 const cn=E===boundEnergies.ground?Math.sqrt(12):Math.sqrt(6),de=1e-6;
 assert.ok(Math.abs(norm*cn*cn-1)<1e-9,'independent L2 normalization');
 for(const c of [-1.6,-.8,.3,1.3]){
  const at=response(E,c),psi=cn*at.left;
  const derivative=(matchingData(E+de,c).delta-matchingData(E-de,c).delta)/(2*de);
  assert.ok(Math.abs(derivative*psi*psi-1)<1e-5,'point-potential energy response');
  for(const x of [-1.2,.4,1.6]){
   const psiX=cn*response(E,x).left;
   const coefficient=psi*psiX/at.left;
   assert.ok(Math.abs(coefficient-cn*psiX)<1e-12,'matching-point independent residue');
  }
 }
}
assert.ok(Math.abs(joinedProfile(boundEnergies.excited,.8,0))<1e-12,'excited-state node gives the zero product construction');
assert.ok(response(boundEnergies.excited,-.5).left*response(boundEnergies.excited,.5).left<0,'excited node');
assert.ok(response(boundEnergies.ground,-.5).left*response(boundEnergies.ground,.5).left>0,'ground state has no node');
console.log({energyRange,boundEnergies,maxResidual,maxWError,maxPointError,matchingPointsTested:7,residue:'independent of matching point'});

// Structural layout contract: no device-specific preview is an acceptance step.
// A container owns the width; plot coordinates follow that width on resize.
const {readFile}=await import('node:fs/promises');
for(const [component,runtime] of [['MatchingFigure.astro','matching.js'],['PointSpectrum.astro','point-spectrum.js']]){
 const source=await readFile(new URL(`../components/${component}`,import.meta.url),'utf8');
 const js=await readFile(new URL(`../visuals/${runtime}`,import.meta.url),'utf8');
 assert.ok(source.includes('min-inline-size:0;width:100%;'));
 assert.ok(source.includes('inline-size:100%;max-inline-size:100%'));
 assert.ok(!/overflow-x\s*:\s*(auto|scroll)|min-width\s*:\s*\d+px|viewBox=/.test(source),'fixed canvas or horizontal scrolling');
 assert.ok(source.includes('<FigureViewport')&&js.includes('.clientWidth')&&js.includes('ResizeObserver(draw)'),'coordinates must use untransformed design space');
}
const controls=await readFile(new URL('../components/BoundStateControls.astro',import.meta.url),'utf8');
assert.ok(controls.includes('display:flex;flex-wrap:wrap'),'controls must reflow within the available width');
console.log('Container-sized plots and intrinsic control reflow: structural layout contract passed.');

const matchSource=await readFile(new URL('../components/MatchingFigure.astro',import.meta.url),'utf8');
const joinSource=await readFile(new URL('../components/PointSpectrum.astro',import.meta.url),'utf8');
assert.ok(matchSource.includes('data-w-spectrum')&&matchSource.includes('data-w-root'),'the full energy comparison must exist');
assert.ok(!matchSource.includes('data-matching-left-slope')&&!matchSource.includes('f_-(0,-k)'),'Wronskian plot must not normalize at a matching point');
assert.ok(!joinSource.includes('data-point-position')&&joinSource.includes('f(x;E)'),'joined wave must keep its origin fixed');

assert.ok(!matchSource.includes('\\\\log'),'Jost figure must use signed linear profiles');
