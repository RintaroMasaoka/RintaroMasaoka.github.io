import { createSolver } from './kdv-solver.js';
self.onmessage = ({data}) => {
  try {
    const solver=createSolver({mode:data.mode});
    const initial=solver.diagnostics();
    const frames=[new Float32Array(solver.v)];
    let maxMassDrift=0,maxSquareDrift=0;
    for(let frame=1;frame<=160;frame++) {
      solver.step(20);
      const state=solver.diagnostics();
      maxMassDrift=Math.max(maxMassDrift,Math.abs(state.mass/initial.mass-1));
      maxSquareDrift=Math.max(maxSquareDrift,Math.abs(state.square/initial.square-1));
      frames.push(new Float32Array(solver.v));
      if(frame%20===0)self.postMessage({type:'progress',value:frame/160});
    }
    self.postMessage({type:'ready',frames,maxMassDrift,maxSquareDrift},frames.map(v=>v.buffer));
  }catch(error){self.postMessage({type:'error',message:String(error)});}
};
