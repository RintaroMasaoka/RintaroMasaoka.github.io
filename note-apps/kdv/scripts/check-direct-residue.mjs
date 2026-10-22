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
