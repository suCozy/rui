import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDoubleLeftM } from "..";

export default {
  title: 'Icons/IconArrowDoubleLeftM',
  component: IconArrowDoubleLeftM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconArrowDoubleLeftM>;

const Template: ComponentStory<typeof IconArrowDoubleLeftM> = (args) => (
  <IconArrowDoubleLeftM {...args} />
);

export const Basic = Template.bind({});