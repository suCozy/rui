import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon1on1L } from "..";

export default {
  title: 'Icons/Icon1on1L',
  component: Icon1on1L,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof Icon1on1L>;

const Template: ComponentStory<typeof Icon1on1L> = (args) => (
  <Icon1on1L {...args} />
);

export const Basic = Template.bind({});