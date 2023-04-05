import type { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';

import {
  getIconComponentFromName,
  iconNames,
  isIconName,
} from '@/components/stories/util';

import { Button } from '.';

type Story = StoryObj<typeof Button>;

const meta: Meta = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    icon: { control: 'select', options: iconNames },
  },
};

export const Default: Story = {
  render: ({ icon, ...args }) => {
    const iconString = String(icon);
    const iconElement =
      icon &&
      isIconName(iconString) &&
      createElement(getIconComponentFromName(iconString));

    return (
      <Button {...args} icon={iconElement}>
        버튼
      </Button>
    );
  },
};

export default meta;
