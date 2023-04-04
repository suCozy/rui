import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconBookmarkM } from '..';

export default {
  title: 'Icons/IconBookmarkM',
  component: IconBookmarkM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconBookmarkM>;

const Template: ComponentStory<typeof IconBookmarkM> = (args) => (
  <IconBookmarkM {...args} />
);

export const Basic = Template.bind({});
