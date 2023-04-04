import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCalenderS } from '..';

export default {
  title: 'Icons/IconCalenderS',
  component: IconCalenderS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCalenderS>;

const Template: ComponentStory<typeof IconCalenderS> = (args) => (
  <IconCalenderS {...args} />
);

export const Basic = Template.bind({});
