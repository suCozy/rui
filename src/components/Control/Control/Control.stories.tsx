import { ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import Control from '.';

export default {
  title: 'Control/Control',
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

export const Template: ComponentStory<typeof Control> = ({
  onCheckedChange,
  ...args
}) => {
  const [{ checked }, updateArgs] = useArgs();
  const handleCheck = () => updateArgs({ checked: !checked });
  return (
    <Control onCheckedChange={handleCheck} {...args}>
      Children으로 라벨을 지정할 수 있습니다.
    </Control>
  );
};
