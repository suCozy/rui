import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNoticeM } from '..';

export default {
  title: 'Icons/IconNoticeM',
  component: IconNoticeM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconNoticeM>;

const Template: ComponentStory<typeof IconNoticeM> = (args) => (
  <IconNoticeM {...args} />
);

export const Basic = Template.bind({});
