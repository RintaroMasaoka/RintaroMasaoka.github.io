// Exterior algebra: ordered variables are bar_1,...,bar_n,psi_1,...,psi_n.
const count = mask => { let n=0; while(mask){n+=mask&1;mask>>>=1;} return n; };
function wedge(a,b){
  if(a&b)return null;
  let inversions=0;
  for(let i=0;i<24;i++)if((a>>>i)&1)inversions+=count(b&((1<<i)-1));
  return [a|b,inversions%2?-1:1];
}
function multiply(a,b){
 const out=new Map();
 for(const [i,x] of a)for(const [j,y] of b){const w=wedge(i,j);if(w)out.set(w[0],(out.get(w[0])||0)+w[1]*x*y);}
 return out;
}
// Recursive Pfaffian whose matrix entries are exterior two-forms Omega_ab.
function pfaffian(indices,n,curvature){
 if(!indices.length)return new Map([[0,1]]);
 let out=new Map(); const a=indices[0];
 for(let j=1;j<indices.length;j++){
  const b=indices[j],rest=indices.filter((_,i)=>i!==0&&i!==j);
  const term=multiply(new Map([[(1<<a)|(1<<b),curvature(a,b)]]),pfaffian(rest,n,curvature));
  for(const [mask,v] of term)out.set(mask,(out.get(mask)||0)+(j%2?1:-1)*v);
 }
 return out;
}
export function calculate(n=2,pattern='constant',k=1){
 if(![2,4,6].includes(n)||!['constant','diagonal','blocks'].includes(pattern)||![-1,0,1].includes(k))throw Error('Invalid dimension, curvature pattern or scale.');
 const curvature=(a,b)=>k*(pattern==='constant'?1:pattern==='diagonal'?a+b+1:(Math.floor(a/2)===Math.floor(b/2)?Math.floor(a/2)+1:0));
 // Q=(1/4)R_abcd bar_a bar_b psi_c psi_d=sum_(a<b) k_ab bar_a bar_b psi_a psi_b.
 const Q=new Map();
 for(let a=0;a<n;a++)for(let b=a+1;b<n;b++)Q.set((1<<a)|(1<<b)|(1<<(n+a))|(1<<(n+b)),curvature(a,b));
 let power=new Map([[0,1]]),factorial=1;
 for(let r=1;r<=n/2;r++){power=multiply(power,Q);factorial*=r;}
 const top=(1<<(2*n))-1,m=n/2;
 const raw=(m%2?-1:1)*(power.get(top)||0)/factorial;
 const berezinSign=(n*(n+1)/2)%2?-1:1;
 const integrated=berezinSign*raw;
 const pf=pfaffian(Array.from({length:n},(_,i)=>i),n,curvature).get((1<<n)-1)||0;
 let doubleFactorial=1;for(let j=1;j<n;j+=2)doubleFactorial*=j;
 const expected=doubleFactorial*k**m;
 const matrix=Array.from({length:n},(_,a)=>Array.from({length:n},(_,b)=>a===b?0:curvature(Math.min(a,b),Math.max(a,b))).join('&')).join('\\\\');
 const latex=[
 `n=${n},\\quad k=${k}`,
 `(\\kappa_{ab})=\\begin{pmatrix}${matrix}\\end{pmatrix}`,
 `[\\bar\\psi^1\\cdots\\bar\\psi^n\\psi^1\\cdots\\psi^n]e^{-Q}=${raw}`,
 `\\int d\\bar\\psi\\,d\\psi\\ e^{-Q}=${integrated}`,
 `\\operatorname{Pf}(\\Omega)=${pf}\\,\\theta^1\\wedge\\cdots\\wedge\\theta^{${n}}`,
 `\\int e^{-Q}-[\\theta^1\\cdots\\theta^n]\\operatorname{Pf}(\\Omega)=${integrated-pf}`,
 `\\operatorname{Eu}(TM)=\\frac{${pf}}{(2\\pi)^{${m}}}\\,d\\operatorname{vol}_g`,
 ];
 if(pattern==='constant')latex.push(`(n-1)!!\\,k^{n/2}=${expected}`);
 return {n,pattern,k,raw,integrated,pf,difference:integrated-pf,expected:pattern==='constant'?expected:null,latex:latex.join('\n')};
}
