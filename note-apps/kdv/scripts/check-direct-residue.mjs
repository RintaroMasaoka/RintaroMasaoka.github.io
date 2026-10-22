import assert from 'node:assert/strict';

// Independent one-soliton family: u=-2 lambda² sech²(lambda x).
// At k=i lambda, both Jost solutions equal sech(lambda x)/2.
// W(i q)=-2q(q-lambda)/(q+lambda); dW/dk=-i dW(iq)/dq.
for(const lambda of [.5,1,2]){
  const h=1e-5, W=q=>-2*q*(q-lambda)/(q+lambda);
  const derivativeImaginaryPart=-(W(lambda+h)-W(lambda-h))/(2*h);
  const steps=20000,dx=40/lambda/steps;
  let norm=0;
  for(let j=0;j<=steps;j++){
    const x=-20/lambda+j*dx,f=1/(2*Math.cosh(lambda*x));
    norm+=(j===0||j===steps?.5:1)*f*f*dx;
  }
  assert.ok(Math.abs(norm-1/(2*lambda))<1e-11);
  assert.ok(Math.abs(derivativeImaginaryPart-2*lambda*norm)<1e-9);
  for(const x of [-2,-.3,0,.8,3]){
    const f=1/(2*Math.cosh(lambda*x)),cSquared=1/norm;
    const quotientResidueImaginaryPart=2*lambda*f/derivativeImaginaryPart;
    assert.ok(Math.abs(quotientResidueImaginaryPart-cSquared*f)<1e-9);
    assert.ok(Math.abs(cSquared*f-lambda/Math.cosh(lambda*x))<1e-10);
  }
}
console.log('Direct Wronskian derivative/norm identity, simple zero and transmission-residue sign: pass (three soliton scales).');

// Direct matching quotient: no W derivative is used in these checks.
// Translated one-soliton Jost solutions with independent norm quadrature.
for(const lambda of [.5,1,2])for(const shift of [-.8,0,.7]){
 const right=(q,x)=>Math.exp(-q*x)*(q+lambda*Math.tanh(lambda*(x-shift)))/(q+lambda);
 const left=(q,x)=>Math.exp(q*x)*(q-lambda*Math.tanh(lambda*(x-shift)))/(q+lambda);
 const delta=q=>{
  const t=Math.tanh(-lambda*shift),s=1-t*t;
  return -2*q+lambda*lambda*s*(1/(q+lambda*t)+1/(q-lambda*t));
 };
 let norm=0;const steps=24000,dx=40/lambda/steps;
 for(let j=0;j<=steps;j++){
  const x=shift-20/lambda+j*dx,weight=j===0||j===steps?.5:1;
  norm+=weight*left(lambda,x)**2*dx;
 }
 const c=1/Math.sqrt(norm),psi0=c*left(lambda,0),h=lambda*1e-5;
 const mean=fn=>(fn(lambda+h)+fn(lambda-h))/2;
 assert.ok(Math.abs(mean(q=>(lambda*lambda-q*q)/delta(q))-psi0*psi0)<1e-8,'point energy response');
 for(const x of [-1,0,.4,2]){
  const transmitted=q=>(q+lambda)/(q-lambda)*right(q,x);
  for(const q of [lambda-h,lambda+h]){
   const matching=-2*q/delta(q)*right(q,x)/(left(q,0)*right(q,0));
   assert.ok(Math.abs(matching/transmitted(q)-1)<1e-9,'exact transmitted matching quotient');
  }
  const expected=c*c*left(lambda,x);
  assert.ok(Math.abs(mean(q=>(lambda*lambda-q*q)*transmitted(q)/(-2*q))-expected)<1e-8,'energy-pole coefficient');
  assert.ok(Math.abs(mean(q=>(q-lambda)*transmitted(q))-expected)<1e-8,'k-plane residue coefficient');
 }
}
console.log('Direct matching quotient, point-energy response and energy/k pole coefficients: pass (three scales and three translations).');
