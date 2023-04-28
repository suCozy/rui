import type { Meta, StoryObj } from '@storybook/react';

import { divider } from '@/mixins';

import { Spinner } from './index';

type Story = StoryObj<typeof Spinner>;

const meta = {
  title: 'Common/Spinner',
  component: Spinner,
  args: {},
} satisfies Meta<typeof Spinner>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        border: `solid 1px ${divider}`,
        height: '100px',
        width: '100px',
      }}
    >
      <Spinner {...args} />
    </div>
  ),
};

export default meta;
