import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrow2LeftM } from '..';

export default {
  title: 'Icons/IconArrow2LeftM',
  component: IconArrow2LeftM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconArrow2LeftM>;

const Template: ComponentStory<typeof IconArrow2LeftM> = (args) => (
  <IconArrow2LeftM {...args} />
);

export const Basic = Template.bind({});
