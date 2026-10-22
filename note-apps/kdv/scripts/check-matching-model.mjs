import assert from 'node:assert/strict';
import {matchingResponse as response,energyRange,boundEnergy} from '../visuals/matching-model.js';
import {fittedRange} from '../visuals/plot-range.js';
let maxOde=0,maxWError=0;
for(const E of [-1.5,-1.25,-1,-.75,-.5]){
  const q=Math.sqrt(-E),h=1e-4;
  for(const x of [-4,-2,-.3,0,.7,2,4]){
    const r=response(E,x);
    for(const side of ['left','right']){
      const f=z=>response(E,z)[side];
      const err=Math.abs(-(f(x+h)-2*f(x)+f(x-h))/h**2-2/Math.cosh(x)**2*f(x)-E*f(x))/Math.max(1,Math.abs(f(x)));
      maxOde=Math.max(maxOde,err);
    }
    const dx=side=>(response(E,x+h)[side]-response(E,x-h)[side])/(2*h);
    maxWError=Math.max(maxWError,Math.abs(r.left*dx('right')-dx('left')*r.right-r.W));
  }
  assert.ok(Math.abs(response(E,-14).left/Math.exp(-14*q)-1)<2e-12,'left tail amplitude1');
  assert.ok(Math.abs(response(E,14).right/Math.exp(-14*q)-1)<2e-12,'right tail amplitude1');
}
assert.ok(maxOde<2e-6,'Schrodinger equation');
assert.ok(maxWError<2e-7,'raw endpoint-normalized W sign and scale');
for(let i=0;i<=800;i++){
  const x=-4+i*.01,r=response(boundEnergy,x);
  assert.ok(Math.abs(r.left-.5/Math.cosh(x))<1e-14);
  assert.equal(r.left,r.right,'actual Jost values coincide without a sign flip');
  assert.equal(r.W,0);
}
for(let j=0;j<=1000;j++){
  const E=energyRange[0]+j*(energyRange[1]-energyRange[0])/1000;
  const values=Array.from({length:401},(_,i)=>response(E,-4+8*i/400)).flatMap(r=>[r.left,r.right]);
  const limits=fittedRange(values,{includeZero:true,floorSpan:.1});
  assert.ok(values.every(v=>Number.isFinite(v)&&v>limits[0]&&v<limits[1]),'unscaled profiles fit continuous axes');
}
console.log({potential:'-2 sech²x',maxOde,maxWError,tailNormalization:'amplitude1',boundProfiles:'both sech(x)/2',energies:1001});
