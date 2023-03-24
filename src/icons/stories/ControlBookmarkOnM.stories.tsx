import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlBookmarkOnM } from '..';

export default {
  title: 'Icons/ControlBookmarkOnM',
  component: ControlBookmarkOnM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlBookmarkOnM>;

const Template: ComponentStory<typeof ControlBookmarkOnM> = (args) => (
  <ControlBookmarkOnM {...args} />
);

export const Basic = Template.bind({});
