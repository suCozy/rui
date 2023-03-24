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
import typescript from 'rollup-plugin-typescript2';
import { fileURLToPath } from 'url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_DIST_DIR = './package';
const SOURCE_DIR = './src';

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.json', '.mts'];
const libraryEntryNames = ['legacy', 'icons'];

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
        emit: true,
        emitDeclarationOnly: true,
        mapRoot: process.cwd(),
        declarationDir: path.join(PACKAGE_DIST_DIR),
      },
    },
    useTsconfigDeclarationDir: true,
  }),
  peerDepsExternal(),
  alias({
    entries: {
      // tsconfig의 paths 옵션을 반영
      '@': path.join(__dirname, SOURCE_DIR),
    },
  }),
  nodeResolve({
    extensions,
    // esm을 먼저 읽도록 순서 변경
    mainFields: ['main', 'module'],
  }),
  commonjs({
    sourceMap: true,
  }),
  babel({
    sourceMap: true,
    extensions,
    // babelHelper를 번들에 포함하지 않고 런타임에서 사용하는 시점에 불러오도록 설정
    babelHelpers: 'runtime',
    exclude: './node_modules/**/*',
  }),
  svgr({ exportType: 'named', typescript: true }),
  terser({ sourceMap: true }),
];

export default async () => {
  // ./package 폴더가 없다면 생성
  if (!fs.existsSync(PACKAGE_DIST_DIR)) {
    fs.mkdirSync(PACKAGE_DIST_DIR);
  }

  // storybook 관련 파일 제외하고 복사
  fs.cpSync(SOURCE_DIR, path.join(PACKAGE_DIST_DIR, SOURCE_DIR), {
    recursive: true,
    filter: (source) => !source.includes('stories'),
  });

  // src에서 참조할 tsconfig 복사
  fs.copyFileSync(
    './tsconfig.json',
    path.join(PACKAGE_DIST_DIR, 'tsconfig.json')
  );

  // package.json 복사
  fs.copyFileSync(
    './package.json',
    path.join(PACKAGE_DIST_DIR, 'package.json')
  );

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
      plugins,
      input: {
        index: path.join(SOURCE_DIR, '/index.ts'),
        ...inputEntries,
      },
      output: ['cjs', 'esm'].map(getOutputOption),
      external: [/@babel\/runtime/],
    },
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

function getOutputOption(format) {
  return {
    dir: PACKAGE_DIST_DIR,
    sourcemap: true,
    format,
    entryFileNames: `[name].${format}.js`,
    chunkFileNames: `chunks/[hash]/[name].${format}.js`,
    interop: 'auto',
    manualChunks: (id) => {
      if (id.endsWith('.svg')) {
        return 'svgAssets';
      }
    },
  };
}
