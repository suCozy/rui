import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconConfirmCheck } from "..";

export default {
  title: 'Icons/IconConfirmCheck',
  component: IconConfirmCheck,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconConfirmCheck>;

const Template: ComponentStory<typeof IconConfirmCheck> = (args) => (
  <IconConfirmCheck {...args} />
);

export const Basic = Template.bind({});