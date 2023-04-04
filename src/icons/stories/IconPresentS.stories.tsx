import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPresentS } from '..';

export default {
  title: 'Icons/IconPresentS',
  component: IconPresentS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPresentS>;

const Template: ComponentStory<typeof IconPresentS> = (args) => (
  <IconPresentS {...args} />
);

export const Basic = Template.bind({});
