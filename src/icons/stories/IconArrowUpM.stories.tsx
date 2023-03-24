import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowUpM } from '..';

export default {
  title: 'Icons/IconArrowUpM',
  component: IconArrowUpM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowUpM>;

const Template: ComponentStory<typeof IconArrowUpM> = (args) => (
  <IconArrowUpM {...args} />
);

export const Basic = Template.bind({});
