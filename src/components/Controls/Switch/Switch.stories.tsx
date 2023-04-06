import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

type Story = StoryObj<typeof Switch>;

const meta: Meta = {
  title: 'Controls/Switch',
  component: Switch,
  args: {
    size: 'small',
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
      <Switch onCheckedChange={handleCheck} {...args}>
        Children으로 라벨을 지정할 수 있습니다.
      </Switch>
    );
  },
};

export default meta;
