const fs=require('fs'),path=require('path'),crypto=require('crypto');
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'qa','frozen-manifest.json'),'utf8'));
const records=manifest.figures.map(figure=>{
  const digest=relative=>crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname,relative))).digest('hex');
  return {id:figure.id,geometryMatchesFrozen:digest(figure.geometry)===figure.geometrySHA256,labelsMatchFrozen:digest(figure.labels)===figure.labelsSHA256};
});
console.log(JSON.stringify({allSourceBytesMatch:records.every(record=>record.geometryMatchesFrozen&&record.labelsMatchFrozen),figures:records},null,2));
if(records.some(record=>!record.geometryMatchesFrozen||!record.labelsMatchFrozen))process.exitCode=1;
