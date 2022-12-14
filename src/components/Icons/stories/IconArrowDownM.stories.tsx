import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDownM } from "..";

export default {
  title: 'Icons/IconArrowDownM',
  component: IconArrowDownM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconArrowDownM>;

const Template: ComponentStory<typeof IconArrowDownM> = (args) => (
  <IconArrowDownM {...args} />
);

export const Basic = Template.bind({});