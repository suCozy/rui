import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckboxOffS } from '..';

export default {
  title: 'Icons/ControlCheckboxOffS',
  component: ControlCheckboxOffS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckboxOffS>;

const Template: ComponentStory<typeof ControlCheckboxOffS> = (args) => (
  <ControlCheckboxOffS {...args} />
);

export const Basic = Template.bind({});
