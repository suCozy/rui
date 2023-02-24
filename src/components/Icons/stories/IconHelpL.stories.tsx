import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHelpL } from '..';

export default {
  title: 'Icons/IconHelpL',
  component: IconHelpL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconHelpL>;

const Template: ComponentStory<typeof IconHelpL> = (args) => (
  <IconHelpL {...args} />
);

export const Basic = Template.bind({});
