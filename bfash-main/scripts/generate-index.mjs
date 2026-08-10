import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('.output/public');
const assetsDir = path.join(publicDir, 'assets');

if (!fs.existsSync(publicDir)) {
  console.error('Public output not found:', publicDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const css = files.find(f => f.includes('index-') && f.endsWith('.css'));
// pick largest index JS (likely the main bundle)
const jsCandidates = files.filter(f => f.includes('index-') && f.endsWith('.js'));
let js = jsCandidates.sort((a,b)=>b.length - a.length)[0] || jsCandidates[0];

const cssTag = css ? `<link rel="stylesheet" href="/assets/${css}">` : '';
const jsTag = js ? `<script type="module" src="/assets/${js}"></script>` : '';

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>BFash Solution</title>
    ${cssTag}
  </head>
  <body>
    <div id="root"></div>
    ${jsTag}
  </body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'index.html'), html);
console.log('Generated static index.html referencing:', css, js);
