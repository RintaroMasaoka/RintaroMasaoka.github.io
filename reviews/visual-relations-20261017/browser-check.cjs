const {chromium}=require('playwright');const fs=require('node:fs');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const p=await browser.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));const report=[];
for(const width of [1440,390])for(const dark of [false,true]){
 await p.setViewportSize({width,height:900});await p.goto('http://127.0.0.1:4328/notes/fuzzy-sphere-3d-cft/',{waitUntil:'domcontentloaded'});await p.evaluate(d=>document.documentElement.classList.toggle('dark',d),dark);
 for(const name of ['cylinder','defect','descendants']){
  const e=p.locator(`iframe[src$="/${name}.html"]`);await e.scrollIntoViewIfNeeded();const f=await(await e.elementHandle()).contentFrame();await f.waitForSelector('.katex');await f.evaluate(()=>document.fonts.ready);
  if(await f.locator('input,button,select').count())throw Error('Unexpected control in explanatory figure '+name);
  const state=await f.evaluate(()=>({height:document.querySelector('main').getBoundingClientRect().height,viewport:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth,theme:document.documentElement.className,fonts:[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family),clipped:[...document.querySelectorAll('.geo-label,.tex-label')].filter(n=>{const b=n.getBoundingClientRect();return b.left<0||b.right>innerWidth||b.top<0;}).map(n=>n.textContent)}));
  if(state.height>state.viewport+1||state.overflow||state.clipped.length)throw Error('Layout failed '+name+JSON.stringify(state));
  if(name==='descendants'){if(await f.locator('.dot').count()!==20||await f.locator('.group').count()!==6)throw Error('Wrong descendant representation');}
  else{
   const geometry=await f.evaluate(()=>{
    const spheres=[...document.querySelectorAll('[data-sphere]')].map(n=>+n.getAttribute('r'));
    const slices=[...document.querySelectorAll('[data-slice]')].map(n=>({rx:+n.getAttribute('rx'),cy:+n.getAttribute('cy')}));
    return{spheres,slices,points:document.querySelectorAll('[data-radius-point]').length,defectSourcePoints:document.querySelectorAll('#flat .defect-point').length,defectTargetPoints:document.querySelectorAll('#cylinder .defect-point').length,worldlines:document.querySelectorAll('#cylinder .defect-line').length,pairs:document.querySelectorAll('.map-pair').length};
   });
   if(geometry.spheres.length!==3||geometry.slices.length!==3||geometry.pairs!==3)throw Error('Missing simultaneous correspondences');
   if(Math.abs(geometry.spheres[1]/geometry.spheres[0]-Math.E)>1e-10||Math.abs(geometry.spheres[2]/geometry.spheres[1]-Math.E)>1e-10)throw Error('Wrong radial ratios');
   if(Math.abs(geometry.slices[0].cy-geometry.slices[1].cy-(geometry.slices[1].cy-geometry.slices[2].cy))>1e-10)throw Error('Unequal time intervals');
   if(!geometry.slices.every(s=>s.rx===geometry.slices[0].rx))throw Error('Changing cylinder radius');
   if(name==='defect'&&(geometry.defectSourcePoints!==6||geometry.defectTargetPoints!==6||geometry.worldlines!==2))throw Error('Wrong intersection relation');
   state.geometry=geometry;
  }
  report.push({width,dark,name,...state});await e.screenshot({path:`reviews/visual-relations-20261017/${name}-${width}-${dark?'dark':'light'}.png`});
 }
}
fs.writeFileSync('reviews/visual-relations-20261017/browser-check.json',JSON.stringify({report,errors},null,2));console.log(JSON.stringify({report,errors},null,2));await browser.close();if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1);});
