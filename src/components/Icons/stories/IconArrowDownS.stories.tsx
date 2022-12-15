import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDownS } from '..';

export default {
  title: 'Icons/IconArrowDownS',
  component: IconArrowDownS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDownS>;

const Template: ComponentStory<typeof IconArrowDownS> = (args) => (
  <IconArrowDownS {...args} />
);

export const Basic = Template.bind({});
