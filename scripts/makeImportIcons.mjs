import path from 'path';
import fs from 'fs';

const ICONS_DIR = '/src/assets/icons';
const EXPORT_DIR = '/src/assets';

const svgIconFiles = fs
  .readdirSync(path.join(process.cwd(), ICONS_DIR))
  .filter((fileName) => /\.svg$/.test(fileName));

const importString = svgIconFiles
  .map(
    (svgFileName) =>
      `export { ReactComponent as ${svgFileName.replace(
        '.svg',
        ''
      )} } from '${path.join(ICONS_DIR, svgFileName)}';`
  )
  .join('\n');

fs.writeFileSync(
  path.join(process.cwd(), EXPORT_DIR, 'index.ts'),
  importString
);
