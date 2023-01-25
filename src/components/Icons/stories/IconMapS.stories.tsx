import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMapS } from '..';

export default {
  title: 'Icons/IconMapS',
  component: IconMapS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMapS>;

const Template: ComponentStory<typeof IconMapS> = (args) => (
  <IconMapS {...args} />
);

export const Basic = Template.bind({});
