import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    disabled: false,
    theme: 'solid',
    outline: false,
    size: 'large',
    loading: true,
    block: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
