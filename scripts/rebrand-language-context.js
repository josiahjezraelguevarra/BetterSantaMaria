const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'react-app', 'src', 'contexts', 'LanguageContext.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Remove ilo block
// ilo block starts with '\n  ilo: {' and ends before '\n};\n\ntype Language'
const iloStart = content.indexOf('  ilo: {');
const iloEnd = content.indexOf('\n};\n\ntype Language');

if (iloStart !== -1 && iloEnd !== -1) {
  content = content.substring(0, iloStart) + content.substring(iloEnd);
  console.log('Successfully removed ilo block.');
} else {
  console.warn('Could not locate exact ilo boundaries:', { iloStart, iloEnd });
}

// 2. Update type Language and language array
content = content.replace(
  "type Language = 'en' | 'fil' | 'ilo';",
  "export type Language = 'en' | 'fil';"
);
content = content.replace(
  "['en', 'fil', 'ilo']",
  "['en', 'fil']"
);
content = content.replace(/bettersolano_lang/g, 'bettersantamaria_lang');

// 3. Rebrand text strings in en and fil
content = content.replace(/BetterSolano\.org/g, 'BetterSantaMaria.org');
content = content.replace(/BetterSolano/g, 'BetterSantaMaria');
content = content.replace(/Solano, Nueva Vizcaya/g, 'Santa Maria, Bulacan');
content = content.replace(/Solano/g, 'Santa Maria');
content = content.replace(/Nueva Vizcaya/g, 'Bulacan');

// Emergency hotline updates in language file
content = content.replace(/Pulis: \(078\) 326-5000/g, 'Pulis: (044) 815-2122');
content = content.replace(/Bombero: \(078\) 326-5111/g, 'Bombero: (044) 815-1111');
content = content.replace(/RHU: \(078\) 326-5222/g, 'RHU: (044) 815-3333');
content = content.replace(/Police: \(078\) 326-5000/g, 'Police: (044) 815-2122');
content = content.replace(/Fire: \(078\) 326-5111/g, 'Fire: (044) 815-1111');
content = content.replace(/RHU: \(078\) 326-5222/g, 'RHU: (044) 815-3333');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('LanguageContext.tsx successfully updated!');
