import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowLeftIosM } from '..';

export default {
  title: 'Icons/IconArrowLeftIosM',
  component: IconArrowLeftIosM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowLeftIosM>;

const Template: ComponentStory<typeof IconArrowLeftIosM> = (args) => (
  <IconArrowLeftIosM {...args} />
);

export const Basic = Template.bind({});
