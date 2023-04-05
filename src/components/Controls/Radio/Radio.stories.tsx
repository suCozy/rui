import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/components/Common';

import { Radio } from '.';

type Story = StoryObj<typeof Radio>;

const meta: Meta = {
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

export const Default: Story = {
  render: ({ onCheckedChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ checked }, updateArgs] = useArgs();
    const handleCheck = () => updateArgs({ checked: !checked });
    return (
      <Flex gap="10px" justify="start" align="start" direction="column">
        <Radio onCheckedChange={handleCheck} {...args}>
          radio button1
        </Radio>
        <Radio onCheckedChange={handleCheck} {...args}>
          radio button2
        </Radio>
        <Radio onCheckedChange={handleCheck} {...args}>
          radio button3
        </Radio>
      </Flex>
    );
  },
};

export default meta;
