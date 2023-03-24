import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCommunityM } from '..';

export default {
  title: 'Icons/IconCommunityM',
  component: IconCommunityM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCommunityM>;

const Template: ComponentStory<typeof IconCommunityM> = (args) => (
  <IconCommunityM {...args} />
);

export const Basic = Template.bind({});
