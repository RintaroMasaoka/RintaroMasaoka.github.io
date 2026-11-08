import sharp from 'sharp';
import {determinantSample,twoSolitonExample} from './determinant.js';
// Linear opacity encodes -u/depth. Transparent zero follows the actual host paper.
export async function determinantHeatmap(rgb,width=768,height=600){
 const {mapXLimit,mapTimeLimit,depth}=twoSolitonExample;
 const pixels=Buffer.alloc(width*height*4);
 for(let j=0;j<height;j++)for(let i=0;i<width;i++){
  const x=-mapXLimit+(i+.5)*2*mapXLimit/width,t=mapTimeLimit-(j+.5)*2*mapTimeLimit/height;
  const offset=(j*width+i)*4;
  pixels[offset]=rgb[0];pixels[offset+1]=rgb[1];pixels[offset+2]=rgb[2];
  pixels[offset+3]=Math.round(255*Math.min(1,Math.max(0,-determinantSample(x,t).u/depth)));
 }
 const buffer=await sharp(pixels,{raw:{width,height,channels:4}}).png().toBuffer();
 return `data:image/png;base64,${buffer.toString('base64')}`;
}
