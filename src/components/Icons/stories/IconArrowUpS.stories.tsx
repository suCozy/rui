import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowUpS } from "..";

export default {
  title: 'Icons/IconArrowUpS',
  component: IconArrowUpS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconArrowUpS>;

const Template: ComponentStory<typeof IconArrowUpS> = (args) => (
  <IconArrowUpS {...args} />
);

export const Basic = Template.bind({});