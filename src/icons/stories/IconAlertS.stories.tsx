import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAlertS } from '..';

export default {
  title: 'Icons/IconAlertS',
  component: IconAlertS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconAlertS>;

const Template: ComponentStory<typeof IconAlertS> = (args) => (
  <IconAlertS {...args} />
);

export const Basic = Template.bind({});
