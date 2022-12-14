import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlFavoriteOn } from "..";

export default {
  title: 'Icons/ControlFavoriteOn',
  component: ControlFavoriteOn,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof ControlFavoriteOn>;

const Template: ComponentStory<typeof ControlFavoriteOn> = (args) => (
  <ControlFavoriteOn {...args} />
);

export const Basic = Template.bind({});