import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVisibilityOffM } from "..";

export default {
  title: 'Icons/IconVisibilityOffM',
  component: IconVisibilityOffM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconVisibilityOffM>;

const Template: ComponentStory<typeof IconVisibilityOffM> = (args) => (
  <IconVisibilityOffM {...args} />
);

export const Basic = Template.bind({});