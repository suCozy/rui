import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHelpM } from '..';

export default {
  title: 'Icons/IconHelpM',
  component: IconHelpM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconHelpM>;

const Template: ComponentStory<typeof IconHelpM> = (args) => (
  <IconHelpM {...args} />
);

export const Basic = Template.bind({});
