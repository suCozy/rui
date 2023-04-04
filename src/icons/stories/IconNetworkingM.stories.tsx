import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNetworkingM } from '..';

export default {
  title: 'Icons/IconNetworkingM',
  component: IconNetworkingM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconNetworkingM>;

const Template: ComponentStory<typeof IconNetworkingM> = (args) => (
  <IconNetworkingM {...args} />
);

export const Basic = Template.bind({});
