import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNoticeS } from '..';

export default {
  title: 'Icons/IconNoticeS',
  component: IconNoticeS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconNoticeS>;

const Template: ComponentStory<typeof IconNoticeS> = (args) => (
  <IconNoticeS {...args} />
);

export const Basic = Template.bind({});
