/* Figure contract: reader knows Delta, SO(3) spin ell, scalar primary, and P_mu.
   Relation: Sym^k(spin 1) = spin k + spin(k-2) + ... for k=0..3.
   P raises Delta by 1; edges mean P followed by the displayed SO(3) projection.
   Dots enumerate magnetic projections within irreducible groups, not individual
   transition matrix elements. Long multiplet: no null-state subtraction.
   Label inventory: data-tex attributes below/in HTML; renderer KaTeX (local fonts).
   Display budget: width 320..848 px; graph height 310..315 px, total <650 px.
*/
(() => {
  const levels = [[0], [1], [0, 2], [1, 3]];
  const edges = [[0,0,1,1], [1,1,2,0], [1,1,2,2], [2,0,3,1], [2,2,3,1], [2,2,3,3]];
  let active = 2;
  const graph = document.getElementById('graph');
  const tex = (node, source) => {node.dataset.tex = source; katex.render(source, node, {throwOnError:true, output:'htmlAndMathml'});};
  document.querySelectorAll('[data-tex]').forEach(node => tex(node, node.dataset.tex));
  function theme() {
    let dark;
    try { dark = window.parent !== window ? parent.document.documentElement.classList.contains('dark') : matchMedia('(prefers-color-scheme:dark)').matches; }
    catch (_) {dark = matchMedia('(prefers-color-scheme:dark)').matches;}
    document.documentElement.classList.toggle('dark', dark);
  }
  theme();
  try {if (window.parent !== window) new MutationObserver(theme).observe(parent.document.documentElement,{attributes:true,attributeFilter:['class']});} catch (_) {}
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',theme);
  function draw() {
    graph.replaceChildren();
    const w=graph.clientWidth, h=graph.clientHeight, left=w<420?74:105, right=28;
    const x=ell=>left+(w-left-right)*ell/3, y=k=>h-57-k*69;
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.setAttribute('aria-hidden','true');graph.append(svg);
    function element(name,attributes,parent=svg){const node=document.createElementNS(svg.namespaceURI,name);Object.entries(attributes).forEach(([key,value])=>node.setAttribute(key,value));parent.append(node);return node;}
    const defs=element('defs',{});
    for(const [id,color] of [['normal','var(--muted)'],['selected','var(--accent)']]){
      const marker=element('marker',{id:`arrow-${id}`,viewBox:'0 0 8 8',refX:7,refY:4,markerWidth:6,markerHeight:6,orient:'auto'},defs);
      element('path',{d:'M0 0 L8 4 L0 8 Z',fill:color},marker);
    }
    function label(source,px,py,extra=''){const n=document.createElement('span');n.className=`tex-label ${extra}`;n.style.left=`${px}px`;n.style.top=`${py}px`;graph.append(n);tex(n,source);}
    element('rect',{x:left-26,y:y(active)-19,width:w-left+19,height:38,rx:7,class:'active-band'});
    label('\\text{Dimension}',40,14,'axis-title');
    for(let k=0;k<=3;k++){
      element('line',{x1:left-28,x2:w-8,y1:y(k),y2:y(k),class:'grid'});
      label(k?`\\Delta+${k}`:'\\Delta',36,y(k));
    }
    // Links terminate at group boundaries; they are group projections, not m-state links.
    for(const [k,a,t,b] of edges){
      const x1=x(a),x2=x(b), y1=y(k)-15,y2=y(t)+15, chosen=t===active;
      element('path',{d:`M${x1} ${y1} L${x2} ${y2}`,class:`link${chosen?' active':''}`,'marker-end':`url(#arrow-${chosen?'selected':'normal'})`});
    }
    levels.forEach((spins,k)=>spins.forEach(ell=>{
      const count=2*ell+1, spacing=w<420?5.5:7, width=Math.max(24,(count-1)*spacing+15);
      element('rect',{x:x(ell)-width/2,y:y(k)-13,width,height:26,rx:13,class:`group${k===active?' active':''}`});
      for(let m=0;m<count;m++) element('circle',{cx:x(ell)+(m-ell)*spacing,cy:y(k),r:w<420?2:2.6,class:`dot${k===active?' active':''}`});
    }));
    for(let ell=0;ell<=3;ell++) label(String(ell),x(ell),h-30);
    label('\\text{Spin }\\ell',(left+w-right)/2,h-8,'axis-title');
    const spins=levels[active], count=spins.reduce((n,ell)=>n+2*ell+1,0);
    tex(document.getElementById('summary'),`\\text{Level }${active}:\\quad\\ell=${spins.join(',')}\\qquad ${count}\\text{ ${count===1?'state':'states'}}`);
  }
  document.querySelectorAll('button[data-level]').forEach(button=>button.addEventListener('click',()=>{
    active=Number(button.dataset.level);document.querySelectorAll('button[data-level]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));draw();
  }));
  new ResizeObserver(draw).observe(graph);draw();
})();
