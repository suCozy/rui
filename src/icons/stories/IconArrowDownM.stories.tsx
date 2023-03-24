import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDownM } from '..';

export default {
  title: 'Icons/IconArrowDownM',
  component: IconArrowDownM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDownM>;

const Template: ComponentStory<typeof IconArrowDownM> = (args) => (
  <IconArrowDownM {...args} />
);

export const Basic = Template.bind({});
