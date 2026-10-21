import {response,matchingPaths,energyDomain} from '../visuals/green-response.js';
const h=1e-4, errors=[];
for(const E of [-2.25,-1.8,-1,-.6,-.25])for(const x of[-4,-3,-.7,.4,2,4])for(const side of ['left','right']){
 const fn=x=>response(E,x)[side];
 const second=(fn(x+h)-2*fn(x)+fn(x-h))/h**2;
 errors.push(Math.abs(-second-2/Math.cosh(x)**2*fn(x)-E*fn(x))/Math.max(1,Math.abs(fn(x))));
}
const maxODE=Math.max(...errors);if(maxODE>1e-6)throw Error(`ODE ${maxODE}`);
for(const E of[-2.25,-1.8,-.6,-.25]){
 const q=Math.sqrt(-E),f0=q/(q+1),leftSlope=q-1,rightSlope=1-q,W=response(E,0).W;
 if(Math.abs((f0*rightSlope-leftSlope*f0)/W-1)>1e-12)throw Error('source jump');
 for(const x of[-3,0,.6,2]){
  const l=z=>Math.exp(q*z)*(q-Math.tanh(z))/(q+1),r=z=>Math.exp(-q*z)*(q+Math.tanh(z))/(q+1);
  const G=(x<0?l(x)*r(0):l(0)*r(x))/W;
  if(Math.abs((E+1)*G-response(E,x).regularized)>1e-12)throw Error('G normalization');
 }
}
let maxPoleError=0;
for(let j=0;j<=200;j++){const x=-4+j*.04;maxPoleError=Math.max(maxPoleError,Math.abs(response(-1,x).regularized-response(-1,x).projector));}
if(maxPoleError>1e-14||response(-1,0).W!==0||response(-1,0).slope!==0)throw Error('eigenvalue condition');
// Independent real-axis quadrature verifies the upper-contour Fourier sign.
const kap=.7,d=1.3,R=1000*Math.PI/d,n=400000,dk=R/n;
let integral=0;for(let j=0;j<=n;j++){const k=j*dk,v=(k*Math.sin(k*d)+kap*Math.cos(k*d))/(k*k+kap*kap);integral+=(j===0||j===n?.5:1)*v*dk/Math.PI;}
const fourierError=Math.abs(integral-Math.exp(-kap*d));if(fourierError>.0002)throw Error('Fourier residue sign');
console.log(JSON.stringify({maxODE,maxPoleError,sourceJump:'+1',finiteSourceGreenIdentity:'pass',upperFourierImaginaryPart:integral,expected:Math.exp(-kap*d),fourierError},null,2));

// Every selectable energy draws both complete profiles on the common linear axes.
for(let j=0;j<=1000;j++){
 const E=energyDomain[0]+j/1000,p=matchingPaths(E),q=Math.sqrt(-E),f0=q/(q+1);
 if(Math.abs(f0*f0*(p.rightSlope-p.leftSlope)-response(E,0).W)>1e-12)throw Error('normalized slopes and W');
 for(const key of ['overviewLeft','overviewRight','zoomLeft','zoomRight','leftTangent','rightTangent']){
  if(/NaN|Infinity/.test(p[key]))throw Error('nonfinite matching geometry');
  const points=[...p[key].matchAll(/[ML]([\d.-]+),([\d.-]+)/g)].map(m=>[+m[1],+m[2]]);
  if(points[0][0]!==52||points.at(-1)[0]!==300)throw Error('incomplete solution domain');
  if(key.startsWith('overview') && points.some(([,y])=>y<63.999||y>218.001))throw Error('overview clipped');
  // The fixed magnifier intentionally clips departures outside [.96,1.04];
  // the overview must retain both complete displayed profiles.
 }
 if(p.ticks.length>8)throw Error('tick overflow');
}
for(let j=0;j<=320;j++){
 const x=-4+j/40,v=response(-1,x);
 if(Math.abs(v.left-1/Math.cosh(x))>1e-12||Math.abs(v.right-v.left)>1e-12)throw Error('full-interval coincidence');
}
console.log('1001 matching energies: complete profiles, finite axes, slope/W identity; E=-1 full-interval coincidence: pass');

// Energy changes must not move axes or the reference point, or cause scale jumps.
const axis=JSON.stringify(matchingPaths(-1).ticks);let maxPixelStep=0;
for(let j=0;j<=1000;j++){
 const E=energyDomain[0]+j/1000,p=matchingPaths(E);
 if(JSON.stringify(p.ticks)!==axis||p.zeroY!==matchingPaths(-1).zeroY||p.overviewPoint[1]!==matchingPaths(-1).overviewPoint[1])throw Error('moving matching axes');
 if(j){
  const prev=matchingPaths(E-.001);
  for(const key of ['overviewLeft','overviewRight','zoomLeft','zoomRight']){
   const ys=path=>[...path.matchAll(/[ML][\d.-]+,([\d.-]+)/g)].map(m=>+m[1]);
   const a=ys(prev[key]),b=ys(p[key]);for(let n=0;n<a.length;n++)maxPixelStep=Math.max(maxPixelStep,Math.abs(a[n]-b[n]));
  }
 }
}
if(maxPixelStep>1)throw Error('coarse motion '+maxPixelStep);
console.log({fixedAxes:'pass',maxPixelStep});
