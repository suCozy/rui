import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCalendarS } from '..';

export default {
  title: 'Icons/IconCalendarS',
  component: IconCalendarS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCalendarS>;

const Template: ComponentStory<typeof IconCalendarS> = (args) => (
  <IconCalendarS {...args} />
);

export const Basic = Template.bind({});
