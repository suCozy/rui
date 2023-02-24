import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlFavoriteOn } from '..';

export default {
  title: 'Icons/ControlFavoriteOn',
  component: ControlFavoriteOn,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlFavoriteOn>;

const Template: ComponentStory<typeof ControlFavoriteOn> = (args) => (
  <ControlFavoriteOn {...args} />
);

export const Basic = Template.bind({});
