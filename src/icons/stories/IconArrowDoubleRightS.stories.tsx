import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDoubleRightS } from '..';

export default {
  title: 'Icons/IconArrowDoubleRightS',
  component: IconArrowDoubleRightS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDoubleRightS>;

const Template: ComponentStory<typeof IconArrowDoubleRightS> = (args) => (
  <IconArrowDoubleRightS {...args} />
);

export const Basic = Template.bind({});
