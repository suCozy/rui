import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckOffM } from '..';

export default {
  title: 'Icons/ControlCheckOffM',
  component: ControlCheckOffM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckOffM>;

const Template: ComponentStory<typeof ControlCheckOffM> = (args) => (
  <ControlCheckOffM {...args} />
);

export const Basic = Template.bind({});
