import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVideoL } from '..';

export default {
  title: 'Icons/IconVideoL',
  component: IconVideoL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconVideoL>;

const Template: ComponentStory<typeof IconVideoL> = (args) => (
  <IconVideoL {...args} />
);

export const Basic = Template.bind({});
