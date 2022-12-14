import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckOffS } from '..';

export default {
  title: 'Icons/ControlCheckOffS',
  component: ControlCheckOffS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckOffS>;

const Template: ComponentStory<typeof ControlCheckOffS> = (args) => (
  <ControlCheckOffS {...args} />
);

export const Basic = Template.bind({});
