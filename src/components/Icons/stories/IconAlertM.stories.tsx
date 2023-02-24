import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAlertM } from '..';

export default {
  title: 'Icons/IconAlertM',
  component: IconAlertM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconAlertM>;

const Template: ComponentStory<typeof IconAlertM> = (args) => (
  <IconAlertM {...args} />
);

export const Basic = Template.bind({});
