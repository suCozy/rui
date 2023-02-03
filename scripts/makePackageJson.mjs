import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { outputRule } from '../rollup.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async function () {
  console.log('Copy files for distribution...');

  const packageJsonObject = generatePackageJsonForDist();
  const outDir = getOutDir();

  fs.writeFileSync(
    path.resolve(__dirname, '..', outDir, 'package.json'),
    Buffer.from(JSON.stringify(packageJsonObject, null, 2), 'utf-8')
  );
  fs.copyFileSync(
    path.resolve(__dirname, '..', 'README.md'),
    path.resolve(__dirname, '..', outDir, 'README.md')
  );
})();

function generatePackageJsonForDist() {
  const packageJson = fs.readFileSync(
    path.resolve(__dirname, '../package.json').toString('utf-8')
  );
  const packageJsonObject = JSON.parse(packageJson);

  const modules = getModulesToBuild();

  packageJsonObject.exports = {
    '.': null,
  };
  modules.map((module) => {
    packageJsonObject.exports[`./${module.replace('/index', '')}`] = {
      import: `./${module}.mjs`,
      require: `./${module}.js`,
    };
  });

  return packageJsonObject;
}

function getOutDir() {
  const tsconfigJson = fs.readFileSync(
    path.resolve(__dirname, '../tsconfig.json').toString('utf-8')
  );
  const tsconfigJsonObject = JSON.parse(tsconfigJson);

  return tsconfigJsonObject.compilerOptions.outDir.replace('./', '');
}

function getModulesToBuild() {
  const subModules = Object.keys(outputRule);
  return subModules;
}
