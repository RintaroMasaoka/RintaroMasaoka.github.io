import assert from 'node:assert/strict';
import {scatteringState,boundState,scatteringPotential} from '../visuals/scattering-state.js';
const abs2=z=>z[0]**2+z[1]**2;
let maxFlux=0,maxBoundary=0,maxResidual=0;
for(const k of [.35,.5,.65,1,1.7,2.5]){
 const state=scatteringState(k),fine=scatteringState(k,{step:.0025});
 maxFlux=Math.max(maxFlux,Math.abs(abs2(state.a)+abs2(state.b)-1));
 for(let j=0;j<2;j++)assert.ok(Math.abs(state.a[j]-fine.a[j])<2e-8&&Math.abs(state.b[j]-fine.b[j])<2e-8,'step convergence');
 for(const x of [-12,12]){
  const y=state.at(x),far=state.farField(x);maxBoundary=Math.max(maxBoundary,Math.hypot(y[0]-far[0],y[1]-far[1]));
 }
 for(const x of [-8,-3,0,2,8])for(const kind of ['plus','minus','scattering']){
  const h=.02,y=state.at(x,kind),l=state.at(x-h,kind),r=state.at(x+h,kind);
  for(let j=0;j<2;j++)maxResidual=Math.max(maxResidual,Math.abs(-(r[j]-2*y[j]+l[j])/h**2+scatteringPotential(x)*y[j]-k*k*y[j]));
 }
 // At the normalizing endpoint both the value AND derivative match e^{ikx}.
 for(const [kind,x] of [['minus',-12],['plus',12]]){
  const y=state.at(x,kind),expected=[Math.cos(k*x),Math.sin(k*x),-k*Math.sin(k*x),k*Math.cos(k*x)];
  assert.ok(y.every((v,j)=>Math.abs(v-expected[j])<1e-8),'Jost endpoint');
 }
}
assert.ok(maxFlux<2e-8,'flux conservation');assert.ok(maxBoundary<1e-8,'physical incidence/transmission normalization');assert.ok(maxResidual<.002,'independent ODE finite differences');
const bound=boundState();let norm=0;const h=.002,n=40000;
for(let j=0;j<=n;j++){const x=-40+j*h;norm+=(j===0||j===n?1:j%2?4:2)*bound.at(x)**2;}
norm*=h/3;assert.ok(Math.abs(norm-1)<1e-10,'bound norm');
assert.ok(Math.abs(bound.kappa*(bound.kappa+1)-1)<1e-14,'ground eigenvalue');
for(const x of [-15,-10,-1,0,1,10]){
 const h=.0005,f=bound.at(x),fxx=(bound.at(x+h)-2*f+bound.at(x-h))/h**2;
 assert.ok(Math.abs(-fxx+scatteringPotential(x)*f-bound.energy*f)<1e-7,'bound Schrodinger');
}
assert.ok(Math.abs(bound.at(-12)/bound.asymptote(-12)-1)<1e-9,'left-tail amplitude');
console.log({maxFlux,maxBoundary,maxResidual,boundNorm:norm,kappa:bound.kappa,leftTail:bound.tail});
