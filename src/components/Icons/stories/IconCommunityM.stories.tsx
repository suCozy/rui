import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCommunityM } from '..';

export default {
  title: 'Icons/IconCommunityM',
  component: IconCommunityM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconCommunityM>;

const Template: ComponentStory<typeof IconCommunityM> = (args) => (
  <IconCommunityM {...args} />
);

export const Basic = Template.bind({});
