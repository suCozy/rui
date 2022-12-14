import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVisibilityM } from "..";

export default {
  title: 'Icons/IconVisibilityM',
  component: IconVisibilityM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconVisibilityM>;

const Template: ComponentStory<typeof IconVisibilityM> = (args) => (
  <IconVisibilityM {...args} />
);

export const Basic = Template.bind({});