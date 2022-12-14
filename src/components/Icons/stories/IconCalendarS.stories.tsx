import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCalendarS } from "..";

export default {
  title: 'Icons/IconCalendarS',
  component: IconCalendarS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCalendarS>;

const Template: ComponentStory<typeof IconCalendarS> = (args) => (
  <IconCalendarS {...args} />
);

export const Basic = Template.bind({});