import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCropM } from '..';

export default {
  title: 'Icons/IconCropM',
  component: IconCropM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCropM>;

const Template: ComponentStory<typeof IconCropM> = (args) => (
  <IconCropM {...args} />
);

export const Basic = Template.bind({});
