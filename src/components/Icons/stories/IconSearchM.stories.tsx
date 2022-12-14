import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSearchM } from "..";

export default {
  title: 'Icons/IconSearchM',
  component: IconSearchM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconSearchM>;

const Template: ComponentStory<typeof IconSearchM> = (args) => (
  <IconSearchM {...args} />
);

export const Basic = Template.bind({});