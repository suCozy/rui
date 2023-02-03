import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import { promise as glob } from 'glob-promise';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default async () => {
  const entries = await glob('./src/**/index.{ts,tsx}');
  const input = entries.reduce((obj, entry) => {
    obj[getInputAlias(entry)] = entry;

    return obj;
  }, {});

  return defineConfig([
    {
      plugins: [
        typescript({
          include: ['custom.d.ts', 'src/**/*.{ts,tsx}'],
          exclude: [
            'node_modules',
            'dist',
            'storybook-static',
            'rollup.config.mjs',
            '**/stories/**/*',
            'src/**/*.stories.{ts,tsx}',
          ],
        }),
        nodeResolve({
          extensions,
        }),
        commonjs(),
        babel({
          extensions: extensions,
          babelHelpers: 'runtime',
          exclude: './node_modules/**/*',
        }),
        svgr({ exportType: 'named', typescript: true }),
      ],
      input,
      output: [
        {
          sourcemap: true,
          dir: './dist',
          format: 'es',
          entryFileNames: '[name].mjs',
          chunkFileNames: 'chunks/[hash]/[name].mjs',
        },
        {
          sourcemap: true,
          dir: './dist',
          format: 'cjs',
          entryFileNames: '[name].js',
          chunkFileNames: 'chunks/[hash]/[name].js',
        },
      ],
      external: ['react', 'react-dom', 'styled-components', /@babel\/runtime/],
    },
  ]);
};

function getInputAlias(path) {
  const aliasRegexp = /^\.\/src\/(.+)(\.tsx?)$/g;
  return aliasRegexp.exec(path)[1];
}
