import fs from 'fs';
import open from 'open';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async function () {
  const args = process.argv.slice(2);
  const buildConfigObject = getBuildConfigObject();
  const modulesToBuild = getModulesToBuild(buildConfigObject.modules ?? []);
  const resolveAlias = getResolveAlias(buildConfigObject.modules ?? []);

  console.log('Building modules...');

  await Promise.all(
    modulesToBuild.map(async (module) => {
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
            name: `remember-ui/${module}`,
            entry: getModuleEntryPath(module),
            formats: ['es', 'umd'],
            fileName: getOutputFileName(module),
          },
          emptyOutDir: false,
          rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'styled-components': 'styled',
              },
            },
          },
        },
        resolve: {
          alias: resolveAlias,
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
})();

function getBuildConfigObject() {
  const buildConfig = fs.readFileSync(
    path.resolve(__dirname, '..', 'buildConfig.json').toString('utf-8')
  );
  return JSON.parse(buildConfig) ?? {};
}

function getModulesToBuild(modules) {
  return ['index', ...(modules ?? [])];
}

function getResolveAlias(modules) {
  const absolutePaths = [
    ...new Set(modules.map((module) => module.split('/')[0])),
  ];
  return absolutePaths.map((absolutePath) => ({
    find: absolutePath,
    replacement: path.resolve(__dirname, '..', 'src', absolutePath),
  }));
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
