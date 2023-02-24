import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckOnM } from '..';

export default {
  title: 'Icons/ControlCheckOnM',
  component: ControlCheckOnM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckOnM>;

const Template: ComponentStory<typeof ControlCheckOnM> = (args) => (
  <ControlCheckOnM {...args} />
);

export const Basic = Template.bind({});
