import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowRightDoubleS } from '..';

export default {
  title: 'Icons/IconArrowRightDoubleS',
  component: IconArrowRightDoubleS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowRightDoubleS>;

const Template: ComponentStory<typeof IconArrowRightDoubleS> = (args) => (
  <IconArrowRightDoubleS {...args} />
);

export const Basic = Template.bind({});
