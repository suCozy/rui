import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconRefreshM } from '..';

export default {
  title: 'Icons/IconRefreshM',
  component: IconRefreshM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconRefreshM>;

const Template: ComponentStory<typeof IconRefreshM> = (args) => (
  <IconRefreshM {...args} />
);

export const Basic = Template.bind({});
