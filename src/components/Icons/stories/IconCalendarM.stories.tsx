import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCalendarM } from "..";

export default {
  title: 'Icons/IconCalendarM',
  component: IconCalendarM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCalendarM>;

const Template: ComponentStory<typeof IconCalendarM> = (args) => (
  <IconCalendarM {...args} />
);

export const Basic = Template.bind({});