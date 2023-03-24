import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPhoneM } from '..';

export default {
  title: 'Icons/IconPhoneM',
  component: IconPhoneM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPhoneM>;

const Template: ComponentStory<typeof IconPhoneM> = (args) => (
  <IconPhoneM {...args} />
);

export const Basic = Template.bind({});
