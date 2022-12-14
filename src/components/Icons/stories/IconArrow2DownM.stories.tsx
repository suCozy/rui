import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrow2DownM } from "..";

export default {
  title: 'Icons/IconArrow2DownM',
  component: IconArrow2DownM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconArrow2DownM>;

const Template: ComponentStory<typeof IconArrow2DownM> = (args) => (
  <IconArrow2DownM {...args} />
);

export const Basic = Template.bind({});