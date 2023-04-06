import type { Meta, StoryObj } from '@storybook/react';

import { RememberLogo } from './index';

type Story = StoryObj<typeof RememberLogo>;

const meta: Meta = {
  title: 'Logos/RememberLogo',
  component: RememberLogo,
  args: {
    color: 'black',
    height: 20,
  },
};

export const Default: Story = {
  render: (args) => <RememberLogo {...args} />,
};

export default meta;
