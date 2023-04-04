import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHelpS } from '..';

export default {
  title: 'Icons/IconHelpS',
  component: IconHelpS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconHelpS>;

const Template: ComponentStory<typeof IconHelpS> = (args) => (
  <IconHelpS {...args} />
);

export const Basic = Template.bind({});
