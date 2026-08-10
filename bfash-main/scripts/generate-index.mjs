import fs from 'fs';
import path from 'path';

// Support both local Nitro output (.output/public) and Vercel prebuilt path (.vercel/output/static)
const possiblePublicDirs = [
  path.resolve('.output/public'),
  path.resolve('.vercel/output/static'),
  path.resolve('.vercel/output/static/'),
];

let publicDir = possiblePublicDirs.find(d => fs.existsSync(d));
if (!publicDir) {
  console.error('Public output not found. Tried:', possiblePublicDirs.join(', '));
  // Do not fail the build on Vercel if public dir is missing; exit non-zero will make CI fail.
  process.exit(1);
}

const assetsDir = path.join(publicDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found in', publicDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const css = files.find(f => f.startsWith('index-') && f.endsWith('.css')) || files.find(f => f.includes('index-') && f.endsWith('.css'));
// prefer JS files that start with index- (main bundle), fallback to containing index-
let jsCandidates = files.filter(f => f.startsWith('index-') && f.endsWith('.js'));
if (jsCandidates.length === 0) jsCandidates = files.filter(f => f.includes('index-') && f.endsWith('.js'));
let js = jsCandidates.sort((a,b)=>b.length - a.length)[0] || jsCandidates[0] || null;

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
console.log('Generated static index.html in', publicDir, 'referencing:', css, js);
