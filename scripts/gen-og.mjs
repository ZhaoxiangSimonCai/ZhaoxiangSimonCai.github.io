// One-off generator for the default Open Graph card (public/og/default.png).
// Run with: npm run og   (or: node scripts/gen-og.mjs)
// Uses generic system font families because sharp's SVG rasteriser does not
// load the site's webfonts. Colours match the dark-theme tokens in global.css.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

mkdirSync('public/og', { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0d10"/>
  <rect x="0" y="0" width="1200" height="8" fill="#ff4a5c"/>
  <circle cx="1080" cy="120" r="260" fill="#ff4a5c" opacity="0.07"/>
  <circle cx="120" cy="560" r="200" fill="#6ca0e8" opacity="0.06"/>
  <text x="80" y="250" font-family="Georgia, serif" font-size="78" font-weight="700" fill="#ecebe4">Zhaoxiang (Simon) Cai</text>
  <text x="80" y="330" font-family="Georgia, serif" font-size="42" fill="#ff4a5c">Cancer Institute NSW Early Career Fellow</text>
  <text x="80" y="402" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#9ea5b3">Cancer Data Scientist &#183; CMRI &#183; University of Sydney</text>
  <text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#8d93a1">Deep learning for cancer multi-omics &#8212; federated, generative, foundation models</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og/default.png');
console.log('wrote public/og/default.png');
