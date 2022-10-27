import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
/**
 * NOTE: 빌드 관련 설정은 scripts/build.mjs 를 확인해주세요.
 */

export default () => {
  return defineConfig({
    plugins: [
      process.env.npm_lifecycle_event === 'build' ? null : react(),
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
      }),
      svgr(),
    ],
  });
};
