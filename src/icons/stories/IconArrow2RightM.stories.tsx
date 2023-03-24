import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrow2RightM } from '..';

export default {
  title: 'Icons/IconArrow2RightM',
  component: IconArrow2RightM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrow2RightM>;

const Template: ComponentStory<typeof IconArrow2RightM> = (args) => (
  <IconArrow2RightM {...args} />
);

export const Basic = Template.bind({});
