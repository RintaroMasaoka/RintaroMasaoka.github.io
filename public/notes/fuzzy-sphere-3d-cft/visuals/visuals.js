(() => {
  'use strict';
  const tex = (el, value) => katex.render(value, el, {throwOnError:true, output:'html', strict:'error'});
  document.querySelectorAll('[data-tex]').forEach(el => tex(el,el.dataset.tex));
  const NS='http://www.w3.org/2000/svg';
  const node=(name,attrs,parent)=>{const el=document.createElementNS(NS,name);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));parent.append(el);return el;};
  function plot(id, ymax, xticks, yticks, xlabel, ylabel, domain=null) {
    const root=document.getElementById(id);root.replaceChildren();
    const w=root.clientWidth,h=root.clientHeight,box={left:51,top:16,right:w-18,bottom:h-43};
    const svg=node('svg',{viewBox:`0 0 ${w} ${h}`,role:'img','aria-label':id==='profile'?'Normalized latitude probability density':'Scaling dimensions versus spin'},root);
    const label=(value,x,y,cls='')=>{const el=document.createElement('span');el.className='plot-label '+cls;el.style.left=x+'px';el.style.top=y+'px';tex(el,value);root.append(el);return el;};
    const xlo=domain?domain[0]:xticks[0],xhi=domain?domain[1]:xticks[xticks.length-1];
    const x=t=>box.left+(t-xlo)/(xhi-xlo)*(box.right-box.left);
    const y=t=>box.bottom-t/ymax*(box.bottom-box.top);
    node('rect',{x:box.left,y:box.top,width:box.right-box.left,height:box.bottom-box.top,fill:'none',stroke:'var(--line)'},svg);
    yticks.forEach(t=>{node('line',{x1:box.left,y1:y(t),x2:box.right,y2:y(t),stroke:'var(--line)','stroke-width':.6},svg);label(String(t),box.left-18,y(t));});
    xticks.forEach(t=>label(String(t),x(t),box.bottom+16));
    label(xlabel,(box.left+box.right)/2,h-8);label(ylabel,11,(box.top+box.bottom)/2,'y-title');
    return {root,svg,label,x,y,box,w,h};
  }
  let redraw=()=>{};
  const followTheme=()=>{
    let dark=matchMedia('(prefers-color-scheme: dark)').matches;
    try {if(parent!==window)dark=parent.document.documentElement.classList.contains('dark');}catch{}
    document.documentElement.classList.toggle('dark',dark);redraw();
  };
  if(document.body.dataset.view==='orbitals') {
    const input=document.getElementById('orbital'),spin=document.getElementById('spin');
    function binomial(n,k){let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return v;}
    const prob=(s,m,z)=>((2*s+1)/2)*binomial(2*s,s+m)*((1+z)/2)**(s+m)*((1-z)/2)**(s-m);
    function draw(){
      const s=Number(spin.value),m=Number(input.value);
      tex(document.getElementById('orbital-label'),`m=${m}`);
      tex(document.getElementById('spin-label'),`s=${s}`);
      tex(document.getElementById('count'),`N_m=${2*s+1}`);
      tex(document.getElementById('ceiling'),`\\frac{${2*s+1}}{4\\pi}`);
      input.setAttribute('aria-valuetext',`m = ${m}`);
      const canvas=document.getElementById('sphere'),ctx=canvas.getContext('2d');
      const W=canvas.width,H=canvas.height,cx=W/2,cy=H/2,r=H*.43;
      ctx.clearRect(0,0,W,H);
      const css=getComputedStyle(document.documentElement);
      function rgb(color){const temp=document.createElement('span');temp.style.color=color;document.body.append(temp);const result=getComputedStyle(temp).color.match(/[\d.]+/g).slice(0,3).map(Number);temp.remove();return result;}
      const low=rgb(css.getPropertyValue('--low')),high=rgb(css.getPropertyValue('--high'));
      const image=ctx.createImageData(W,H);
      for(let y=0;y<H;y++)for(let x=0;x<W;x++){
        const xx=(x-cx)/r,yy=(cy-y)/r,rr=xx*xx+yy*yy;if(rr>1)continue;
        const depth=Math.sqrt(1-rr),z=Math.max(-1,Math.min(1,yy*.94+depth*Math.sqrt(1-.94*.94)));
        const value=prob(s,m,z)/((2*s+1)/2),i=4*(y*W+x);
        for(let c=0;c<3;c++)image.data[i+c]=Math.round(low[c]+(high[c]-low[c])*value);
        image.data[i+3]=255;
      }
      ctx.putImageData(image,0,0);
      ctx.strokeStyle=css.getPropertyValue('--muted');ctx.lineWidth=1.2;
      ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();
      // Constant-latitude curves use the same orthographic projection as the density.
      [-.5,0,.5].forEach(z=>{
        ctx.beginPath();let pen=false;
        for(let i=0;i<=360;i++){
          const phi=i*Math.PI/180,rad=Math.sqrt(1-z*z),x=rad*Math.cos(phi),yy=z*.94-rad*Math.sin(phi)*Math.sqrt(1-.94*.94),depth=z*Math.sqrt(1-.94*.94)+rad*Math.sin(phi)*.94;
          if(depth>=0){if(pen)ctx.lineTo(cx+r*x,cy-r*yy);else ctx.moveTo(cx+r*x,cy-r*yy);pen=true;}else pen=false;
        }ctx.stroke();
      });
      const ceiling=(2*s+1)/2;
      const p=plot('profile',ceiling,[-1,0,1],[0,Number((ceiling/2).toFixed(2)),ceiling],'\\cos\\theta','2\\pi|\\psi_m|^2');
      const points=Array.from({length:301},(_,i)=>{const z=-1+2*i/300;return [p.x(z),p.y(prob(s,m,z))];});
      node('path',{d:points.map(([x,y],i)=>(i?'L':'M')+x.toFixed(2)+','+y.toFixed(2)).join(' '),fill:'none',stroke:'var(--accent)','stroke-width':2.5},p.svg);
      p.label('\\text{South}',p.x(-1)+17,p.box.top+12);p.label('\\text{North}',p.x(1)-17,p.box.top+12);
      canvas.setAttribute('aria-label',`Probability density for s=${s}, m=${m}; ${m===s?'concentrated near the north pole':m===-s?'concentrated near the south pole':'a continuous latitude distribution'}.`);
    }
    spin.addEventListener('input',()=>{const s=Number(spin.value);input.min=-s;input.max=s;input.value=String(Math.max(-s,Math.min(s,Number(input.value))));draw();});
    input.addEventListener('input',draw);redraw=draw;
    // Exposed pure model for reproducible normalization tests, not an external API.
    window.orbitalDensity={prob};
  } else {
    const rows=[
      {name:'\\sigma',l:0,z:'-',fs:.524,ref:.518},
      {name:'\\epsilon',l:0,z:'+',fs:1.414,ref:1.413},
      {name:'T_{\\mu\\nu}',l:2,z:'+',fs:3,ref:3},
      {name:"\\epsilon'",l:0,z:'+',fs:3.838,ref:3.830},
      {name:'\\sigma_{\\mu_1\\mu_2}',l:2,z:'-',fs:4.214,ref:4.180},
      {name:"\\sigma'",l:0,z:'-',fs:5.303,ref:5.291},
      {name:"T'_{\\mu\\nu}",l:2,z:'+',fs:5.583,ref:5.509},
      {name:'\\epsilon_{\\mu_1\\mu_2\\mu_3\\mu_4}',l:4,z:'+',fs:5.103,ref:5.023}
    ];
    let selected=0;
    const sector=document.getElementById('sector');sector.value='all';
    function draw(){
      const visible=rows.map((r,i)=>({...r,i})).filter(r=>sector.value==='all'||r.z===sector.value);
      if(!visible.some(r=>r.i===selected))selected=visible[0].i;
      const p=plot('spectrum',6,[0,1,2,3,4],[0,1,2,3,4,5,6],'\\ell','\\Delta',[-.5,4.5]);
      const selectedRow=rows[selected];
      visible.forEach(r=>{
        const base=p.x(r.l),offset=5;
        node('line',{x1:base-offset,y1:p.y(r.fs),x2:base+offset,y2:p.y(r.ref),stroke:'var(--muted)','stroke-width':r.i===selected?2:1},p.svg);
        node('circle',{cx:base-offset,cy:p.y(r.fs),r:r.i===selected?5:3.5,fill:'var(--accent)'},p.svg);
        node('circle',{cx:base+offset,cy:p.y(r.ref),r:r.i===selected?5:3.5,fill:'var(--bg)',stroke:'var(--accent)','stroke-width':1.5},p.svg);
        const target=node('rect',{x:base-18,y:p.y(Math.max(r.fs,r.ref))-12,width:36,height:24+Math.abs(p.y(r.fs)-p.y(r.ref)),class:'hit',tabindex:0,role:'button','aria-label':`${r.name.replace(/\\/g,'')}: fuzzy sphere ${r.fs}, reference ${r.ref}`},p.svg);
        target.addEventListener('click',()=>{selected=r.i;draw();});target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selected=r.i;draw();}});
      });
      const picker=document.getElementById('states');picker.replaceChildren();
      visible.forEach(r=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-pressed',String(selected===r.i));tex(b,r.name);b.addEventListener('click',()=>{selected=r.i;draw();const buttons=picker.querySelectorAll('button');buttons[visible.findIndex(v=>v.i===r.i)].focus({preventScroll:true});});picker.append(b);});
      tex(document.getElementById('selected'),`${selectedRow.name}:\\quad\\Delta_{\\rm FS}=${selectedRow.fs.toFixed(3)},\\quad\\Delta_{\\rm ref}=${selectedRow.ref.toFixed(3)}`);
    }
    sector.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{sector.value=button.dataset.value;sector.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));draw();}));redraw=draw;
  }
  try{if(parent!==window)new MutationObserver(followTheme).observe(parent.document.documentElement,{attributes:true,attributeFilter:['class']});}catch{}
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',followTheme);
  let width=0;new ResizeObserver(entries=>{const next=Math.round(entries[0].contentRect.width);if(next!==width){width=next;redraw();}}).observe(document.querySelector('main'));
  followTheme();
})();
