const fs = require('fs');
const path = require('path');

function loadDependency(name, environmentVariable) {
  const explicitRoot = process.env[environmentVariable];
  const entry = explicitRoot ? require.resolve(path.resolve(explicitRoot)) : require.resolve(name);
  const api = explicitRoot ? require(path.resolve(explicitRoot))
    : name === 'katex' ? require('katex')
    : name === 'playwright' ? require('playwright')
    : require(name);
  let root = path.dirname(entry);
  for (;;) {
    const metadata = path.join(root, 'package.json');
    if (fs.existsSync(metadata)) {
      const pkg = JSON.parse(fs.readFileSync(metadata, 'utf8'));
      if (pkg.name === name) return {api, root, version: pkg.version};
    }
    const parent = path.dirname(root);
    if (parent === root) throw new Error(`Cannot locate ${name}'s package metadata from its resolved entry.`);
    root = parent;
  }
}

module.exports = {loadDependency};
