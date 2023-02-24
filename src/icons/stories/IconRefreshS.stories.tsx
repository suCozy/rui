import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconRefreshS } from '..';

export default {
  title: 'Icons/IconRefreshS',
  component: IconRefreshS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconRefreshS>;

const Template: ComponentStory<typeof IconRefreshS> = (args) => (
  <IconRefreshS {...args} />
);

export const Basic = Template.bind({});
