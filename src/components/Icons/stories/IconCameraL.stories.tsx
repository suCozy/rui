import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCameraL } from '..';

export default {
  title: 'Icons/IconCameraL',
  component: IconCameraL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCameraL>;

const Template: ComponentStory<typeof IconCameraL> = (args) => (
  <IconCameraL {...args} />
);

export const Basic = Template.bind({});
