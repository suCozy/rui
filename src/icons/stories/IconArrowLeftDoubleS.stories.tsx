import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowLeftDoubleS } from '..';

export default {
  title: 'Icons/IconArrowLeftDoubleS',
  component: IconArrowLeftDoubleS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowLeftDoubleS>;

const Template: ComponentStory<typeof IconArrowLeftDoubleS> = (args) => (
  <IconArrowLeftDoubleS {...args} />
);

export const Basic = Template.bind({});
