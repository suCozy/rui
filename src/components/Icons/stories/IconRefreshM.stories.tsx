import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconRefreshM } from "..";

export default {
  title: 'Icons/IconRefreshM',
  component: IconRefreshM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconRefreshM>;

const Template: ComponentStory<typeof IconRefreshM> = (args) => (
  <IconRefreshM {...args} />
);

export const Basic = Template.bind({});