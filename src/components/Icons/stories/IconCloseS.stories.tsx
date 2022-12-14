import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCloseS } from "..";

export default {
  title: 'Icons/IconCloseS',
  component: IconCloseS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCloseS>;

const Template: ComponentStory<typeof IconCloseS> = (args) => (
  <IconCloseS {...args} />
);

export const Basic = Template.bind({});