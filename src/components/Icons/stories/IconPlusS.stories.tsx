import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPlusS } from '..';

export default {
  title: 'Icons/IconPlusS',
  component: IconPlusS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPlusS>;

const Template: ComponentStory<typeof IconPlusS> = (args) => (
  <IconPlusS {...args} />
);

export const Basic = Template.bind({});
