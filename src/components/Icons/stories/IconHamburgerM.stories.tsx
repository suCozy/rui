import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHamburgerM } from '..';

export default {
  title: 'Icons/IconHamburgerM',
  component: IconHamburgerM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconHamburgerM>;

const Template: ComponentStory<typeof IconHamburgerM> = (args) => (
  <IconHamburgerM {...args} />
);

export const Basic = Template.bind({});
