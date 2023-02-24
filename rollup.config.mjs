import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import svgr from '@svgr/rollup';
import fs from 'fs';
import { promise as glob } from 'glob-promise';
import path from 'path';
import { defineConfig } from 'rollup';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import typescript from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = './package';
const SOURCE_DIR = './src';

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.json', '.mts'];
const libraryEntryNames = ['legacy', 'icons'];
const packageJsonGenerators = libraryEntryNames.map((entryName) => {
  return generatePackageJson({
    outputFolder: path.join(BASE_DIR, entryName),
    baseContents: () => {
      return {
        main: './index.js',
        module: './index.esm.js',
        types: './index.d.ts',
      };
    },
  });
});

const plugins = [
  typescript({
    include: ['custom.d.ts', './src/**/*.{ts,tsx}'],
    exclude: [
      'node_modules',
      'storybook-static',
      'rollup.config.esm.js',
      '**/stories',
      '**/*.stories.{ts,tsx}',
    ],
    tsconfigOverride: {
      compilerOptions: {
        mapRoot: path.join(process.cwd()),
        declarationDir: path.join(BASE_DIR),
      },
    },
    useTsconfigDeclarationDir: true,
  }),
  alias({
    entries: {
      '@': path.join(__dirname, SOURCE_DIR),
    },
  }),
  nodeResolve({
    extensions,
  }),
  commonjs({
    sourceMap: true,
  }),
  babel({
    sourceMap: true,
    extensions,
    babelHelpers: 'runtime',
    exclude: './node_modules/**/*',
  }),
  svgr({ exportType: 'named', typescript: true }),
  terser({ sourceMap: true }),
];

export default async () => {
  if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR);
  }
  fs.cpSync(SOURCE_DIR, path.join(BASE_DIR, SOURCE_DIR), {
    recursive: true,
    filter: (source) => !source.includes('stories'),
  });

  const entries = await glob(path.join(SOURCE_DIR, '**/index.{ts,tsx}'));
  const inputEntries = entries.reduce((obj, entry) => {
    if (entry === path.join(SOURCE_DIR, 'index.ts')) {
      return obj;
    }

    obj[getInputAlias(entry)] = entry;

    return obj;
  }, {});

  return defineConfig([
    {
      plugins: [...plugins],
      input: {
        index: path.join(SOURCE_DIR, '/index.ts'),
        // ...Object.fromEntries(
        //   libraryEntryNames.map((entry) => [
        //     `${entry}/index`,
        //     path.join(SOURCE_DIR, entry, '/index.ts'),
        //   ])
        // ),
      },
      output: {
        dir: BASE_DIR,
        sourcemap: true,
        format: 'cjs',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[hash]/[name].js',
      },
      external: ['react', 'react-dom', 'styled-components', /@babel\/runtime/],
    },
    {
      plugins: [
        ...plugins,
        generatePackageJson({
          inputFolder: './',
          outputFolder: BASE_DIR,
          baseContents: (options) => {
            return options;
          },
        }),
        ...packageJsonGenerators,
      ],
      input: {
        index: path.join(SOURCE_DIR, '/index.ts'),
        ...inputEntries,
      },
      output: [
        {
          dir: BASE_DIR,
          sourcemap: true,
          format: 'es',
          entryFileNames: '[name].esm.js',
          chunkFileNames: 'chunks/[hash]/[name].esm.js',
          plugins: [
            visualizer({
              open: true,
            }),
          ],
        },
        // {
        //   dir: BASE_DIR,
        //   sourcemap: true,
        //   format: 'cjs',
        //   entryFileNames: '[name].js',
        //   chunkFileNames: 'chunks/[hash]/[name].js',
        // },
      ],
      external: ['react', 'react-dom', 'styled-components', /@babel\/runtime/],
    },
    // {
    //   input: './custom.d.ts',
    //   output: {
    //     format: 'es',
    //     dir: output,
    //     entryFileNames: 'custom.d.ts',
    //   },
    //   plugins: [dts()],
    // },
    //
  ]);
};

function getInputAlias(path) {
  const aliasRegexp = /^src\/(.+)(\/index\.tsx?)$/g;
  const dirName = aliasRegexp.exec(path)[1];
  const entryName = `${dirName}/index`;

  if (libraryEntryNames.includes(dirName)) {
    return entryName;
  }

  return `dist/${entryName}`;
}
