import { ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Switch } from '.';

export default {
  title: 'Controls/Switch',
  component: Switch,
  args: {
    size: 'small',
    checked: false,
    onCheckedChange: () => {},
  },
};

export const Template: ComponentStory<typeof Switch> = ({
  onCheckedChange,
  ...args
}) => {
  const [{ checked }, updateArgs] = useArgs();
  const handleCheck = () => updateArgs({ checked: !checked });
  return (
    <Switch onCheckedChange={handleCheck} {...args}>
      Children으로 라벨을 지정할 수 있습니다.
    </Switch>
  );
};
