const fs=require('fs'),path=require('path');
const multiply=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((s,x,k)=>s+x*b[k][j],0)));
const transpose=a=>a[0].map((_,j)=>a.map(row=>row[j]));
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const identity=[[1,0,0],[0,1,0],[0,0,1]];
// Noncommuting permutation matrices; h has order 3, so h^{-1} is not h.
const h=[[0,0,1],[1,0,0],[0,1,0]];
const g=[[0,1,0],[1,0,0],[0,0,1]];
const hInverse=transpose(h);
const leftLink=multiply(h,g), rightLink=multiply(g,hInverse);
const checks={
  groupChangeHasInverse:equal(multiply(hInverse,h),identity),
  inverseDiffersFromForwardChange:!equal(hInverse,h),
  testFactorsDoNotCommute:!equal(multiply(h,g),multiply(g,h)),
  leftDiagramCommutes:equal(multiply(leftLink,identity),multiply(h,g)),
  rightDiagramCommutes:equal(multiply(rightLink,h),multiply(identity,g)),
  rightUndoRouteEqualsOriginalLink:equal(multiply(multiply(g,hInverse),h),g),
  replacingInverseWithHWouldFail:!equal(multiply(multiply(g,h),h),g),
};
if(Object.values(checks).some(v=>!v))throw new Error('Gauge-connection mathematical QA failed.');
const out=path.join(__dirname,'output','qa');fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'math-qa.json'),JSON.stringify({scope:'A noncommuting finite-group matrix witness for the diagram; general cancellation uses h^{-1}h=1.',matrices:{g,h,hInverse},checks},null,2)+'\n');
console.log(JSON.stringify(checks));
