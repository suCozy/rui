import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCommunityInactiveM } from '..';

export default {
  title: 'Icons/IconCommunityInactiveM',
  component: IconCommunityInactiveM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCommunityInactiveM>;

const Template: ComponentStory<typeof IconCommunityInactiveM> = (args) => (
  <IconCommunityInactiveM {...args} />
);

export const Basic = Template.bind({});
