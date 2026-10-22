import assert from 'node:assert/strict';
import {pointCoupling,pointEnergy,pointProfile} from '../visuals/point-spectrum.js';
for(const E of [-1.5,-1.25,-1,-.75,-.5]){
 const g=pointCoupling(E),f=x=>pointProfile(E,x);
 assert.ok(Math.abs(pointEnergy(g)-E)<1e-12,'inverse energy/coupling');
 const h=1e-4;
 for(const x of [-3,-1,-.1,.1,1,3]){
  const fxx=(f(x+h)-2*f(x)+f(x-h))/(h*h);
  assert.ok(Math.abs(-fxx-2/Math.cosh(x)**2*f(x)-E*f(x))<2e-7,'Schrodinger equation');
 }
 const right=(-3*f(0)+4*f(h)-f(2*h))/(2*h),left=(3*f(0)-4*f(-h)+f(-2*h))/(2*h);
 assert.ok(Math.abs(right-left-g)<1e-7,'derivative jump sign');
 const R=30/Math.sqrt(-E),steps=40000,dx=R/steps;
 let integral=0;
 for(let i=0;i<=steps;i++){const y=f(i*dx);integral+=(i===0||i===steps?1:i%2?4:2)*y*y;}
 integral*=2*dx/3;
 const derivative=(pointEnergy(g+1e-5)-pointEnergy(g-1e-5))/2e-5;
 assert.ok(Math.abs(derivative-1/integral)<2e-8,'energy response equals inverse full norm');
}
assert.ok(Math.abs((pointEnergy(1e-5)-pointEnergy(-1e-5))/2e-5-.5)<1e-10);
console.log('Point potential: ODE, derivative jump, energy inversion, and norm response verified at five energies.');
