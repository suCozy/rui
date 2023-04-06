import fs from 'fs';
import { default as humps } from 'humps';
import path from 'path';

const BASE_DIR = path.join(process.cwd(), '/src');
const ICONS_DIR = path.join(BASE_DIR, 'assets/icons');
const EXPORT_DIR = path.join(BASE_DIR, 'icons');

const createIconFileTemplate = (componentName, fileName) => {
  const iconAbsPath = path.join(ICONS_DIR, fileName);
  const iconRelPath = path.relative(EXPORT_DIR, iconAbsPath);
  return `export { ReactComponent as ${componentName} } from '${iconRelPath}';`;
};

const svgIconFiles = fs
  .readdirSync(path.join(ICONS_DIR))
  .filter((fileName) => /\.svg$/.test(fileName));

const icons = svgIconFiles
  .map((fileName) => {
    const componentName = humps.pascalize(fileName.replace('.svg', ''));
    return createIconFileTemplate(componentName, fileName);
  })
  .join('\n');

fs.writeFileSync(path.join(EXPORT_DIR, 'index.ts'), icons + '\n');
