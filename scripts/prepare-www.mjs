import fs from 'fs';
import path from 'path';

const root = process.cwd();
const src = path.join(root, 'src');
const www = path.join(root, 'www');
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(www, { recursive: true });
function copyDir(from, to){
  fs.mkdirSync(to, { recursive: true });
  for (const item of fs.readdirSync(from, { withFileTypes: true })){
    const srcPath = path.join(from, item.name);
    const dstPath = path.join(to, item.name);
    if (item.isDirectory()) copyDir(srcPath, dstPath);
    else fs.copyFileSync(srcPath, dstPath);
  }
}
copyDir(src, www);
console.log('www preparado com src/index.html do HTML enviado.');
