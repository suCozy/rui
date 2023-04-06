import { RUIProvider } from '../src/context/RUIContext';
import { bg100, contents000, fixedBlack, fixedWhite } from '../src';
import React from 'react';
import { Preview } from '@storybook/react';

// global decorators를 설정하기 위해 반드시 필요한 react 모듈 import

/**
 * storybook layout settings
 */
export const parameters = {
  layout: 'padded',
  backgrounds: {
    default: 'background',
    values: [
      { name: 'background', value: bg100 },
      { name: 'contents', value: contents000 },
      { name: 'white', value: fixedWhite },
      { name: 'black', value: fixedBlack },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    showNav: true,
    isFullscreen: false,
    isToolshown: true,
    storySort: {
      method: 'alphabetical',
      // Order Docs Overview and Docs Overview/Intro story first
      order: ['Docs Overview', ['Intro']],
    },
  },
  knobs: {
    disable: true,
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // @see https://storybook.js.org/docs/react/writing-tests/accessibility-testing#configure
  a11y: {
    element: '#root',
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    options: {},
    manual: false,
  },
};

export const decorators = [
  (Story, context) => (
    <RUIProvider forceTheme={context.globals.theme}>
      <div style={{ margin: '3em', color: contents000 }}>
        <Story />
      </div>
    </RUIProvider>
  ),
];

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        items: [
          { value: 'light', title: '🌅 LightMode' },
          { value: 'dark', title: '🌌 DarkMode' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
