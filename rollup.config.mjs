import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import svgr from '@svgr/rollup';
import { promise as glob } from 'glob-promise';
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default async () => {
  const entries = await glob('./src/**/index.ts');
  const input = entries.reduce((obj, entry) => {
    obj[getInputAlias(entry)] = entry;

    return obj;
  }, {});

  return defineConfig([
    {
      plugins: [
        visualizer({ open: true }),
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
        commonjs({
          sourceMap: true,
        }),
        babel({
          sourceMap: true,
          extensions: extensions,
          babelHelpers: 'runtime',
          exclude: './node_modules/**/*',
        }),
        svgr({ exportType: 'named', typescript: true }),
        terser({ sourceMap: true }),
      ],
      input,
      output: [
        {
          dir: './dist',
          sourcemap: true,
          format: 'es',
          entryFileNames: '[name].mjs',
          chunkFileNames: 'chunks/[hash]/[name].mjs',
        },
        {
          dir: './dist',
          sourcemap: true,
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
  const aliasRegexp = /^\.\/src\/(.+)(\.ts)$/g;
  return aliasRegexp.exec(path)[1];
}
