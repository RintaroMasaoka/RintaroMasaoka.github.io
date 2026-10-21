import {response} from '../visuals/green-response.js';
const h=1e-4, errors=[];
for(const E of [-2.25,-1.8,-1,-.6,-.25])for(const x of[-3,-.7,.4,2]){
 const fn=x=>x<0?response(E,x).left:response(E,x).right;
 const second=(fn(x+h)-2*fn(x)+fn(x-h))/h**2;
 errors.push(Math.abs(-second-2/Math.cosh(x)**2*fn(x)-E*fn(x)));
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
