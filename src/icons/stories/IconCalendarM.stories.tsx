import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCalendarM } from '..';

export default {
  title: 'Icons/IconCalendarM',
  component: IconCalendarM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCalendarM>;

const Template: ComponentStory<typeof IconCalendarM> = (args) => (
  <IconCalendarM {...args} />
);

export const Basic = Template.bind({});
