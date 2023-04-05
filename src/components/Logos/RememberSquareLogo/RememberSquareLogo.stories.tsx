import type { Meta, StoryObj } from '@storybook/react';

import { RememberSquareLogo } from '.';

type Story = StoryObj<typeof RememberSquareLogo>;

const meta: Meta = {
  title: 'Logos/RememberSquareLogo',
  component: RememberSquareLogo,
  args: {
    color: 'black',
    height: 20,
  },
};

export const Default: Story = {
  render: (args) => <RememberSquareLogo {...args} />,
};

export default meta;
