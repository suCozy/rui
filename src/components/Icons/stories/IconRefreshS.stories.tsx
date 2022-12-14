import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconRefreshS } from "..";

export default {
  title: 'Icons/IconRefreshS',
  component: IconRefreshS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconRefreshS>;

const Template: ComponentStory<typeof IconRefreshS> = (args) => (
  <IconRefreshS {...args} />
);

export const Basic = Template.bind({});