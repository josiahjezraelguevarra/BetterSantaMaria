const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Ensure logo files are copied to root and dist
const srcLogo = path.join(rootDir, 'react-app', 'public', 'assets', 'images', 'logo', 'better-santamaria-logo.svg');
const srcLogoWhite = path.join(rootDir, 'react-app', 'public', 'assets', 'images', 'logo', 'better-santamaria-logo-white.svg');

const destDirs = [
  path.join(rootDir, 'assets', 'images', 'logo'),
  path.join(rootDir, 'dist', 'assets', 'images', 'logo'),
  path.join(rootDir, 'react-app', 'public', 'assets', 'images', 'logo'),
];

if (fs.existsSync(path.join(rootDir, 'react-app', 'out', 'assets', 'images', 'logo'))) {
  destDirs.push(path.join(rootDir, 'react-app', 'out', 'assets', 'images', 'logo'));
}

for (const destDir of destDirs) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  // Copy better-santamaria logos
  fs.copyFileSync(srcLogo, path.join(destDir, 'better-santamaria-logo.svg'));
  fs.copyFileSync(srcLogoWhite, path.join(destDir, 'better-santamaria-logo-white.svg'));
  // Overwrite better-santamaria logos with Santa Maria logos as fallback
  fs.copyFileSync(srcLogo, path.join(destDir, 'better-santamaria-logo.svg'));
  fs.copyFileSync(srcLogoWhite, path.join(destDir, 'better-santamaria-logo-white.svg'));
}
console.log('Logo SVG files copied and fallback aliases updated in all logo directories.');

// 2. Collect all files to update
function getTargetFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['.git', 'node_modules', '.vscode'].includes(entry.name)) {
        getTargetFiles(fullPath, fileList);
      }
    } else {
      const ext = path.extname(entry.name);
      if (['.html', '.js', '.ts', '.tsx', '.json'].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const allFiles = getTargetFiles(rootDir);
console.log(`Scanning ${allFiles.length} files for logo references...`);

let modifiedFiles = 0;

for (const filePath of allFiles) {
  // Don't modify the script itself
  if (filePath === __filename) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace file references (handle white first to prevent partial collision)
  content = content.replace(/better-santamaria-logo-white\.svg/g, 'better-santamaria-logo-white.svg');
  content = content.replace(/better-santamaria-logo\.svg/g, 'better-santamaria-logo.svg');

  // Replace alt text
  content = content.replace(/alt=["']Better Santa Maria Logo["']/gi, 'alt="BetterSantaMaria.org Logo"');
  content = content.replace(/alt=["']Better Santa Maria logo["']/gi, 'alt="BetterSantaMaria.org logo"');
  content = content.replace(/alt=["']Municipality of Santa Maria Logo["']/gi, 'alt="Municipality of Santa Maria Logo"');
  content = content.replace(/alt=["']Municipality of Santa Maria logo["']/gi, 'alt="Municipality of Santa Maria logo"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated: ${path.relative(rootDir, filePath)}`);
  }
}

console.log(`Finished: ${modifiedFiles} files successfully updated.`);
