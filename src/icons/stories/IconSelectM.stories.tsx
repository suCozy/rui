import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSelectM } from '..';

export default {
  title: 'Icons/IconSelectM',
  component: IconSelectM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSelectM>;

const Template: ComponentStory<typeof IconSelectM> = (args) => (
  <IconSelectM {...args} />
);

export const Basic = Template.bind({});
