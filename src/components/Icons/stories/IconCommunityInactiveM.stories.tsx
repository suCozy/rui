import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCommunityInactiveM } from "..";

export default {
  title: 'Icons/IconCommunityInactiveM',
  component: IconCommunityInactiveM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCommunityInactiveM>;

const Template: ComponentStory<typeof IconCommunityInactiveM> = (args) => (
  <IconCommunityInactiveM {...args} />
);

export const Basic = Template.bind({});