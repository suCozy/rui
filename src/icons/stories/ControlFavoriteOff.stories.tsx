import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlFavoriteOff } from '..';

export default {
  title: 'Icons/ControlFavoriteOff',
  component: ControlFavoriteOff,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlFavoriteOff>;

const Template: ComponentStory<typeof ControlFavoriteOff> = (args) => (
  <ControlFavoriteOff {...args} />
);

export const Basic = Template.bind({});
