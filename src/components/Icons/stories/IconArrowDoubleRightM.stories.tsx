import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDoubleRightM } from '..';

export default {
  title: 'Icons/IconArrowDoubleRightM',
  component: IconArrowDoubleRightM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDoubleRightM>;

const Template: ComponentStory<typeof IconArrowDoubleRightM> = (args) => (
  <IconArrowDoubleRightM {...args} />
);

export const Basic = Template.bind({});
