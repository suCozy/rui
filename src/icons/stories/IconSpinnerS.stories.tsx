import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSpinnerS } from '..';

export default {
  title: 'Icons/IconSpinnerS',
  component: IconSpinnerS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSpinnerS>;

const Template: ComponentStory<typeof IconSpinnerS> = (args) => (
  <IconSpinnerS {...args} />
);

export const Basic = Template.bind({});
