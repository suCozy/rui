import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon1on1M } from '..';

export default {
  title: 'Icons/Icon1on1M',
  component: Icon1on1M,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof Icon1on1M>;

const Template: ComponentStory<typeof Icon1on1M> = (args) => (
  <Icon1on1M {...args} />
);

export const Basic = Template.bind({});
