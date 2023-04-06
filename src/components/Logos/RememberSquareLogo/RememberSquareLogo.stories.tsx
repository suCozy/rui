import type { Meta, StoryObj } from '@storybook/react';

import { RememberSquareLogo } from '.';

type Story = StoryObj<typeof RememberSquareLogo>;

const meta = {
  title: 'Logos/RememberSquareLogo',
  component: RememberSquareLogo,
  args: {
    color: 'black',
    height: 20,
  },
} satisfies Meta<typeof RememberSquareLogo>;

export const Default: Story = {
  render: (args) => <RememberSquareLogo {...args} />,
};

export default meta;
