import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDoubleLeftS } from '..';

export default {
  title: 'Icons/IconArrowDoubleLeftS',
  component: IconArrowDoubleLeftS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDoubleLeftS>;

const Template: ComponentStory<typeof IconArrowDoubleLeftS> = (args) => (
  <IconArrowDoubleLeftS {...args} />
);

export const Basic = Template.bind({});
