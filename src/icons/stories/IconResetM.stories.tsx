import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconResetM } from '..';

export default {
  title: 'Icons/IconResetM',
  component: IconResetM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconResetM>;

const Template: ComponentStory<typeof IconResetM> = (args) => (
  <IconResetM {...args} />
);

export const Basic = Template.bind({});
