import assert from 'node:assert/strict';
import {determinantSample as sample,determinantRegimeStage,twoSolitonExample as example} from '../visuals/determinant.js';
const {k1,k2,diagonalFactor,mixedCoefficient,snapshotTime,bandHalfWidth,depth}=example;
let residual=0,quadrature=0;
for(let t=-snapshotTime;t<=snapshotTime;t+=.8)for(let x=-18;x<=18;x+=.15){
 const h=.002,dt=.00001,u=sample(x,t).u;
 const ux=(sample(x+h,t).u-sample(x-h,t).u)/(2*h);
 const uxxx=(sample(x+2*h,t).u-2*sample(x+h,t).u+2*sample(x-h,t).u-sample(x-2*h,t).u)/(2*h**3);
 const ut=(sample(x,t+dt).u-sample(x,t-dt).u)/(2*dt);
 residual=Math.max(residual,Math.abs(ut-(uxxx-6*u*ux)/4));
 assert(Math.abs(sample(x,t).weights.reduce((a,b)=>a+b,0)-1)<1e-12);
 assert(sample(x,t).weights.every(p=>p>=0&&p<=1));
 assert(u<=1e-12&&u>=-depth-1e-8,'Color scale must cover the exact potential');
}
for(let x=-35;x<=35;x+=.005)quadrature+=sample(x,0).u*.005;
assert(Math.abs(quadrature+4*(k1+k2))<1e-8);
assert(residual<.01);
for(const t of [-snapshotTime,snapshotTime]){
 const {center,path}=determinantRegimeStage(t);assert(!path.includes('NaN'));
 const boundary=-k2*k2*t-Math.log(diagonalFactor)/(2*k2);
 assert(Math.abs(Math.log(diagonalFactor)+2*k2*boundary+2*k2**3*t)<1e-12);
 assert(t<0?center<boundary:center>boundary,'First valley must lie in the labelled C22 regime');
 for(let x=center-bandHalfWidth;x<=center+bandHalfWidth;x+=.01){
  const c11=diagonalFactor*Math.exp(2*k1*x+2*k1**3*t);
  const c22=diagonalFactor*Math.exp(2*k2*x+2*k2**3*t);
  if(t<0){assert(c22<1e-4);assert(c22*(1+mixedCoefficient*c11)<1e-3);}
  else{assert(c22>1e5);assert((1+c11)/c22<1e-3);}
 }
}
// The selected waves have materially larger shifts than kappa=(1,2).
assert(-Math.log(mixedCoefficient)/(2*k1)>1.9*Math.log(3));
assert(-Math.log(mixedCoefficient)/(2*k2)>3*Math.log(3)/2);
console.log({maxKdVResidual:residual,integralPotential:quadrature,slowShift:-Math.log(mixedCoefficient)/(2*k1),fastShift:Math.log(mixedCoefficient)/(2*k2)});
console.log('Internal example: C22 regimes, discarded-term bounds and heatmap rendering range passed.');
