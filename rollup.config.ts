import { defineConfig, Plugin } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

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
        extensions: [...extensions, '.svg'],
        babelHelpers: 'bundled',
      }),
    ],
    input: './src/index.ts',
    output: {
      dir: './dist',
      format: 'es',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    external: ['react', 'react-dom', 'styled-components'],
  });
};
