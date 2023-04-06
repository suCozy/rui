import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Control } from '.';

type Story = StoryObj<typeof Control>;

const meta: Meta = {
  title: 'Controls/Control',
  component: Control,
  args: {
    disabled: false,
    required: false,
    name: 'Control',
    option: 'checkbox',
    checked: false,
    onCheckedChange: () => {},
  },
};

export const Default: Story = {
  render: ({ onCheckedChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ checked }, updateArgs] = useArgs();
    const handleCheck = () => updateArgs({ checked: !checked });
    return (
      <Control onCheckedChange={handleCheck} {...args}>
        Children으로 라벨을 지정할 수 있습니다.
      </Control>
    );
  },
};

export default meta;
