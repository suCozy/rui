import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowLeftM } from '..';

export default {
  title: 'Icons/IconArrowLeftM',
  component: IconArrowLeftM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowLeftM>;

const Template: ComponentStory<typeof IconArrowLeftM> = (args) => (
  <IconArrowLeftM {...args} />
);

export const Basic = Template.bind({});
