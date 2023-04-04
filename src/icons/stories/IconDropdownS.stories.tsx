import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDropdownS } from '..';

export default {
  title: 'Icons/IconDropdownS',
  component: IconDropdownS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconDropdownS>;

const Template: ComponentStory<typeof IconDropdownS> = (args) => (
  <IconDropdownS {...args} />
);

export const Basic = Template.bind({});
