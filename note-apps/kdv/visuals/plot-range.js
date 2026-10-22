// Fit the visible data without rounding axis limits to a discrete tick grid.
// Min/max of continuous samples remain continuous as the energy changes.
export function fittedRange(values,{floorSpan=.01,includeZero=false,padding=.08}={}){
  let lo=Math.min(...values),hi=Math.max(...values);
  if(includeZero){lo=Math.min(0,lo);hi=Math.max(0,hi);}
  const span=Math.max(hi-lo,floorSpan),center=(hi+lo)/2;
  return [center-span*(.5+padding),center+span*(.5+padding)];
}
export function matchingRange(energy,range,response){
  const values=[1];
  for(let i=0;i<=240;i++){
    const r=response(energy,-range+2*range*i/240);values.push(r.left,r.right);
  }
  return fittedRange(values,{floorSpan:range<1?.002:.1,includeZero:range>=1});
}
// Labels are server-rendered TeX. Select from those candidates independently
// of the continuous limits; hiding a crowded tick never rescales the curves.
export function placeVerticalTicks(svg,selector,Y,ymin,ymax,priority=[]){
  const nodes=[...svg.querySelectorAll(selector)];
  const accepted=[];
  for(const node of nodes.sort((a,b)=>{
    const x=Number(a.dataset.plotTick),y=Number(b.dataset.plotTick);
    const rank=v=>{const n=priority.indexOf(v);return n<0?priority.length:n};
    return rank(x)-rank(y)||x-y;
  })){
    const value=Number(node.dataset.plotTick),pixel=Y(value);
    const show=value>=ymin&&value<=ymax&&accepted.every(y=>Math.abs(y-pixel)>=35);
    node.style.display=show?'':'none';
    if(show){accepted.push(pixel);node.setAttribute('y',pixel-12.5);}
  }
}
