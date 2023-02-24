import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlBookmarkOffM } from '..';

export default {
  title: 'Icons/ControlBookmarkOffM',
  component: ControlBookmarkOffM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlBookmarkOffM>;

const Template: ComponentStory<typeof ControlBookmarkOffM> = (args) => (
  <ControlBookmarkOffM {...args} />
);

export const Basic = Template.bind({});
