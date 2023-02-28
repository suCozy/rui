import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconShieldS } from '..';

export default {
  title: 'Icons/IconShieldS',
  component: IconShieldS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconShieldS>;

const Template: ComponentStory<typeof IconShieldS> = (args) => (
  <IconShieldS {...args} />
);

export const Basic = Template.bind({});
