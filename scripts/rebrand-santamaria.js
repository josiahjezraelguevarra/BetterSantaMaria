const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!['node_modules', 'dist', '.git', 'react-app'].includes(file)) {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = getHtmlFiles(rootDir);

console.log(`Found ${htmlFiles.length} HTML files to rebrand...`);

let modifiedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Remove ILO language button
  content = content.replace(
    /<button[^>]*data-lang=["']ilo["'][^>]*>[\s\S]*?<\/button>\s*/gi,
    ''
  );

  // 2. Remove hreflang="ilo"
  content = content.replace(
    /<link[^>]*hreflang=["']ilo["'][^>]*>\s*/gi,
    ''
  );

  // 3. Rebrand URLs & Domains
  content = content.replace(/https:\/\/bettersolano\.org/g, 'https://bettersantamaria.org');
  content = content.replace(/BetterSolano\.org/g, 'BetterSantaMaria.org');
  content = content.replace(/BetterSolano/g, 'BetterSantaMaria');

  // 4. Decouple upstream Google Analytics
  content = content.replace(/G-8777S9SP9X/g, '');

  // 5. Geotags & Location
  content = content.replace(/Solano, Nueva Vizcaya/g, 'Santa Maria, Bulacan');
  content = content.replace(/content=["']PH-NUV["']/g, 'content="PH-BUL"');
  content = content.replace(/content=["']16\.5167;121\.1833["']/g, 'content="14.8197;120.9610"');
  content = content.replace(/content=["']16\.5167, 121\.1833["']/g, 'content="14.8197, 120.9610"');

  // 6. Common Footer attribution and text
  content = content.replace(
    /Cost to the People of Solano =/g,
    'Cost to the People of Santa Maria ='
  );
  content = content.replace(
    /Gastos sa mga Tao ng Solano =/g,
    'Gastos sa mga Tao ng Santa Maria ='
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
  }
}

console.log(`Successfully rebranded ${modifiedCount} HTML files.`);
