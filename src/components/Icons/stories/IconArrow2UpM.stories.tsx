import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrow2UpM } from "..";

export default {
  title: 'Icons/IconArrow2UpM',
  component: IconArrow2UpM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconArrow2UpM>;

const Template: ComponentStory<typeof IconArrow2UpM> = (args) => (
  <IconArrow2UpM {...args} />
);

export const Basic = Template.bind({});