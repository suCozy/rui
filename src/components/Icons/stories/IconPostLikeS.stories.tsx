import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPostLikeS } from '..';

export default {
  title: 'Icons/IconPostLikeS',
  component: IconPostLikeS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPostLikeS>;

const Template: ComponentStory<typeof IconPostLikeS> = (args) => (
  <IconPostLikeS {...args} />
);

export const Basic = Template.bind({});
