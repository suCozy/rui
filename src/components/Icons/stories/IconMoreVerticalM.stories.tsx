import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMoreVerticalM } from "..";

export default {
  title: 'Icons/IconMoreVerticalM',
  component: IconMoreVerticalM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconMoreVerticalM>;

const Template: ComponentStory<typeof IconMoreVerticalM> = (args) => (
  <IconMoreVerticalM {...args} />
);

export const Basic = Template.bind({});