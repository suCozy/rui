import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconQrcodeM } from '..';

export default {
  title: 'Icons/IconQrcodeM',
  component: IconQrcodeM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconQrcodeM>;

const Template: ComponentStory<typeof IconQrcodeM> = (args) => (
  <IconQrcodeM {...args} />
);

export const Basic = Template.bind({});
