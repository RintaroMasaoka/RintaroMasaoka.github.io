import assert from 'node:assert/strict';
import {determinantSample as sample,determinantPaths} from '../visuals/determinant.js';
let residual=0,quadrature=0;
for(let t=-.5;t<=.5;t+=.1)for(let x=-12;x<=12;x+=.15){
 const h=.002,dt=.00001,u=sample(x,t).u;
 const ux=(sample(x+h,t).u-sample(x-h,t).u)/(2*h);
 const uxxx=(sample(x+2*h,t).u-2*sample(x+h,t).u+2*sample(x-h,t).u-sample(x-2*h,t).u)/(2*h**3);
 const ut=(sample(x,t+dt).u-sample(x,t-dt).u)/(2*dt);
 residual=Math.max(residual,Math.abs(ut-6*u*ux+uxxx));
 assert(Math.abs(sample(x,t).weights.reduce((a,b)=>a+b,0)-1)<1e-12);
 assert(sample(x,t).weights.every(p=>p>=0&&p<=1));
}
// Spectral trace integral: integral u dx = -4(kappa1+kappa2) = -12.
const dx=.005;
for(let x=-30;x<=30;x+=dx)quadrature+=sample(x,0).u*dx;
assert(Math.abs(quadrature+12)<1e-8);
assert(residual<.01);
for(const t of [-.6,0,.6])assert(determinantPaths(t).every(d=>!d.includes('NaN')));
console.log({maxKdVResidual:residual,integralPotential:quadrature});
