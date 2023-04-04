import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNotiS } from '..';

export default {
  title: 'Icons/IconNotiS',
  component: IconNotiS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconNotiS>;

const Template: ComponentStory<typeof IconNotiS> = (args) => (
  <IconNotiS {...args} />
);

export const Basic = Template.bind({});
