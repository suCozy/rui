import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTimeS } from "..";

export default {
  title: 'Icons/IconTimeS',
  component: IconTimeS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconTimeS>;

const Template: ComponentStory<typeof IconTimeS> = (args) => (
  <IconTimeS {...args} />
);

export const Basic = Template.bind({});