import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckboxOffS } from "..";

export default {
  title: 'Icons/ControlCheckboxOffS',
  component: ControlCheckboxOffS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof ControlCheckboxOffS>;

const Template: ComponentStory<typeof ControlCheckboxOffS> = (args) => (
  <ControlCheckboxOffS {...args} />
);

export const Basic = Template.bind({});