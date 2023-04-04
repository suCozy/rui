import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCalenderM } from '..';

export default {
  title: 'Icons/IconCalenderM',
  component: IconCalenderM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCalenderM>;

const Template: ComponentStory<typeof IconCalenderM> = (args) => (
  <IconCalenderM {...args} />
);

export const Basic = Template.bind({});
