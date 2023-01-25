import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckboxOnM } from '..';

export default {
  title: 'Icons/ControlCheckboxOnM',
  component: ControlCheckboxOnM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckboxOnM>;

const Template: ComponentStory<typeof ControlCheckboxOnM> = (args) => (
  <ControlCheckboxOnM {...args} />
);

export const Basic = Template.bind({});
