import type { Meta, StoryObj } from '@storybook/react';

import { RememberMobileLogo } from '.';

type Story = StoryObj<typeof RememberMobileLogo>;

const meta: Meta = {
  title: 'Logos/RememberMobileLogo',
  component: RememberMobileLogo,
  args: {
    color: 'black',
    height: 20,
    customElement: '기업용 서비스',
  },
};

export const Default: Story = {
  render: (args) => <RememberMobileLogo {...args} />,
};

export default meta;
