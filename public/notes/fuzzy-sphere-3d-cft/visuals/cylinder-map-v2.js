(() => {
 'use strict';
 const render=(el,text)=>katex.render(text,el,{throwOnError:true,output:'html',strict:'error'});
 document.querySelectorAll('[data-tex]').forEach(el=>render(el,el.dataset.tex));
 const stage=document.getElementById('map-stage'),NS='http://www.w3.org/2000/svg';
 let tau=.35, update, width=0;
 const node=(parent,name,attrs)=>{const el=document.createElementNS(NS,name);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,String(value));parent.append(el);return el;};
 const attrs=(el,values)=>{for(const [key,value] of Object.entries(values))el.setAttribute(key,String(value));};
 function build(){
  const focused=document.activeElement?.dataset.handle;
  stage.replaceChildren();const w=stage.clientWidth,h=stage.clientHeight;
  const svg=node(stage,'svg',{viewBox:`0 0 ${w} ${h}`,'aria-hidden':'false'});
  const label=(text,x,y,kind='')=>{const el=document.createElement('span');el.className='map-label '+kind;el.style.left=x+'px';el.style.top=y+'px';render(el,text);stage.append(el);return el;};
  const cx=w*.24,cy=h*.53,outer=Math.min(w*.205,h*.31),unit=outer/Math.E;
  const cc=w*.75,a=Math.min(w*.17,112),b=Math.min(a*.24,20),rate=h*.285,yt=t=>cy-t*rate;
  label('\\mathbb R^3\\setminus\\{0\\}',cx,24,'heading');label('S^2\\times\\mathbb R_\\tau',cc,24,'heading');
  // Zero radial time provides a stationary comparison.
  node(svg,'line',{x1:cx,y1:cy,x2:cx+outer+10,y2:cy,class:'guide'});
  node(svg,'circle',{cx,cy,r:2.5,fill:'var(--fg)'});
  label('0',cx-10,cy+15,'small');
  for(const s of [-1,1])node(svg,'line',{x1:cc+s*a,y1:yt(1.2),x2:cc+s*a,y2:yt(-1.2),class:'neutral'});
  for(const t of [-1.2,1.2])node(svg,'ellipse',{cx:cc,cy:yt(t),rx:a,ry:b,class:'neutral'});
  node(svg,'ellipse',{cx:cc,cy,rx:a,ry:b,class:'guide'});
  node(svg,'line',{x1:cc,y1:yt(1.2)+b,x2:cc,y2:yt(-1.2)+b,class:'guide'});
  const axis=cc+a+14;
  node(svg,'line',{x1:axis,y1:yt(-1.15),x2:axis,y2:yt(1.2),class:'neutral'});
  node(svg,'path',{d:`M${axis-3},${yt(1.2)+5} L${axis},${yt(1.2)} L${axis+3},${yt(1.2)+5}`,fill:'none',stroke:'var(--muted)'});
  label('\\tau',axis,yt(1.2)-12,'small');
  for(const t of [-1,0,1]){node(svg,'line',{x1:axis-3,y1:yt(t),x2:axis+3,y2:yt(t),class:'neutral'});label(String(t),axis+10,yt(t),'small');}
  node(svg,'path',{d:`M${w*.45},${cy} H${w*.55} m-5,-4 l5,4 -5,4`,fill:'none',stroke:'var(--muted)','stroke-width':1.3});
  const disc=node(svg,'circle',{cx,cy,class:'active-disc'}),sphere=node(svg,'circle',{cx,cy,class:'active-section','data-active-sphere':''});
  const sliceFill=node(svg,'ellipse',{cx:cc,rx:a,ry:b,class:'active-disc'}),slice=node(svg,'ellipse',{cx:cc,rx:a,ry:b,class:'active-section','data-active-slice':''});
  const radial=node(svg,'line',{x1:cx,y1:cy,y2:cy,stroke:'var(--accent)','stroke-width':2});
  const left=node(svg,'circle',{cy,r:6.5,class:'handle'}),right=node(svg,'circle',{cx:cc,r:6.5,class:'handle'});
  const handles=[node(svg,'circle',{cy,r:22,class:'grab',tabindex:0,role:'slider','data-handle':'radius','aria-label':'Sphere radius; radial time','aria-valuemin':-1,'aria-valuemax':1}),node(svg,'circle',{cx:cc,r:22,class:'grab',tabindex:0,role:'slider','data-handle':'time','aria-label':'Cylinder radial time','aria-orientation':'vertical','aria-valuemin':-1,'aria-valuemax':1})];
  update=()=>{const radius=unit*Math.exp(tau),y=yt(tau);attrs(disc,{r:radius});attrs(sphere,{r:radius,'data-active-sphere':tau});attrs(radial,{x2:cx+radius});attrs(left,{cx:cx+radius});attrs(sliceFill,{cy:y});attrs(slice,{cy:y,'data-active-slice':tau});attrs(right,{cy:y+b});attrs(handles[0],{cx:cx+radius});attrs(handles[1],{cy:y+b});
   for(const el of handles)attrs(el,{'aria-valuenow':tau.toFixed(3),'aria-valuetext':`Radius ${Math.exp(tau).toFixed(3)}, radial time ${tau.toFixed(3)}`});
   // Only the two values change: retained geometry and labels stay in the DOM.
   for(const [id,value] of [['radius-value',Math.exp(tau)],['time-value',tau]]){const text=value.toFixed(2),el=document.getElementById(id);if(el.dataset.value!==text){el.dataset.value=text;render(el,text);}}
  };
  const set=t=>{tau=Math.max(-1,Math.min(1,t));update();};
  handles.forEach((el,i)=>{let drag=null;
   el.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();el.focus({preventScroll:true});el.setPointerCapture(e.pointerId);drag={x:e.clientX,y:e.clientY,r:unit*Math.exp(tau),t:tau};});
   el.addEventListener('pointermove',e=>{if(!drag)return;set(i===0?Math.log(Math.max(unit/Math.E,drag.r+e.clientX-drag.x)/unit):drag.t-(e.clientY-drag.y)/rate);});
   for(const event of ['pointerup','pointercancel','lostpointercapture'])el.addEventListener(event,()=>{drag=null;});
   el.addEventListener('keydown',e=>{let t=tau;if(['ArrowUp','ArrowRight'].includes(e.key))t+=.05;else if(['ArrowDown','ArrowLeft'].includes(e.key))t-=.05;else if(e.key==='Home')t=-1;else if(e.key==='End')t=1;else return;e.preventDefault();set(t);});
  });
  update();if(focused)handles.find(el=>el.dataset.handle===focused)?.focus({preventScroll:true});
 }
 function theme(){let dark=matchMedia('(prefers-color-scheme: dark)').matches;try{if(parent!==window)dark=parent.document.documentElement.classList.contains('dark');}catch{}document.documentElement.classList.toggle('dark',dark);}
 try{if(parent!==window)new MutationObserver(theme).observe(parent.document.documentElement,{attributes:true,attributeFilter:['class']});}catch{}
 matchMedia('(prefers-color-scheme: dark)').addEventListener('change',theme);
 new ResizeObserver(()=>{if(stage.clientWidth!==width){width=stage.clientWidth;build();}}).observe(stage);
 theme();build();
})();
