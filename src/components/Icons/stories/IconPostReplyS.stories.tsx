import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPostReplyS } from "..";

export default {
  title: 'Icons/IconPostReplyS',
  component: IconPostReplyS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconPostReplyS>;

const Template: ComponentStory<typeof IconPostReplyS> = (args) => (
  <IconPostReplyS {...args} />
);

export const Basic = Template.bind({});