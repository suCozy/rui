import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckboxOffM } from '..';

export default {
  title: 'Icons/ControlCheckboxOffM',
  component: ControlCheckboxOffM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckboxOffM>;

const Template: ComponentStory<typeof ControlCheckboxOffM> = (args) => (
  <ControlCheckboxOffM {...args} />
);

export const Basic = Template.bind({});
