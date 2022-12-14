import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCameraM } from "..";

export default {
  title: 'Icons/IconCameraM',
  component: IconCameraM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCameraM>;

const Template: ComponentStory<typeof IconCameraM> = (args) => (
  <IconCameraM {...args} />
);

export const Basic = Template.bind({});