import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDropupS } from '..';

export default {
  title: 'Icons/IconDropupS',
  component: IconDropupS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconDropupS>;

const Template: ComponentStory<typeof IconDropupS> = (args) => (
  <IconDropupS {...args} />
);

export const Basic = Template.bind({});
