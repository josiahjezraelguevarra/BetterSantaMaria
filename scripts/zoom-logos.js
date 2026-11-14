const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Update all SVG logo files with the tight, zoomed-in viewBox
// Artwork bounds: X=[171, 2021] (width 1850), Y=[191, 889] (height 698)
// Leaving ~20 units of padding on all sides gives viewBox="151 171 1890 738"
const oldSvgTagRegex = /<svg\s+width="2241"\s+height="1080"\s+viewBox="0\s+0\s+2241\s+1080"/g;
const newSvgTag = '<svg width="1890" height="738" viewBox="151 171 1890 738"';

const logoDirs = [
  path.join(rootDir, 'assets', 'images', 'logo'),
  path.join(rootDir, 'dist', 'assets', 'images', 'logo'),
  path.join(rootDir, 'react-app', 'public', 'assets', 'images', 'logo'),
];

if (fs.existsSync(path.join(rootDir, 'react-app', 'out', 'assets', 'images', 'logo'))) {
  logoDirs.push(path.join(rootDir, 'react-app', 'out', 'assets', 'images', 'logo'));
}

const logoFiles = [
  'better-santamaria-logo.svg',
  'better-santamaria-logo-white.svg',
  'better-santamaria-logo.svg',
  'better-santamaria-logo-white.svg',
];

let svgCount = 0;
for (const dir of logoDirs) {
  if (!fs.existsSync(dir)) continue;
  for (const file of logoFiles) {
    const fullPath = path.join(dir, file);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (oldSvgTagRegex.test(content)) {
        content = content.replace(oldSvgTagRegex, newSvgTag);
        fs.writeFileSync(fullPath, content, 'utf8');
        svgCount++;
        console.log(`Zoomed SVG: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}
console.log(`Updated ${svgCount} SVG logo files.`);

// 2. Bump CSS sizing for .logo-img and .footer-logo
const cssDirs = [
  path.join(rootDir, 'assets', 'css'),
  path.join(rootDir, 'dist', 'assets', 'css'),
  path.join(rootDir, 'react-app', 'public', 'assets', 'css'),
];

for (const dir of cssDirs) {
  if (!fs.existsSync(dir)) continue;

  // style.css
  const stylePath = path.join(dir, 'style.css');
  if (fs.existsSync(stylePath)) {
    let content = fs.readFileSync(stylePath, 'utf8');
    // Replace .logo-img height: 48px -> 52px
    content = content.replace(
      /\.logo-img\s*\{\s*height:\s*48px;/g,
      '.logo-img {\n  height: 52px;'
    );
    // Replace .footer-logo height: 56px -> 62px
    content = content.replace(
      /\.footer-logo\s*\{\s*height:\s*56px;/g,
      '.footer-logo {\n  height: 62px;'
    );
    fs.writeFileSync(stylePath, content, 'utf8');
    console.log(`Updated CSS: ${path.relative(rootDir, stylePath)}`);
  }

  // responsive.css
  const respPath = path.join(dir, 'responsive.css');
  if (fs.existsSync(respPath)) {
    let content = fs.readFileSync(respPath, 'utf8');
    // 40px -> 44px
    content = content.replace(
      /\.logo-img\s*\{\s*height:\s*40px;\s*\}/g,
      '.logo-img {\n    height: 44px;\n  }'
    );
    // 36px -> 40px
    content = content.replace(
      /\.logo-img\s*\{\s*height:\s*36px;\s*\}/g,
      '.logo-img {\n    height: 40px;\n  }'
    );
    fs.writeFileSync(respPath, content, 'utf8');
    console.log(`Updated CSS: ${path.relative(rootDir, respPath)}`);
  }

  // footer.css
  const footerPath = path.join(dir, 'footer.css');
  if (fs.existsSync(footerPath)) {
    let content = fs.readFileSync(footerPath, 'utf8');
    content = content.replace(
      /\.footer-logo\s*\{\s*height:\s*56px;/g,
      '.footer-logo {\n  height: 62px;'
    );
    fs.writeFileSync(footerPath, content, 'utf8');
    console.log(`Updated CSS: ${path.relative(rootDir, footerPath)}`);
  }
}

console.log('Finished zooming all logos.');
