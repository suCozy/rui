import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNoticeM } from "..";

export default {
  title: 'Icons/IconNoticeM',
  component: IconNoticeM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconNoticeM>;

const Template: ComponentStory<typeof IconNoticeM> = (args) => (
  <IconNoticeM {...args} />
);

export const Basic = Template.bind({});