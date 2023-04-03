import { RUIProvider } from '../src/context/RUIContext';
import { bg100, contents000, fixedBlack, fixedWhite } from '../src';
import React from 'react';
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

/**
 * global decorators
 * @see https://vitejs.dev/guide/features.html#jsx
 * vite 설정으로 인해 JSX syntax를 사용하려면 .jsx 확장자를 사용해야한다.
 */
export const decorators = [
  (Story) => (
    <RUIProvider>
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    </RUIProvider>
  ),
];
