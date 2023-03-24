import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlCheckOnS } from '..';

export default {
  title: 'Icons/ControlCheckOnS',
  component: ControlCheckOnS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof ControlCheckOnS>;

const Template: ComponentStory<typeof ControlCheckOnS> = (args) => (
  <ControlCheckOnS {...args} />
);

export const Basic = Template.bind({});
