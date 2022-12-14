import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSearchS } from "..";

export default {
  title: 'Icons/IconSearchS',
  component: IconSearchS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconSearchS>;

const Template: ComponentStory<typeof IconSearchS> = (args) => (
  <IconSearchS {...args} />
);

export const Basic = Template.bind({});