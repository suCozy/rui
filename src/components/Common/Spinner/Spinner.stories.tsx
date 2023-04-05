import { ComponentMeta, ComponentStory } from '@storybook/react';

import { divider } from '@/mixins';

import { Spinner } from './index';

export default {
  title: 'Common/Spinner',
  component: Spinner,
  args: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <div
    style={{ border: `solid 1px ${divider}`, height: '100px', width: '100px' }}
  >
    <Spinner {...args} />
  </div>
);

export const Default = Template.bind({});
