import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const outputRule = {
  'colors/v2/index': './src/colors/v2/index.ts',
  'colors/v3/index': './src/colors/v3/index.ts',
  'components/index': './src/components/index.ts',
  'mixins/index': './src/mixins/index.ts',
};

export default () => {
  return defineConfig({
    plugins: [
      svgr(),
      typescript(),
      nodeResolve({
        extensions,
      }),
      url(),
      commonjs(),
      babel({
        extensions: extensions,
        babelHelpers: 'runtime',
        exclude: './node_modules/**/*',
      }),
    ],
    input: outputRule,
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
  });
};
