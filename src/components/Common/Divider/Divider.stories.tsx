import { ComponentStory } from '@storybook/react';

import Flex from '../Flex';

import Divider from './index';

export default {
  title: 'Common/Divider',
  component: Divider,
};

export const Template: ComponentStory<typeof Divider> = () => (
  <div
    style={{
      width: '100%',
      maxWidth: 300,
      padding: '15px',
      background: 'white',
    }}
  >
    <p style={{ fontWeight: 500 }}>리멤버 디자인시스템</p>
    <p>An open-source design system library.</p>
    <Divider style={{ margin: '15px 0' }} />
    <Flex height="20px">
      <p>Blog</p>
      <Divider decorative orientation="vertical" style={{ margin: '0 15px' }} />
      <p>Docs</p>
      <Divider decorative orientation="vertical" style={{ margin: '0 15px' }} />
      <p>Source</p>
    </Flex>
  </div>
);
