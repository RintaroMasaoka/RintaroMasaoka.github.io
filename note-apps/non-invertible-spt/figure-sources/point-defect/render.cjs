const fs = require('fs');
const path = require('path');
const {pathToFileURL} = require('url');
const crypto = require('crypto');
const {loadDependency} = require('./dependencies.cjs');
const {api: {chromium}, version: playwrightVersion} = loadDependency('playwright', 'PLAYWRIGHT_ROOT');
const bundle = __dirname;
const output = path.join(bundle, 'output');
const assets = path.join(output, 'assets');
const qa = path.join(output, 'qa');
const figures = JSON.parse(fs.readFileSync(path.join(bundle, 'figures.json'), 'utf8'));
const sha = file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
fs.mkdirSync(assets,{recursive:true});
fs.mkdirSync(qa,{recursive:true});

(async()=>{
  // "chrome" matches the frozen export. "chromium" uses Playwright's own browser.
  const selectedChannel = process.env.BROWSER_CHANNEL || 'chrome';
  const launch = selectedChannel === 'chromium' ? {headless:true} : {channel:selectedChannel,headless:true};
  const browser = await chromium.launch(launch);
  const page = await browser.newPage({viewport:{width:720,height:720},deviceScaleFactor:2});
  const records=[];
  for (const figure of figures) {
    const errors=[];
    const onError=error=>errors.push(error.message);
    page.on('pageerror',onError);
    await page.goto(pathToFileURL(path.join(output,'sources',`${figure.id}.html`)).href);
    await page.evaluate(()=>document.fonts.ready);
    const fonts = await page.evaluate(()=>({
      loaded:[...document.fonts].filter(font=>font.status==='loaded').map(font=>font.family),
      labels:[...document.querySelectorAll('.label')].map(label=>{
        const glyphs=[...label.querySelectorAll('.katex-html span')].filter(span=>span.textContent.trim()&&span.children.length===0);
        const bounds=label.querySelector('.katex').getBoundingClientRect();
        return {id:label.dataset.label,glyphFontFamilies:[...new Set(glyphs.map(span=>getComputedStyle(span).fontFamily))],bounds:{x:bounds.x,y:bounds.y,width:bounds.width,height:bounds.height}};
      }),
      mathErrors:document.querySelectorAll('.katex-error').length,
    }));
    const clipped = fonts.labels.filter(label=>label.bounds.x<0||label.bounds.y<0||label.bounds.x+label.bounds.width>figure.width||label.bounds.y+label.bounds.height>figure.height).map(label=>label.id);
    const allGlyphsUseKaTeX = fonts.labels.every(label=>label.glyphFontFamilies.length>0&&label.glyphFontFamilies.every(font=>font.includes('KaTeX')));
    if (errors.length||fonts.mathErrors||clipped.length||!allGlyphsUseKaTeX) throw new Error(`Figure QA failed: ${figure.id}`);
    const asset=path.join(assets,`${figure.id}.png`);
    await page.locator('#diagram').screenshot({path:asset});
    records.push({id:figure.id,asset:`assets/${figure.id}.png`,assetSHA256:sha(asset),CSSSize:[figure.width,figure.height],deviceScaleFactor:2,loadedFontFamilies:fonts.loaded,labelCount:fonts.labels.length,allGlyphsUseKaTeX,clipped,mathErrors:fonts.mathErrors,pageErrors:errors,labels:fonts.labels});
    page.off('pageerror',onError);
  }
  fs.writeFileSync(path.join(qa,'render-font-qa.json'),JSON.stringify({playwrightVersion,browserVersion:browser.version(),browserChannel:selectedChannel,figures:records},null,2)+'\n');
  await browser.close();
  console.log(`Rendered ${records.length} PNGs in output/assets/ and saved output/qa/render-font-qa.json.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
