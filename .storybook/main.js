const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const svgr = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite', // 👈  vite 사용을 위해 해당 옵션을 추가합니다.
  },
  /**
   * A option exposed by storybook-builder-vite for customizing the Vite config.
   * @see https://github.com/eirslett/storybook-builder-vite#customize-vite-config
   * @param {import("vite").UserConfig} config
   * @see https://vitejs.dev/config/
   */
  viteFinal: async (config) => {
    config.plugins.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
      }),
      svgr()
    );
    config.base = process.env.NODE_ENV === 'production' ? '/rui' : '/';
    return config;
  },
};
