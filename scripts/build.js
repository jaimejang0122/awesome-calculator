const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const packageJson = require(path.join(root, 'package.json'));

fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(root, 'index.js'), path.join(dist, 'index.js'));
fs.writeFileSync(
  path.join(dist, 'build-info.txt'),
  `Version: ${packageJson.version}\nBuilt at: ${new Date().toISOString()}\n`,
);

console.log(`Built ${packageJson.name}@${packageJson.version} in ${dist}`);