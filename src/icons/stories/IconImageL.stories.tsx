import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconImageL } from '..';

export default {
  title: 'Icons/IconImageL',
  component: IconImageL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconImageL>;

const Template: ComponentStory<typeof IconImageL> = (args) => (
  <IconImageL {...args} />
);

export const Basic = Template.bind({});
