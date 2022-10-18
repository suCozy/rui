import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as Button from '.';

export default {
  title: 'Buttons/Button',
  component: Button.Root,
} as ComponentMeta<typeof Button.Root>;

const Template: ComponentStory<typeof Button.Root> = (args) => (
  <Button.Root {...args}>Button</Button.Root>
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  theme: 'solid',
  outline: false,
  size: 'small',
  loading: true,
  block: false,
};
