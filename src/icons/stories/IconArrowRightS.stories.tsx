import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowRightS } from '..';

export default {
  title: 'Icons/IconArrowRightS',
  component: IconArrowRightS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowRightS>;

const Template: ComponentStory<typeof IconArrowRightS> = (args) => (
  <IconArrowRightS {...args} />
);

export const Basic = Template.bind({});
