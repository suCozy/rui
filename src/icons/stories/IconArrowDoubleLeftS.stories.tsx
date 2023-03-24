import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDoubleLeftS } from '..';

export default {
  title: 'Icons/IconArrowDoubleLeftS',
  component: IconArrowDoubleLeftS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDoubleLeftS>;

const Template: ComponentStory<typeof IconArrowDoubleLeftS> = (args) => (
  <IconArrowDoubleLeftS {...args} />
);

export const Basic = Template.bind({});
