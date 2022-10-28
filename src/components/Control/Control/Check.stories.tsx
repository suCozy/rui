import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { Flex } from 'components/Common';

import Control from '.';

const meta: ComponentMeta<typeof Control> = {
  title: 'Control/Control',
  component: Control,
  args: {
    disabled: false,
    required: false,
    name: 'control',
    value: 'on',
  },
};

export const Template: ComponentStory<typeof Control> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <form>
      <Flex justify="flex-start">
        <Control
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
          {...args}
        >
          <Control.Check />
        </Control>
        {/* 라벨 컴포넌트 추가하기 */}
      </Flex>
    </form>
  );
};

export default meta;
