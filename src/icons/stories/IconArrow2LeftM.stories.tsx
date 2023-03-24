import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrow2LeftM } from '..';

export default {
  title: 'Icons/IconArrow2LeftM',
  component: IconArrow2LeftM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrow2LeftM>;

const Template: ComponentStory<typeof IconArrow2LeftM> = (args) => (
  <IconArrow2LeftM {...args} />
);

export const Basic = Template.bind({});
