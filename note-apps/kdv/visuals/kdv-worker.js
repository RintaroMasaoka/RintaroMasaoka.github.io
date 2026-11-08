import { createSolver } from './kdv-solver.js';
import { simulationConfig } from './simulation-config.js';
self.onmessage = ({data}) => {
  try {
    const solver=createSolver({mode:data.mode});
    const initial=solver.diagnostics();
    const frames=[new Float32Array(solver.v)], times=[initial.time];
    let maxMassDrift=0,maxSquareDrift=0;
    for(let frame=1;frame<=simulationConfig.frameCount;frame++) {
      solver.step(simulationConfig.stepsPerFrame);
      const state=solver.diagnostics();
      maxMassDrift=Math.max(maxMassDrift,Math.abs(state.mass/initial.mass-1));
      maxSquareDrift=Math.max(maxSquareDrift,Math.abs(state.square/initial.square-1));
      frames.push(new Float32Array(solver.v));times.push(state.time);
      if(frame%20===0)self.postMessage({type:'progress',value:frame/simulationConfig.frameCount});
    }
    self.postMessage({type:'ready',frames,times,dt:solver.dt,maxMassDrift,maxSquareDrift},frames.map(v=>v.buffer));
  }catch(error){self.postMessage({type:'error',message:String(error)});}
};
