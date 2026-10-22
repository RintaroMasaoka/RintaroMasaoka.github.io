// Fixed smooth example u=-sech²x, with complex Jost solutions of Lf=k²f.
export const scatteringPotential=x=>-1/Math.cosh(x)**2;
export const boundKappa=(Math.sqrt(5)-1)/2;
const complexProduct=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]];
const complexQuotient=(a,b)=>{const n=b[0]**2+b[1]**2;return [(a[0]*b[0]+a[1]*b[1])/n,(a[1]*b[0]-a[0]*b[1])/n]};
function derivative(x,y,k){const p=scatteringPotential(x)-k*k;return [y[2],y[3],p*y[0],p*y[1]];}
function rk4(x,y,h,k){
 const a=derivative(x,y,k),b=derivative(x+h/2,y.map((v,i)=>v+h*a[i]/2),k);
 const c=derivative(x+h/2,y.map((v,i)=>v+h*b[i]/2),k),d=derivative(x+h,y.map((v,i)=>v+h*c[i]),k);
 return y.map((v,i)=>v+h*(a[i]+2*b[i]+2*c[i]+d[i])/6);
}
function endpointSolution(k,side,extent,step){
 const direction=side==='minus'?1:-1,count=Math.round(2*extent/step),h=direction*2*extent/count;
 let x=-direction*extent,y=[Math.cos(k*x),Math.sin(k*x),-k*Math.sin(k*x),k*Math.cos(k*x)];
 const rows=[{x,y}];
 for(let i=1;i<=count;i++){y=rk4(x,y,h,k);x=-direction*extent+i*h;rows.push({x,y});}
 if(direction<0)rows.reverse();return rows;
}
export function sampleSolution(rows,x){
 const h=rows[1].x-rows[0].x,j=Math.max(0,Math.min(rows.length-2,Math.floor((x-rows[0].x)/h))),t=(x-rows[j].x)/h;
 return rows[j].y.map((v,i)=>v+(rows[j+1].y[i]-v)*t);
}
export function scatteringState(k,{extent=12,step=.005}={}){
 if(!(k>0))throw Error('Positive wave number required');
 const plus=endpointSolution(k,'plus',extent,step),minus=endpointSolution(k,'minus',extent,step);
 const x=plus[0].x,[r,i,dr,di]=plus[0].y,cos=Math.cos(k*x),sin=Math.sin(k*x);
 const incident=complexProduct([r+di/k,i-dr/k],[cos,-sin]).map(v=>v/2);
 const reflected=complexProduct([r-di/k,i+dr/k],[cos,sin]).map(v=>v/2);
 const a=complexQuotient([1,0],incident),b=complexQuotient(reflected,incident);
 return {k,a,b,plus,minus,at(x,kind='scattering'){
  const y=sampleSolution(kind==='minus'?minus:plus,x);
  if(kind==='scattering'){const value=complexProduct(a,y),slope=complexProduct(a,y.slice(2));return [...value,...slope]}
  return y;
 },farField(x){
  const wave=[Math.cos(k*x),Math.sin(k*x)];
  if(x<0){const reflection=complexProduct(b,[wave[0],-wave[1]]);return [wave[0]+reflection[0],wave[1]+reflection[1]]}
  return complexProduct(a,wave);
 }};
}
let boundNormalization;
export function boundState(){
 if(boundNormalization===undefined){
  const step=.002,count=20000;let sum=0;
  for(let j=0;j<=count;j++){const value=Math.cosh(j*step)**(-2*boundKappa);sum+=(j===0||j===count?1:j%2?4:2)*value;}
  boundNormalization=1/Math.sqrt(2*step*sum/3);
 }
 const amplitude=boundNormalization,tail=amplitude*2**boundKappa;
 return {kappa:boundKappa,energy:-(boundKappa**2),tail,at:x=>amplitude*Math.cosh(x)**(-boundKappa),asymptote:x=>tail*Math.exp(boundKappa*x)};
}
