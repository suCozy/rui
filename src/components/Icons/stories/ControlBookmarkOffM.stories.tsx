import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlBookmarkOffM } from "..";

export default {
  title: 'Icons/ControlBookmarkOffM',
  component: ControlBookmarkOffM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof ControlBookmarkOffM>;

const Template: ComponentStory<typeof ControlBookmarkOffM> = (args) => (
  <ControlBookmarkOffM {...args} />
);

export const Basic = Template.bind({});