import assert from 'node:assert/strict';
import {fittedRange,matchingRange} from '../visuals/plot-range.js';
import {response} from '../visuals/green-response.js';
import {pointProfile,pointEnergy} from '../visuals/point-spectrum.js';
let maxBoundaryStep=0;
for(const radius of [3,.1]){
 let previous;
 for(let i=0;i<=1500;i++){
  const E=-1.75+i*.001,limits=matchingRange(E,radius,response);
  assert.ok(limits.every(Number.isFinite)&&limits[1]>limits[0]);
  // Validate on a denser grid than the fitting grid, using the exact solutions.
  for(let j=0;j<=600;j++){
   const r=response(E,-radius+2*radius*j/600);
   for(const y of [r.left,r.right])assert.ok(y>limits[0]&&y<limits[1],'profile clipped');
  }
  if(previous)for(let n=0;n<2;n++)maxBoundaryStep=Math.max(maxBoundaryStep,Math.abs(limits[n]-previous[n]));
  previous=limits;
 }
}
assert.ok(maxBoundaryStep<.1,'discontinuous scale change');
assert.ok(matchingRange(-1,3,response)[1]-matchingRange(-1,3,response)[0]<1.3,'bound state flattened');
assert.ok(matchingRange(-1,.1,response)[1]-matchingRange(-1,.1,response)[0]<.01,'magnifier not fitted');
for(const E of [-1.75,-1.25,-1,-.5,-.25]){
 const ys=Array.from({length:401},(_,j)=>pointProfile(E,-4+j*.02));
 const r=fittedRange(ys,{includeZero:true,floorSpan:.1});
 assert.ok(Math.max(...ys)<r[1]&&r[0]<0);
}
const energyValues=Array.from({length:401},(_,j)=>-1.25+4.5*j/400).flatMap(g=>[pointEnergy(g),-1+g/2]);
const energyLimits=fittedRange(energyValues,{floorSpan:.1});
assert.ok(energyLimits[1]>.625,'tangent clipped');
console.log({energies:1501,panels:2,maxBoundaryStep,energyLimits,continuouslyFitted:true});
