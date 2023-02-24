import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAlertOutlineM } from '..';

export default {
  title: 'Icons/IconAlertOutlineM',
  component: IconAlertOutlineM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconAlertOutlineM>;

const Template: ComponentStory<typeof IconAlertOutlineM> = (args) => (
  <IconAlertOutlineM {...args} />
);

export const Basic = Template.bind({});
