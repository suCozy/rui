import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPostReplyS } from '..';

export default {
  title: 'Icons/IconPostReplyS',
  component: IconPostReplyS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPostReplyS>;

const Template: ComponentStory<typeof IconPostReplyS> = (args) => (
  <IconPostReplyS {...args} />
);

export const Basic = Template.bind({});
