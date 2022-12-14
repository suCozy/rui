import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHamburgerM } from "..";

export default {
  title: 'Icons/IconHamburgerM',
  component: IconHamburgerM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconHamburgerM>;

const Template: ComponentStory<typeof IconHamburgerM> = (args) => (
  <IconHamburgerM {...args} />
);

export const Basic = Template.bind({});