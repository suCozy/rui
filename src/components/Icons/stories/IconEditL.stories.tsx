import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconEditL } from "..";

export default {
  title: 'Icons/IconEditL',
  component: IconEditL,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconEditL>;

const Template: ComponentStory<typeof IconEditL> = (args) => (
  <IconEditL {...args} />
);

export const Basic = Template.bind({});