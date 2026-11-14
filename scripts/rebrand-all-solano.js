const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['.git', 'node_modules', '.vscode'].includes(entry.name)) {
        getFiles(fullPath, fileList);
      }
    } else {
      const ext = path.extname(entry.name);
      if (['.html', '.js', '.mjs', '.ts', '.tsx', '.json', '.md', '.webmanifest', '.xml', '.txt'].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const allFiles = getFiles(rootDir);
console.log(`Found ${allFiles.length} files to scan and rebrand...`);

let modifiedCount = 0;
let totalReplacements = 0;

for (const filePath of allFiles) {
  // Skip this script itself and temporary check scripts
  if (
    filePath === __filename ||
    filePath.includes('check-') ||
    filePath.includes('inspect-') ||
    filePath.includes('find-')
  ) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Specific Filipizen URLs
  content = content.replace(/https:\/\/www\.filipizen\.com\/partners\/nuevavizcaya_solano\//g, 'https://www.filipizen.com/partners/bulacan_santamaria/');
  content = content.replace(/nuevavizcaya_solano/g, 'bulacan_santamaria');

  // 2. Specific External Solano Links & Portals
  content = content.replace(/https:\/\/solanomayorsoffice-oasys\.com/g, 'https://santamariamayorsoffice-oasys.com');
  content = content.replace(/solanomayorsoffice-oasys\.com/g, 'santamariamayorsoffice-oasys.com');
  content = content.replace(/https:\/\/www\.facebook\.com\/OfficialLguSolanoFanpage\/?/g, 'https://www.facebook.com/OfficialLguSantaMaria/');
  content = content.replace(/https:\/\/www\.facebook\.com\/OfficialLGUSolano\/?/g, 'https://www.facebook.com/OfficialLguSantaMaria/');
  content = content.replace(/OfficialLguSolanoFanpage/g, 'OfficialLguSantaMaria');
  content = content.replace(/OfficialLGUSolano/g, 'OfficialLguSantaMaria');
  content = content.replace(/https:\/\/sangguniangbayan\.solano\.gov\.ph\/?/g, 'https://sangguniangbayan.santamariabulacan.gov.ph/');
  content = content.replace(/sangguniangbayan\.solano\.gov\.ph/g, 'sangguniangbayan.santamariabulacan.gov.ph');
  content = content.replace(/https:\/\/solano\.gov\.ph\/?/g, 'https://santamariabulacan.gov.ph/');
  content = content.replace(/solano\.gov\.ph/g, 'santamariabulacan.gov.ph');
  content = content.replace(/https:\/\/quiz\.bettersolano\.org\/?/g, 'https://quiz.bettersantamaria.org/');
  content = content.replace(/quiz\.bettersolano\.org/g, 'quiz.bettersantamaria.org');
  content = content.replace(/https:\/\/www\.facebook\.com\/bettersolano\.org\/?/g, 'https://www.facebook.com/bettersantamaria.org/');
  content = content.replace(/https:\/\/www\.linkedin\.com\/company\/bettersolano\/?/g, 'https://www.linkedin.com/company/bettersantamaria/');
  content = content.replace(/https:\/\/github\.com\/BetterSantaMaria\/bettersolano/g, 'https://github.com/josiahjezraelguevarra/BetterSantaMaria');
  content = content.replace(/https:\/\/github\.com\/BetterSolano\/bettersolano/g, 'https://github.com/josiahjezraelguevarra/BetterSantaMaria');
  content = content.replace(/https:\/\/github\.com\/BetterSolano/g, 'https://github.com/josiahjezraelguevarra');

  // 3. Email addresses
  content = content.replace(/volunteer@bettersolano\.org/g, 'volunteer@bettersantamaria.org');
  content = content.replace(/mayor@solano\.gov\.ph/g, 'mayor@santamariabulacan.gov.ph');
  content = content.replace(/vicemayor@solano\.gov\.ph/g, 'vicemayor@santamariabulacan.gov.ph');
  content = content.replace(/assessor@solano\.gov\.ph/g, 'assessor@santamariabulacan.gov.ph');
  content = content.replace(/gso@solano\.gov\.ph/g, 'gso@santamariabulacan.gov.ph');
  content = content.replace(/mswdo@solano\.gov\.ph/g, 'mswdo@santamariabulacan.gov.ph');
  content = content.replace(/services@solano\.gov\.ph/g, 'services@santamariabulacan.gov.ph');
  content = content.replace(/civilreg@solano\.gov\.ph/g, 'civilreg@santamariabulacan.gov.ph');
  content = content.replace(/lcr@solano\.gov\.ph/g, 'lcr@santamariabulacan.gov.ph');
  content = content.replace(/accounting@solano\.gov\.ph/g, 'accounting@santamariabulacan.gov.ph');
  content = content.replace(/agri@solano\.gov\.ph/g, 'agri@santamariabulacan.gov.ph');
  content = content.replace(/bpls@solano\.gov\.ph/g, 'bpls@santamariabulacan.gov.ph');
  content = content.replace(/budget@solano\.gov\.ph/g, 'budget@santamariabulacan.gov.ph');
  content = content.replace(/engineer@solano\.gov\.ph/g, 'engineer@santamariabulacan.gov.ph');
  content = content.replace(/hrmo@solano\.gov\.ph/g, 'hrmo@santamariabulacan.gov.ph');
  content = content.replace(/mdrrmo@solano\.gov\.ph/g, 'mdrrmo@santamariabulacan.gov.ph');
  content = content.replace(/mho@solano\.gov\.ph/g, 'mho@santamariabulacan.gov.ph');
  content = content.replace(/mpdo@solano\.gov\.ph/g, 'mpdo@santamariabulacan.gov.ph');
  content = content.replace(/treasurer@solano\.gov\.ph/g, 'treasurer@santamariabulacan.gov.ph');
  content = content.replace(/lgusolanonv@gmail\.com/g, 'lgusantamariabulacan@gmail.com');

  // 4. Domains & Brand
  content = content.replace(/BetterSolano\.org/g, 'BetterSantaMaria.org');
  content = content.replace(/bettersolano\.org/g, 'bettersantamaria.org');
  content = content.replace(/BetterSolano/g, 'BetterSantaMaria');
  content = content.replace(/Better Solano/g, 'Better Santa Maria');
  content = content.replace(/bettersolano/g, 'bettersantamaria');
  content = content.replace(/better-solano/g, 'better-santamaria');
  content = content.replace(/Better-Solano/g, 'Better-SantaMaria');

  // 5. Locations & Coordinates
  content = content.replace(/Solano,\s*Nueva\s*Vizcaya\s*3708/g, 'Santa Maria, Bulacan 3022');
  content = content.replace(/Solano,\s*Nueva\s*Vizcaya/g, 'Santa Maria, Bulacan');
  content = content.replace(/Solano\s*Nueva\s*Vizcaya/g, 'Santa Maria Bulacan');
  content = content.replace(/Nueva\s*Vizcaya\s*3708/g, 'Bulacan 3022');
  content = content.replace(/Nueva\s*Vizcaya/g, 'Bulacan');
  content = content.replace(/SOLANO_LAT:\s*16\.5167/g, 'SANTAMARIA_LAT: 14.8197');
  content = content.replace(/SOLANO_LON:\s*121\.1833/g, 'SANTAMARIA_LON: 120.9610');
  content = content.replace(/CONFIG\.SOLANO_LAT/g, 'CONFIG.SANTAMARIA_LAT');
  content = content.replace(/CONFIG\.SOLANO_LON/g, 'CONFIG.SANTAMARIA_LON');
  content = content.replace(/SOLANO_CENTER:\s*\[16\.5167,\s*121\.1833\]/g, 'SANTAMARIA_CENTER: [14.8197, 120.9610]');
  content = content.replace(/this\.SOLANO_CENTER/g, 'this.SANTAMARIA_CENTER');
  content = content.replace(/SOLANO_CENTER/g, 'SANTAMARIA_CENTER');
  content = content.replace(/solano_weather_cache/g, 'santamaria_weather_cache');

  // 6. Demonyms
  content = content.replace(/Solaneños/g, 'Santa Mariaños');
  content = content.replace(/Solane\u00f1os/g, 'Santa Mariaños');
  content = content.replace(/SolaneAos/g, 'Santa Mariaños');
  content = content.replace(/SolaneAos/g, 'Santa Mariaños');
  content = content.replace(/Solaneos/g, 'Santa Mariaños');
  content = content.replace(/Solanenos/g, 'Santa Mariaños');
  content = content.replace(/Solaneño/g, 'Santa Mariaño');
  content = content.replace(/Solaneno/g, 'Santa Mariaño');

  // 7. Entities & Quizzes
  content = content.replace(/LGU Solano/g, 'LGU Santa Maria');
  content = content.replace(/Municipality of Solano/g, 'Municipality of Santa Maria');
  content = content.replace(/Sangguniang Bayan ng Solano/g, 'Sangguniang Bayan ng Santa Maria');
  content = content.replace(/Sangguniang Bayan of Solano/g, 'Sangguniang Bayan of Santa Maria');
  content = content.replace(/Bayan ng Solano/g, 'Bayan ng Santa Maria');
  content = content.replace(/Solano Municipal Hall/g, 'Santa Maria Municipal Hall');
  content = content.replace(/Solano Quiz/g, 'Santa Maria Quiz');
  content = content.replace(/Solano quiz/g, 'Santa Maria quiz');

  // 8. Key attributes & email-based slugs in translation keys
  content = content.replace(/solanogovph/g, 'santamariabulacangovph');
  content = content.replace(/solanonv/g, 'santamariabulacan');

  // 9. Slugs / Hyphenated keys in HTML data-i18n and translations.js
  content = content.replace(/-solano-/g, '-santa-maria-');
  content = content.replace(/-solano'/g, '-santa-maria\'');
  content = content.replace(/-solano"/g, '-santa-maria"');
  content = content.replace(/'solano-/g, '\'santa-maria-');
  content = content.replace(/"solano-/g, '"santa-maria-');

  // 10. General Word Boundary Replacements
  content = content.replace(/\bSOLANO\b/g, 'SANTA MARIA');
  content = content.replace(/\bSolano\b/g, 'Santa Maria');
  content = content.replace(/\bsolano\b/g, 'santa maria');

  // If this is translations.js, ensure fallback logic in getTranslation
  if (path.basename(filePath) === 'translations.js') {
    if (!content.includes('// Fallback for legacy solano keys')) {
      content = content.replace(
        /getTranslation:\s*function\s*\(\s*key\s*,\s*lang\s*,\s*params\s*\)\s*\{/,
        `getTranslation: function (key, lang, params) {
    // Fallback for legacy solano keys
    if (key && typeof key === 'string' && key.includes('solano')) {
      const mappedKey = key.replace(/better-solano/g, 'better-santamaria').replace(/solano/g, 'santa-maria');
      const fallbackTrans = this.getTranslation(mappedKey, lang, params);
      if (fallbackTrans) return fallbackTrans;
    }`
      );
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Rebranded: ${path.relative(rootDir, filePath)}`);
  }
}

console.log(`\nRebranding complete! Modified ${modifiedCount} files.`);
