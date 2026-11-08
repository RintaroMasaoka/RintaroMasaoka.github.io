// The two scales serve different comparisons: a collision close-up in x,t,
// and full spatial snapshots that include both separated valleys.
export const twoSolitonExample=Object.freeze({
 k1:1,k2:1.25,diagonalFactor:9,mixedCoefficient:1/81,
 snapshotTime:8,snapshotXLimit:16,mapXLimit:10,mapTimeLimit:8.8,
 depth:25/8,bandHalfWidth:1,
});
export function determinantSample(x,t){
 const {k1,k2,diagonalFactor,mixedCoefficient}=twoSolitonExample;
 const l1=Math.log(diagonalFactor)+2*k1*x+2*k1**3*t;
 const l2=Math.log(diagonalFactor)+2*k2*x+2*k2**3*t;
 const logs=[0,l1,l2,Math.log(mixedCoefficient)+l1+l2];
 const max=Math.max(...logs),terms=logs.map(v=>Math.exp(v-max));
 const sum=terms.reduce((a,b)=>a+b,0),weights=terms.map(v=>v/sum),slopes=[0,2*k1,2*k2,2*(k1+k2)];
 const mean=weights.reduce((a,p,i)=>a+p*slopes[i],0);
 return {weights,u:-2*weights.reduce((a,p,i)=>a+p*(slopes[i]-mean)**2,0)};
}
export function determinantRegimeStage(t){
 const {k1,k2,diagonalFactor,snapshotXLimit,depth,bandHalfWidth}=twoSolitonExample;
 const center=-k1*k1*t+Math.sign(t)*Math.log(diagonalFactor)/(2*k1);
 const px=x=>36+(x+snapshotXLimit)*414/(2*snapshotXLimit);
 const path=(left,right,count)=>Array.from({length:count+1},(_,i)=>{
  const x=left+(right-left)*i/count;
  return `${i?'L':'M'}${px(x).toFixed(3)},${(36-80*determinantSample(x,t).u/depth).toFixed(3)}`;
 }).join(' ');
 return {t,center,bandLeft:px(center-bandHalfWidth),bandWidth:px(center+bandHalfWidth)-px(center-bandHalfWidth),
  slowX:px(center),fastX:px(-k2*k2*t-Math.sign(t)*Math.log(diagonalFactor)/(2*k2)),
  path:path(-snapshotXLimit,snapshotXLimit,960),focusPath:path(center-bandHalfWidth,center+bandHalfWidth,160)};
}
