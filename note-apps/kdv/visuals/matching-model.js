// Endpoint-normalized Jost solutions for L=-d_x²-2 sech²x, E=k²<0.
export const energyRange=[-1.5,-.5];
export const boundEnergy=-1;
export function matchingResponse(energy,x){
  const q=Math.sqrt(-energy),t=Math.tanh(x);
  if(q===1){const f=.5/Math.cosh(x);return {left:f,right:f,W:0};}
  return {
    left:Math.exp(q*x)*(q-t)/(q+1),
    right:Math.exp(-q*x)*(q+t)/(q+1),
    W:-2*q*(q-1)/(q+1),
  };
}
