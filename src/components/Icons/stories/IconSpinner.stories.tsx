import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSpinner } from "..";

export default {
  title: 'Icons/IconSpinner',
  component: IconSpinner,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconSpinner>;

const Template: ComponentStory<typeof IconSpinner> = (args) => (
  <IconSpinner {...args} />
);

export const Basic = Template.bind({});