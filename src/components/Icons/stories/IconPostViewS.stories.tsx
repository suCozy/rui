import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPostViewS } from "..";

export default {
  title: 'Icons/IconPostViewS',
  component: IconPostViewS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconPostViewS>;

const Template: ComponentStory<typeof IconPostViewS> = (args) => (
  <IconPostViewS {...args} />
);

export const Basic = Template.bind({});