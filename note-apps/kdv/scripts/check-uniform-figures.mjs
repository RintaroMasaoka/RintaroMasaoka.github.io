import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve('note-apps/kdv'),read=rel=>readFileSync(resolve(root,rel),'utf8');
const frame=read('components/FigureViewport.astro');
if(!frame.includes('scale(${scale})')||!frame.includes('canvas.offsetHeight*scale')||/overflow-x:auto|scaleX\(|scaleY\(/.test(frame))throw Error('FigureViewport must use one uniform scale and scaled height, without horizontal panning.');
for(const name of ['ScatteringChannels','ScatteringIntro','MatchingFigure','PointSpectrum','GreenKernel','TravelingSoliton','KdvSimulation','ReconstructionFigure','Determinant','ContourFigure','DysonDomain','BoundStates']){
 if(read(`components/${name}.astro`).includes('non-scaling-stroke'))throw Error(`${name}: stroke excluded from uniform scaling.`);
 if(!read(`components/${name}.astro`).includes('<FigureViewport'))throw Error(`${name}: scientific canvas does not use uniform fitting.`);
}
for(const name of ['matching','point-spectrum','green-kernel','scattering-intro']){
 if(read(`visuals/${name}.js`).includes('.getBoundingClientRect().width'))throw Error(`${name}: transformed width would corrupt design-space coordinates.`);
}
console.log('Uniform figure fitting contract passed (12 component families).');
