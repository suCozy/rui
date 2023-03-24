import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowRightM } from '..';

export default {
  title: 'Icons/IconArrowRightM',
  component: IconArrowRightM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowRightM>;

const Template: ComponentStory<typeof IconArrowRightM> = (args) => (
  <IconArrowRightM {...args} />
);

export const Basic = Template.bind({});
