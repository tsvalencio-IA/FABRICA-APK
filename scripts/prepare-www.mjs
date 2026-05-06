import fs from 'fs';
import path from 'path';

const root = process.cwd();
const src = path.join(root, 'src');
const www = path.join(root, 'www');

fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(www, { recursive: true });

for (const file of fs.readdirSync(src)) {
  fs.copyFileSync(path.join(src, file), path.join(www, file));
}
console.log('www preparado com arquivos offline.');
