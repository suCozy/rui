import type { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';

import type { IconNameType } from '@/components/stories/util';
import { getIconComponentFromName, iconNames } from '@/components/stories/util';

type Story = StoryObj<typeof Icons>;

const meta: Meta = {
  title: 'Assets/Icons',
  component: Icons,
  argTypes: {
    iconName: { control: 'select', options: iconNames.slice(1) },
    color: { control: 'color' },
  },
};

export const Default: Story = {
  render: (args) => <Icons {...args} />,
};

export default meta;

function Icons({ iconName, color }: { iconName: IconNameType; color: string }) {
  if (!iconName) {
    return null;
  }
  return (
    <div style={{ color }}>
      {createElement(getIconComponentFromName(iconName))}
    </div>
  );
}
