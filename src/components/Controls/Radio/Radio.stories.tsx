import { ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Radio } from '.';

export default {
  title: 'Controls/Radio',
  component: Radio,
  args: {
    disabled: false,
    required: false,
    name: 'Radio',
    checked: false,
    onCheckedChange: () => {},
  },
};

export const Template: ComponentStory<typeof Radio> = ({
  onCheckedChange,
  ...args
}) => {
  const [{ checked }, updateArgs] = useArgs();
  const handleCheck = () => updateArgs({ checked: !checked });
  return (
    <Radio onCheckedChange={handleCheck} {...args}>
      Children으로 라벨을 지정할 수 있습니다.
    </Radio>
  );
};
