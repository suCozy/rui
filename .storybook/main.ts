import { StorybookConfig } from '@storybook/react-vite';

import path from 'path';
import { InlineConfig } from 'vite';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        /** @see https://github.com/aleclarson/vite-tsconfig-paths */
        tsconfigPaths({
          projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
        }),
        svgr(),
      ],
      base: process.env.NODE_ENV === 'production' ? '/rui' : '/',
    } satisfies InlineConfig);
  },
  docs: {
    autodocs: true,
  },
};

export default config;
