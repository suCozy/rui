import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSpinnerM } from '..';

export default {
  title: 'Icons/IconSpinnerM',
  component: IconSpinnerM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSpinnerM>;

const Template: ComponentStory<typeof IconSpinnerM> = (args) => (
  <IconSpinnerM {...args} />
);

export const Basic = Template.bind({});
