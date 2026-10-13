const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=__dirname,expected=JSON.parse(fs.readFileSync(path.join(root,'qa/expected-sources.json'),'utf8'));
const checks=Object.entries(expected).map(([file,sha256])=>{const target=path.join(root,file),actual=fs.existsSync(target)?crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex'):null;return {file,expected_sha256:sha256,actual_sha256:actual,pass:actual===sha256};});
const report={scope:'Source equivalence only; this check does not launch a browser or render PNGs',pass:checks.every(c=>c.pass),files_checked:checks.length,checks};
fs.mkdirSync(path.join(root,'qa'),{recursive:true});fs.writeFileSync(path.join(root,'qa/source-equivalence-check.json'),JSON.stringify(report,null,2));
console.log(`${report.pass?'PASS':'FAIL'}: ${checks.length} SVG, TeX-label, HTML and figure-manifest files match the frozen sources byte-for-byte.`);
if(!report.pass)process.exit(1);
