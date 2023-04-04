import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as _Button } from '.';

export default {
  title: 'Buttons/Button',
  component: _Button,
  args: {},
} as ComponentMeta<typeof _Button>;

const Template: ComponentStory<typeof _Button> = (args) => (
  // eslint-disable-next-line react/jsx-pascal-case
  <_Button {...args}>버튼</_Button>
);

export const Button = Template.bind({});
