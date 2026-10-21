import assert from 'node:assert/strict';
import {boundStateSample as sample, boundStatePaths} from '../visuals/bound-states.js';
let initial=0, ode=0, norm=0, orthogonal=0, kdv=0;
for(let j=0;j<=100;j++) {
 const x=-5+j*.1, v=sample(x,0);
 initial=Math.max(initial,Math.abs(v.u+12/Math.cosh(x)**2));
}
for(const t of [0,.12,.45]) {
 const integrals=Array(3).fill(0), overlap=Array(3).fill(0), dx=.006;
 for(let j=0;j<=10000;j++) {
  const x=-15+j*dx, {psi}=sample(x,t), w=j===0||j===10000?.5:1;
  psi.forEach((v,i)=>integrals[i]+=w*v*v*dx);
  overlap[0]+=w*psi[0]*psi[1]*dx;overlap[1]+=w*psi[0]*psi[2]*dx;overlap[2]+=w*psi[1]*psi[2]*dx;
 }
 norm=Math.max(norm,...integrals.map(v=>Math.abs(v-1)));
 orthogonal=Math.max(orthogonal,...overlap.map(Math.abs));
 for(let j=0;j<100;j++) {
  const x=-3+j*.23, h=.003, v=sample(x,t), l=sample(x-h,t), r=sample(x+h,t);
  v.psi.forEach((p,i)=>{ode=Math.max(ode,Math.abs(-(r.psi[i]-2*p+l.psi[i])/h**2+v.u*p+(i+1)**2*p));});
  const hh=.006, f=n=>sample(x+n*hh,t).u;
  const ux=(-f(-3)+9*f(-2)-45*f(-1)+45*f(1)-9*f(2)+f(3))/(60*hh);
  const uxxx=(f(-3)-8*f(-2)+13*f(-1)-13*f(1)+8*f(2)-f(3))/(8*hh**3);
  const dt=1e-5, ut=(sample(x,t+dt).u-sample(x,t-dt).u)/(2*dt);
  kdv=Math.max(kdv,Math.abs(ut-6*v.u*ux+uxxx));
 }
 for(const d of boundStatePaths(t)){assert(!/NaN|Infinity/.test(d));const ys=[...d.matchAll(/[ML][\d.]+,(-?[\d.]+)/g)].map(m=>Number(m[1]));assert(ys.every(y=>y>=7&&y<=345),'plotted curve leaves its panel');}
}
assert(initial<1e-8,`initial ${initial}`);
assert(ode<.0005,`Schrodinger residual ${ode}`);
assert(norm<1e-8,`norm ${norm}`);
assert(orthogonal<1e-8,`orthogonality ${orthogonal}`);
assert(kdv<.03,`KdV residual ${kdv}`);
console.log(JSON.stringify({initialPotentialError:initial,schrodingerResidual:ode,normError:norm,overlapError:orthogonal,kdvResidual:kdv},null,2));
