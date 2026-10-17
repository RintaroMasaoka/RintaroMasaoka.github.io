(() => {
 'use strict';
 const tex=(el,s)=>{el.dataset.tex=s;katex.render(s,el,{throwOnError:true,output:'html',strict:'error'});};
 document.querySelectorAll('[data-tex]').forEach(el=>tex(el,el.dataset.tex));
 const defect=false;
 let activeTau=.45, geometry;
 const NS='http://www.w3.org/2000/svg',times=[-1,0,1],dashes=['3 3','','8 3'];
 function shape(root,name,attrs){const n=document.createElementNS(NS,name);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,String(v));root.append(n);return n;}
 function panel(id){const root=document.getElementById(id);root.replaceChildren();const w=root.clientWidth,h=root.clientHeight;
  const svg=shape(root,'svg',{viewBox:`0 0 ${w} ${h}`,'aria-hidden':'true'});
  const label=(s,x,y)=>{const el=document.createElement('span');el.className='geo-label';el.style.left=x+'px';el.style.top=y+'px';tex(el,s);root.append(el);};return {root,svg,w,h,label};
 }
 function layer(root,name,attrs,i){return shape(root,name,{...attrs,class:`layer layer-${i}`,'stroke-dasharray':dashes[i]});}
 function draw(){
  const f=panel('flat'),c=panel('cylinder');
  const cx=f.w/2,cy=f.h*.47,maxR=Math.min(f.w*.41,f.h*.35),scale=maxR/Math.E,theta=Math.PI/3;
  const cc=c.w*.44,a=Math.min(c.w*.30,110),b=Math.min(18,a*.25),time=t=>c.h*.47-t*c.h*.29,top=time(1.18),bottom=time(-1.18);
  for(const side of [-1,1])shape(c.svg,'line',{x1:cc+side*a,y1:top,x2:cc+side*a,y2:bottom,class:'shell'});
  for(const t of [-1.18,1.18])shape(c.svg,'ellipse',{cx:cc,cy:time(t),rx:a,ry:b,class:'shell'});
  times.forEach((tau,i)=>{
   layer(f.svg,'circle',{cx,cy,r:scale*Math.exp(tau),'data-sphere':tau},i);
   layer(c.svg,'ellipse',{cx:cc,cy:time(tau),rx:a,ry:b,'data-slice':tau},i);
  });
  if(defect){
   shape(f.svg,'line',{x1:cx,y1:cy-maxR-12,x2:cx,y2:cy+maxR+12,class:'defect-line'});
   for(const side of [-1,1]){
    shape(c.svg,'line',{x1:cc+side*a,y1:top,x2:cc+side*a,y2:bottom,class:'defect-line'});
    for(const tau of times){shape(f.svg,'circle',{cx,cy:cy+side*scale*Math.exp(tau),r:3.5,class:'defect-point'});shape(c.svg,'circle',{cx:cc+side*a,cy:time(tau),r:3.5,class:'defect-point'});}
   }
   shape(f.svg,'circle',{cx,cy,r:2.8,fill:'var(--bg)',stroke:'var(--fg)','stroke-width':1});
   f.label('N',cx-13,cy-maxR-11);f.label('S',cx-13,cy+maxR+11);
   c.label('S',cc-a,top-11);c.label('N',cc+a,top-11);
   f.label('\\text{Origin: }0',cx,f.h-15);c.label('\\{N,S\\}\\times\\mathbb R_\\tau',cc,c.h-15);
  }else{
   shape(f.svg,'line',{x1:cx,y1:cy,x2:cx+maxR*Math.sin(theta),y2:cy-maxR*Math.cos(theta),class:'direction'});
   const dx=a*Math.cos(theta),dy=b*Math.sin(theta);
   shape(c.svg,'line',{x1:cc+dx,y1:top+dy,x2:cc+dx,y2:bottom+dy,class:'direction'});
   times.forEach((tau,i)=>{
    shape(f.svg,'circle',{cx:cx+scale*Math.exp(tau)*Math.sin(theta),cy:cy-scale*Math.exp(tau)*Math.cos(theta),r:4,class:`mapped-point layer-${i}`,'data-radius-point':tau});
    shape(c.svg,'circle',{cx:cc+dx,cy:time(tau)+dy,r:4,class:`mapped-point layer-${i}`,'data-time-point':tau});
   });
   shape(f.svg,'circle',{cx,cy,r:2.5,fill:'var(--fg)'});
   f.label('\\text{Origin: }O(0)',cx,f.h-15);c.label('|O\\rangle,\\ \\tau\\to-\\infty',cc,c.h-15);
  }
  const radius=scale*Math.exp(activeTau), dx=a*Math.cos(theta), dy=b*Math.sin(theta);
  shape(f.svg,'circle',{cx,cy,r:radius,class:'active-contour','data-active-sphere':activeTau});
  shape(c.svg,'ellipse',{cx:cc,cy:time(activeTau),rx:a,ry:b,class:'active-contour','data-active-slice':activeTau});
  for(const [p,x,y] of [[f,cx+radius*Math.sin(theta),cy-radius*Math.cos(theta)],[c,cc+dx,time(activeTau)+dy]]){
   shape(p.svg,'circle',{cx:x,cy:y,r:9,class:'drag-handle'});
   shape(p.svg,'circle',{cx:x,cy:y,r:22,class:'drag-hit'});
   p.root.setAttribute('aria-valuenow',activeTau.toFixed(3));
   p.root.setAttribute('aria-valuetext',`Radius ${Math.exp(activeTau).toFixed(3)}, radial time ${activeTau.toFixed(3)}`);
  }
  geometry={cx,cy,scale,mid:c.h*.47,rate:c.h*.29,dy};
  tex(document.getElementById('active-values'),`r=${Math.exp(activeTau).toFixed(3)}\\qquad \\tau=${activeTau.toFixed(3)}`);
  const axis=c.w-21;
  shape(c.svg,'line',{x1:axis,y1:bottom+3,x2:axis,y2:top-8,stroke:'var(--muted)','stroke-width':1});
  for(const [yy,sgn] of [[top-8,1],[bottom+3,-1]])shape(c.svg,'path',{d:`M${axis-3},${yy+sgn*5} L${axis},${yy} L${axis+3},${yy+sgn*5}`,fill:'none',stroke:'var(--muted)','stroke-width':1});
  c.label('\\tau',axis,top-20);
  for(const t of times){shape(c.svg,'line',{x1:axis-3,y1:time(t),x2:axis+3,y2:time(t),stroke:'var(--muted)','stroke-width':1});c.label(String(t),axis+12,time(t));}
  const legend=document.getElementById('correspondences');legend.replaceChildren();
  times.forEach((t,i)=>{const item=document.createElement('span');item.className='map-pair';const sample=document.createElement('span');sample.className=`line-sample layer-${i} sample-${i}`;sample.setAttribute('aria-hidden','true');item.append(sample);const label=document.createElement('span');tex(label,`r=${t===0?'1':t===1?'e':'e^{-1}'}\\;\\longleftrightarrow\\;\\tau=${t}`);item.append(label);legend.append(item);});
 }
 function setTau(t){activeTau=Math.max(-1,Math.min(1,t));draw();}
 for(const id of ['flat','cylinder']){
  const root=document.getElementById(id);let dragging=false;
  const move=e=>{const rect=root.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top;
   setTau(id==='flat'?Math.log(Math.max(.001,Math.hypot(x-geometry.cx,y-geometry.cy))/geometry.scale):(geometry.mid+geometry.dy-y)/geometry.rate);
  };
  root.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();dragging=true;root.setPointerCapture(e.pointerId);root.focus({preventScroll:true});move(e);});
  root.addEventListener('pointermove',e=>{if(dragging)move(e);});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])root.addEventListener(event,()=>{dragging=false;});
  root.addEventListener('keydown',e=>{let t=activeTau;if(['ArrowUp','ArrowRight'].includes(e.key))t+=.05;else if(['ArrowDown','ArrowLeft'].includes(e.key))t-=.05;else if(e.key==='Home')t=-1;else if(e.key==='End')t=1;else return;e.preventDefault();setTau(t);});
 }
 function theme(){let dark=matchMedia('(prefers-color-scheme: dark)').matches;try{if(parent!==window)dark=parent.document.documentElement.classList.contains('dark');}catch{}document.documentElement.classList.toggle('dark',dark);draw();}
 try{if(parent!==window)new MutationObserver(theme).observe(parent.document.documentElement,{attributes:true,attributeFilter:['class']});}catch{}
 matchMedia('(prefers-color-scheme: dark)').addEventListener('change',theme);
 let width=0;new ResizeObserver(entries=>{const next=Math.round(entries[0].contentRect.width);if(next!==width){width=next;draw();}}).observe(document.querySelector('main'));
 theme();
})();
