import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconResetS } from '..';

export default {
  title: 'Icons/IconResetS',
  component: IconResetS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconResetS>;

const Template: ComponentStory<typeof IconResetS> = (args) => (
  <IconResetS {...args} />
);

export const Basic = Template.bind({});
