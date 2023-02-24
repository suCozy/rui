import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSelectS } from '..';

export default {
  title: 'Icons/IconSelectS',
  component: IconSelectS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSelectS>;

const Template: ComponentStory<typeof IconSelectS> = (args) => (
  <IconSelectS {...args} />
);

export const Basic = Template.bind({});
