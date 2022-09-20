import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  packageJsonObject.scripts = {};
  packageJsonObject.devDependencies = {};
  if (packageJsonObject.main.startsWith('dist')) {
    packageJsonObject.main = packageJsonObject.main.replace('dist/', '');
  }
  if (packageJsonObject.module.startsWith('dist')) {
    packageJsonObject.module = packageJsonObject.module.replace('dist/', '');
  }

  const modules = getModulesToBuild();
  packageJsonObject.exports = {
    '.': {
      import: `./index.js`,
      require: `./index.umd.js`,
    },
  };
  modules.map((module) => {
    packageJsonObject.exports[`./${module}`] = {
      import: `./${module}.js`,
      require: `./${module}.umd.js`,
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
  const buildConfig = fs.readFileSync(
    path.resolve(__dirname, '../buildConfig.json').toString('utf-8')
  );
  const buildConfigObject = JSON.parse(buildConfig);
  return ['index', ...(buildConfigObject.modules ?? [])];
}
