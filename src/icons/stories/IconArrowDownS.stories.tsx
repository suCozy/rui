import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowDownS } from '..';

export default {
  title: 'Icons/IconArrowDownS',
  component: IconArrowDownS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowDownS>;

const Template: ComponentStory<typeof IconArrowDownS> = (args) => (
  <IconArrowDownS {...args} />
);

export const Basic = Template.bind({});
