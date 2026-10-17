(() => {
 'use strict';
 const tex=(el,s)=>katex.render(s,el,{throwOnError:true,output:'html',strict:'error'});
 document.querySelectorAll('[data-tex]').forEach(el=>tex(el,el.dataset.tex));
 const defect=document.body.dataset.geometry==='defect';
 const tauInput=document.getElementById('tau'),angleInput=document.getElementById('angle');
 const NS='http://www.w3.org/2000/svg';
 function shape(svg,name,attrs){const n=document.createElementNS(NS,name);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,String(v));svg.append(n);return n;}
 function panel(id){
  const root=document.getElementById(id);root.replaceChildren();const w=root.clientWidth,h=root.clientHeight;
  const svg=shape(root,'svg',{viewBox:`0 0 ${w} ${h}`,'aria-hidden':'true'});
  const label=(s,x,y)=>{const el=document.createElement('span');el.className='geo-label';el.style.left=x+'px';el.style.top=y+'px';tex(el,s);root.append(el);};
  return {root,svg,w,h,label};
 }
 function draw(){
  const tau=Number(tauInput.value),r=Math.exp(tau),theta=angleInput?Number(angleInput.value)*Math.PI/180:0;
  tex(document.getElementById('tau-label'),`\\tau=${tau.toFixed(2)}`);
  if(angleInput)tex(document.getElementById('angle-label'),`\\theta=${angleInput.value}^{\\circ}`);
  tex(document.getElementById('status'),`r=e^{\\tau}=${r.toFixed(2)}\\quad\\longleftrightarrow\\quad\\tau=${tau.toFixed(2)}`);
  const f=panel('flat'),c=panel('cylinder');
  const cx=f.w/2,cy=f.h*.49,maxR=Math.min(f.w*.41,f.h*.35),scale=maxR/Math.E;
  for(const t of [-1,0,1])shape(f.svg,'circle',{cx,cy,r:scale*Math.exp(t),class:'shell'});
  shape(f.svg,'circle',{cx,cy,r:scale*r,class:'active'});
  if(defect){
   shape(f.svg,'line',{x1:cx,y1:cy-maxR-14,x2:cx,y2:cy+maxR+14,class:'defect-line'});
   for(const [sign,name] of [[-1,'N'],[1,'S']]){
    shape(f.svg,'circle',{cx,cy:cy+sign*scale*r,r:4,class:'defect-point'});
    f.label(name,cx-17,cy+sign*scale*r);
   }
   shape(f.svg,'circle',{cx,cy,r:2.8,fill:'var(--bg)',stroke:'var(--fg)','stroke-width':1});

  }else{
   const px=cx+scale*r*Math.sin(theta),py=cy-scale*r*Math.cos(theta);
   shape(f.svg,'line',{x1:cx,y1:cy,x2:px,y2:py,class:'ray'});
   shape(f.svg,'circle',{cx:px,cy:py,r:4,fill:'var(--accent)',stroke:'var(--bg)','stroke-width':1});
   shape(f.svg,'circle',{cx,cy,r:2.5,fill:'var(--fg)'});

  }
  f.label(defect?'\\text{Origin: }0':'\\text{Origin: }O(0)',cx,f.h-16);
  const cc=c.w*.44,a=Math.min(c.w*.30,110),b=Math.min(18,a*.25),time=t=>c.h*.48-t*c.h*.29;
  const top=time(1.18),bottom=time(-1.18);
  for(const side of [-1,1])shape(c.svg,'line',{x1:cc+side*a,y1:top,x2:cc+side*a,y2:bottom,class:'shell'});
  for(const t of [-1.18,-1,0,1,1.18])shape(c.svg,'ellipse',{cx:cc,cy:time(t),rx:a,ry:b,class:'shell'});
  shape(c.svg,'ellipse',{cx:cc,cy:time(tau),rx:a,ry:b,class:'active'});
  const axis=c.w-21;
  shape(c.svg,'line',{x1:axis,y1:bottom+3,x2:axis,y2:top-8,stroke:'var(--muted)','stroke-width':1});
  shape(c.svg,'path',{d:`M${axis-3},${top-3} L${axis},${top-8} L${axis+3},${top-3}`,fill:'none',stroke:'var(--muted)','stroke-width':1});
  shape(c.svg,'path',{d:`M${axis-3},${bottom-2} L${axis},${bottom+3} L${axis+3},${bottom-2}`,fill:'none',stroke:'var(--muted)','stroke-width':1});
  c.label('\\tau',axis,top-20);
  for(const t of [-1,0,1]){shape(c.svg,'line',{x1:axis-3,y1:time(t),x2:axis+3,y2:time(t),stroke:'var(--muted)','stroke-width':1});c.label(String(t),axis+12,time(t));}
  if(defect){
   for(const [sign,name] of [[-1,'S'],[1,'N']]){
    shape(c.svg,'line',{x1:cc+sign*a,y1:top,x2:cc+sign*a,y2:bottom,class:'defect-line'});
    shape(c.svg,'circle',{cx:cc+sign*a,cy:time(tau),r:4,class:'defect-point'});
    c.label(name,cc+sign*a,time(tau)-17);
   }
   c.label('\\{N,S\\}\\times\\mathbb R_\\tau',cc,c.h-15);
  }else{
   shape(c.svg,'circle',{cx:cc+a*Math.cos(theta),cy:time(tau)+b*Math.sin(theta),r:4,fill:'var(--accent)',stroke:'var(--bg)','stroke-width':1});
   c.label('|O\\rangle,\\ \\tau\\to-\\infty',cc,c.h-15);
  }
  f.root.setAttribute('aria-label',defect?`Sphere section r=${r.toFixed(2)} intersects the through-origin line at North and South`:`Sphere section of radius ${r.toFixed(2)}, selected polar angle ${angleInput.value} degrees`);
  c.root.setAttribute('aria-label',defect?`Two defect worldlines intersect the slice tau=${tau.toFixed(2)} at North and South`:`The same angular point lies on a fixed-radius sphere at tau=${tau.toFixed(2)}`);
 }
 function theme(){let dark=matchMedia('(prefers-color-scheme: dark)').matches;try{if(parent!==window)dark=parent.document.documentElement.classList.contains('dark');}catch{}document.documentElement.classList.toggle('dark',dark);draw();}
 tauInput.addEventListener('input',draw);angleInput?.addEventListener('input',draw);
 try{if(parent!==window)new MutationObserver(theme).observe(parent.document.documentElement,{attributes:true,attributeFilter:['class']});}catch{}
 matchMedia('(prefers-color-scheme: dark)').addEventListener('change',theme);
 let width=0;new ResizeObserver(entries=>{const next=Math.round(entries[0].contentRect.width);if(next!==width){width=next;draw();}}).observe(document.querySelector('main'));
 theme();
})();
