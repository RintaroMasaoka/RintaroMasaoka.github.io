const {chromium}=require('playwright');const fs=require('node:fs');
(async()=>{
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));const report=[];
const base=process.env.FUZZY_BASE_URL||'http://127.0.0.1:4328';
for(const width of [1440,390])for(const dark of [false,true]){
 await page.setViewportSize({width,height:900});await page.goto(base+'/notes/fuzzy-sphere-3d-cft/',{waitUntil:'domcontentloaded'});
 await page.evaluate(d=>document.documentElement.classList.toggle('dark',d),dark);
 if(await page.locator('iframe[data-fuzzy-visual]').count()!==5)throw Error('Expected five embedded visuals');
 for(const name of ['cylinder','descendants','defect']){
  const el=page.locator(`iframe[src$="/${name}.html"]`);await el.scrollIntoViewIfNeeded();const f=await(await el.elementHandle()).contentFrame();await f.waitForSelector('.katex');await f.evaluate(()=>document.fonts.ready);
  const state=await f.evaluate(()=>({height:document.querySelector('main').getBoundingClientRect().height,frameHeight:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth,theme:document.documentElement.className,fonts:[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family),badLabels:[...document.querySelectorAll('.geo-label,.tex-label')].filter(el=>{const r=el.getBoundingClientRect();return r.left<0||r.right>innerWidth||r.top<0;}).map(el=>el.textContent)}));
  report.push({width,dark,name,...state});if(state.overflow||state.height>state.frameHeight+1||state.badLabels.length)throw Error('Layout issue '+JSON.stringify(state));
  await el.screenshot({path:`reviews/cylinder-visuals-20261017/${name}-${width}-${dark?'dark':'light'}.png`});
  if(name==='descendants'){
   for(let level=0;level<=3;level++){
    await f.locator(`button[data-level="${level}"]`).click();
    const count=await f.locator('.dot.active').count();if(count!==[1,3,6,10][level])throw Error('Wrong magnetic count');
   }
  }else{
   for(const tau of [-1,0,1]){
    await f.locator('#tau').evaluate((el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));},tau);
    for(const angle of name==='cylinder'?[0,60,180]:[0]){
     if(name==='cylinder')await f.locator('#angle').evaluate((el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));},angle);
     const geometry=await f.evaluate(()=>{
      const sphere=document.querySelector('#flat circle.active'),slice=document.querySelector('#cylinder ellipse.active');
      const value=n=>Number(n);const result={r:value(sphere.getAttribute('r')),rx:value(slice.getAttribute('rx')),y:value(slice.getAttribute('cy'))};
      const source=document.querySelector('#flat circle[fill="var(--accent)"]'),target=document.querySelector('#cylinder circle[fill="var(--accent)"]');
      if(source&&target){const dx=value(source.getAttribute('cx'))-value(sphere.getAttribute('cx')),dy=value(source.getAttribute('cy'))-value(sphere.getAttribute('cy'));result.sourceNorm=(dx*dx+dy*dy)/(result.r*result.r);const tx=(value(target.getAttribute('cx'))-value(slice.getAttribute('cx')))/result.rx,ty=(value(target.getAttribute('cy'))-result.y)/value(slice.getAttribute('ry'));result.targetNorm=tx*tx+ty*ty;}
      else{result.poles=document.querySelectorAll('#cylinder .defect-point').length;result.lines=document.querySelectorAll('#cylinder .defect-line').length;}
      return result;
     });
     if(name==='cylinder'&&(Math.abs(geometry.sourceNorm-1)>1e-9||Math.abs(geometry.targetNorm-1)>1e-9))throw Error('Map incidence broken');
     if(name==='defect'&&(geometry.poles!==2||geometry.lines!==2))throw Error('Wrong defect multiplicity');
     report.push({name,width,dark,tau,angle,geometry});
     if(width===390&&!dark&&angle===0&&tau!==0)await el.screenshot({path:`reviews/cylinder-visuals-20261017/${name}-tau${tau}.png`});
    }
   }
  }
 }
}
fs.writeFileSync('reviews/cylinder-visuals-20261017/browser-check.json',JSON.stringify({report,errors},null,2));console.log(JSON.stringify({layouts:report.filter(r=>r.height),errors},null,2));await browser.close();if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1);});
