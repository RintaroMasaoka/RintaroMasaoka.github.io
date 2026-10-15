const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {pathToFileURL} = require('url');
const {loadDependency} = require('./dependencies.cjs');
const {api: {chromium}, version: playwrightVersion} = loadDependency('playwright', 'PLAYWRIGHT_ROOT');

const bundle = __dirname;
const sourceDir = path.join(bundle, 'output', 'sources');
const assetsDir = path.join(bundle, 'output', 'assets');
const qaDir = path.join(bundle, 'output', 'qa');
for (const dir of [assetsDir,qaDir]) fs.mkdirSync(dir,{recursive:true});
const figures = JSON.parse(fs.readFileSync(path.join(bundle,'figures.json'),'utf8'));
const sha = filename => crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');

(async()=>{
  const browserChannel = process.env.BROWSER_CHANNEL || 'chrome';
  const launch = process.env.BROWSER_EXECUTABLE
    ? {headless:true,executablePath:process.env.BROWSER_EXECUTABLE}
    : browserChannel==='chromium' ? {headless:true} : {headless:true,channel:browserChannel};
  const browser = await chromium.launch(launch);
  const records = [];
  for (const figure of figures) {
    const page = await browser.newPage({viewport:{width:figure.width,height:figure.height},deviceScaleFactor:2});
    const errors = [], requestFailures=[];
    page.on('pageerror',error=>errors.push(error.message));
    page.on('requestfailed',request=>requestFailures.push({url:request.url(),failure:request.failure()}));
    await page.goto(pathToFileURL(path.join(sourceDir,`${figure.id}.html`)).href);
    await page.evaluate(()=>document.fonts.ready);
    const labels = JSON.parse(fs.readFileSync(path.join(bundle,'editable',`${figure.id}-labels.json`),'utf8'));
    const measured = await page.evaluate(()=>{
      const loadedFonts = [...document.fonts].filter(font=>font.status==='loaded').map(font=>({family:font.family,weight:font.weight,style:font.style}));
      const entries = [...document.querySelectorAll('.label')].map(label=>{
        const glyphs = [...label.querySelectorAll('.katex-html span')].filter(span=>span.textContent.trim() && span.children.length===0);
        const box=label.querySelector('.katex').getBoundingClientRect();
        return {id:label.dataset.label,actualGlyphCSSFonts:[...new Set(glyphs.map(span=>getComputedStyle(span).fontFamily))],bounds:{x:box.x,y:box.y,width:box.width,height:box.height}};
      });
      return {loadedFonts,entries,mathErrors:document.querySelectorAll('.katex-error').length};
    });
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('DOM.enable');
    await cdp.send('CSS.enable');
    const documentNode = await cdp.send('DOM.getDocument');
    const platformFontEvidence = [];
    for (const label of labels) {
      const {nodeIds} = await cdp.send('DOM.querySelectorAll',{nodeId:documentNode.root.nodeId,selector:`.label[data-label="${label.id}"] .katex-html span`});
      if (!nodeIds.length) throw new Error(`Missing KaTeX glyph DOM: ${figure.id}/${label.id}`);
      const used=[];
      for (const nodeId of nodeIds) {
        const {fonts} = await cdp.send('CSS.getPlatformFontsForNode',{nodeId});
        for (const font of fonts) if (font.glyphCount>0) used.push(font);
      }
      const distinct=[...new Map(used.map(font=>[`${font.familyName}|${font.postScriptName}|${font.isCustomFont}`,font])).values()];
      platformFontEvidence.push({id:label.id,fonts:distinct});
    }
    await cdp.detach();
    const clipped = measured.entries.filter(entry=>entry.bounds.x<0||entry.bounds.y<0||entry.bounds.x+entry.bounds.width>figure.width||entry.bounds.y+entry.bounds.height>figure.height).map(entry=>entry.id);
    const allGlyphsUseKaTeX = measured.entries.every(entry=>entry.actualGlyphCSSFonts.length>0&&entry.actualGlyphCSSFonts.every(font=>font.includes('KaTeX')));
    const allPlatformGlyphsUseKaTeX = platformFontEvidence.every(entry=>entry.fonts.length>0&&entry.fonts.every(font=>font.isCustomFont&&font.familyName.startsWith('KaTeX_')));
    if (errors.length||requestFailures.length||clipped.length||measured.mathErrors||!allGlyphsUseKaTeX||!allPlatformGlyphsUseKaTeX||measured.entries.length!==labels.length) throw new Error(`Render QA failed for ${figure.id}: ${JSON.stringify({errors,requestFailures,clipped,mathErrors:measured.mathErrors,allGlyphsUseKaTeX,allPlatformGlyphsUseKaTeX})}`);
    const png=path.join(assetsDir,`${figure.id}.png`);
    await page.locator('#diagram').screenshot({path:png});
    records.push({
      id:figure.id,pngSHA256:sha(png),htmlSHA256:sha(path.join(sourceDir,`${figure.id}.html`)),
      geometrySHA256:sha(path.join(bundle,'editable',`${figure.id}-geometry.svg`)),
      labelsSHA256:sha(path.join(bundle,'editable',`${figure.id}-labels.json`)),
      CSSSize:[figure.width,figure.height],deviceScaleFactor:2,
      loadedFontFamilies:measured.loadedFonts,allGlyphsUseKaTeX,allPlatformGlyphsUseKaTeX,clipped,mathErrors:measured.mathErrors,pageErrors:errors,requestFailures,
      labelInventory:labels.map(label=>({...label,renderer:'KaTeX',fontFamily:'KaTeX Main / Math',observed:measured.entries.find(entry=>entry.id===label.id),platformFonts:platformFontEvidence.find(entry=>entry.id===label.id).fonts}))
    });
    await page.close();
  }
  fs.writeFileSync(path.join(qaDir,'render-font-qa.json'),JSON.stringify({playwrightVersion,browserVersion:browser.version(),browserChannel,figures:records},null,2)+'\n');
  await browser.close();
  console.log(`Rendered ${records.length} PNGs at 2× and verified KaTeX lettering, bounds, and requests.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
