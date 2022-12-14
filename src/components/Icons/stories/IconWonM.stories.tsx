import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWonM } from "..";

export default {
  title: 'Icons/IconWonM',
  component: IconWonM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconWonM>;

const Template: ComponentStory<typeof IconWonM> = (args) => (
  <IconWonM {...args} />
);

export const Basic = Template.bind({});