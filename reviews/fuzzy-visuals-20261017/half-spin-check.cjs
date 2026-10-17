const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 const page=await browser.newPage({viewport:{width:390,height:850}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=process.env.FUZZY_BASE_URL||'http://127.0.0.1:4328';
 await page.goto(base+'/notes/fuzzy-sphere-3d-cft/',{waitUntil:'domcontentloaded'});
 const iframe=page.locator('iframe[src$="/orbitals.html"]');await iframe.scrollIntoViewIfNeeded();
 const frame=await (await iframe.elementHandle()).contentFrame();await frame.waitForSelector('.katex');
 const limits=await frame.locator('#spin').evaluate(el=>({min:el.min,step:el.step}));
 if(limits.min!=='0.5'||limits.step!=='0.5')throw Error('Wrong s range');
 const report=await frame.evaluate(()=>{
  const spin=document.getElementById('spin'),orbital=document.getElementById('orbital'),prob=window.orbitalDensity.prob;
  const states=[];let maxNormalizationError=0,maxIdentityError=0;
  for(let twoS=1;twoS<=16;twoS++){
   const s=twoS/2;spin.value=s;spin.dispatchEvent(new Event('input',{bubbles:true}));
   const current=Number(orbital.value);
   if(!Number.isInteger(s+current)||Math.abs(current)>s||!orbital.validity.valid)throw Error('Invalid m after switching s: '+s);
   for(let j=0;j<=twoS;j++){
    const m=j-s;let sum=0;const n=10000;
    for(let i=0;i<=n;i++)sum+=prob(s,m,-1+2*i/n)*(i===0||i===n?1:i%2?4:2);
    maxNormalizationError=Math.max(maxNormalizationError,Math.abs(sum*2/n/3-1));
   }
   for(const z of [-1,-.7,0,.7,1]){
    let sum=0;for(let j=0;j<=twoS;j++)sum+=prob(s,j-s,z);
    maxIdentityError=Math.max(maxIdentityError,Math.abs(sum-(twoS+1)/2));
   }
   states.push({s,m:current,Nm:twoS+1});
  }
  // Integer/half-integer changes must not accumulate rounding drift.
  spin.value=3;spin.dispatchEvent(new Event('input',{bubbles:true}));orbital.value=0;orbital.dispatchEvent(new Event('input',{bubbles:true}));
  for(const s of [3.5,4,4.5,5,4.5,4,3.5,3]){
   spin.value=s;spin.dispatchEvent(new Event('input',{bubbles:true}));
   if(Number.isInteger(s)&&Number(orbital.value)!==0)throw Error('Rounding drift');
  }
  const clamped=[];
  for(const sign of [-1,1]){
   spin.value=8;spin.dispatchEvent(new Event('input',{bubbles:true}));orbital.value=sign*8;orbital.dispatchEvent(new Event('input',{bubbles:true}));
   spin.value=.5;spin.dispatchEvent(new Event('input',{bubbles:true}));
   clamped.push(Number(orbital.value));if(Number(orbital.value)!==sign*.5)throw Error('Endpoint clamp failed');
  }
  if(maxNormalizationError>1e-10||maxIdentityError>1e-10)throw Error('Density identities failed');
  return {states,clamped,maxNormalizationError,maxIdentityError};
 });
 for(const [s,m] of [[.5,-.5],[.5,.5],[1.5,-.5]]){
  await frame.locator('#spin').evaluate((el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));},s);
  await frame.locator('#orbital').evaluate((el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));},m);
  await frame.evaluate(()=>document.fonts.ready);
  await iframe.screenshot({path:`reviews/fuzzy-visuals-20261017/half-s${s}-m${m}.png`});
 }
 report.layout=await frame.evaluate(()=>({height:document.querySelector('main').getBoundingClientRect().height,viewport:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth}));
 report.errors=errors;if(errors.length||report.layout.overflow||report.layout.height>report.layout.viewport)throw Error('Render failed');
 fs.writeFileSync('reviews/fuzzy-visuals-20261017/half-spin-check.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
