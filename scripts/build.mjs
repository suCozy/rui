import fs from 'fs';
import open from 'open';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

(async function () {
  const modules = getModulesToBuild();
  console.log('Building modules...');
  await Promise.all(
    modules.map(async (module) => {
      return await build({
        plugins: [
          visualizer({
            title: module,
            filename: `visualizer/${module}.stats.html`,
          }),
        ],
        build: {
          target: ['es2015'],
          lib: {
            entry: getModuleEntryPath(module),
            formats: ['es', 'cjs'],
            fileName: getOutputFileName(module),
          },
          emptyOutDir: false,
          rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
          },
        },
      });
    })
  );

  /**
   * NOTE: rollup-plugin-visualizer 에서 open 옵션이 있지만,
   * 같은 파일이 여러번 열리는 이슈가 있어서 직접 open 해줌
   */
  if (args.includes('--visualize')) {
    open(path.resolve(__dirname, '..', 'visualizer', 'index.stats.html'));
  }

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

function getModulesToBuild() {
  const buildConfig = fs.readFileSync(
    path.resolve(__dirname, '../buildConfig.json').toString('utf-8')
  );
  const buildConfigObject = JSON.parse(buildConfig);
  return ['index', ...(buildConfigObject.modules ?? [])];
}

function getModuleEntryPath(module) {
  const modulePaths = module === 'index' ? ['index'] : [module, 'index'];

  return path.resolve(__dirname, '../src', `${modulePaths.join('/')}.ts`);
}

function getOutputFileName(module) {
  return (format) => {
    const fileNameTokens = [module];
    if (format !== 'es') {
      fileNameTokens.push(format);
    }
    fileNameTokens.push('js');

    return fileNameTokens.join('.');
  };
}

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

  return packageJsonObject;
}

function getOutDir() {
  const tsconfigJson = fs.readFileSync(
    path.resolve(__dirname, '../tsconfig.json').toString('utf-8')
  );
  const tsconfigJsonObject = JSON.parse(tsconfigJson);

  return tsconfigJsonObject.compilerOptions.outDir.replace('./', '');
}
