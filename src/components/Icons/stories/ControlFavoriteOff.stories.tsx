import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlFavoriteOff } from "..";

export default {
  title: 'Icons/ControlFavoriteOff',
  component: ControlFavoriteOff,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof ControlFavoriteOff>;

const Template: ComponentStory<typeof ControlFavoriteOff> = (args) => (
  <ControlFavoriteOff {...args} />
);

export const Basic = Template.bind({});