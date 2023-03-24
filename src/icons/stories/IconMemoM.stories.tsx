import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMemoM } from '..';

export default {
  title: 'Icons/IconMemoM',
  component: IconMemoM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMemoM>;

const Template: ComponentStory<typeof IconMemoM> = (args) => (
  <IconMemoM {...args} />
);

export const Basic = Template.bind({});
