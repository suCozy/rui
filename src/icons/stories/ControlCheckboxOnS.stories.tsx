import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckboxOnS } from '..';

export default {
  title: 'Icons/ControlCheckboxOnS',
  component: ControlCheckboxOnS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckboxOnS>;

const Template: ComponentStory<typeof ControlCheckboxOnS> = (args) => (
  <ControlCheckboxOnS {...args} />
);

export const Basic = Template.bind({});
