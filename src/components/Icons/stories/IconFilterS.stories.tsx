import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconFilterS } from "..";

export default {
  title: 'Icons/IconFilterS',
  component: IconFilterS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconFilterS>;

const Template: ComponentStory<typeof IconFilterS> = (args) => (
  <IconFilterS {...args} />
);

export const Basic = Template.bind({});