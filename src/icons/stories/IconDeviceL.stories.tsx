import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDeviceL } from '..';

export default {
  title: 'Icons/IconDeviceL',
  component: IconDeviceL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconDeviceL>;

const Template: ComponentStory<typeof IconDeviceL> = (args) => (
  <IconDeviceL {...args} />
);

export const Basic = Template.bind({});
