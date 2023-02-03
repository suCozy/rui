import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconConfirmAlert } from '..';

export default {
  title: 'Icons/IconConfirmAlert',
  component: IconConfirmAlert,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconConfirmAlert>;

const Template: ComponentStory<typeof IconConfirmAlert> = (args) => (
  <IconConfirmAlert {...args} />
);

export const Basic = Template.bind({});
