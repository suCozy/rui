import { Meta, StoryObj } from '@storybook/react';

import { divider } from '@/mixins';

import { Spinner } from './index';

type Story = StoryObj<typeof Spinner>;

const meta: Meta = {
  title: 'Common/Spinner',
  component: Spinner,
  args: {},
};

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
