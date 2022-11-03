import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RememberLogo } from './index';

const meta: ComponentMeta<typeof RememberLogo> = {
  title: 'Logos/RememberLogo',
  component: RememberLogo,
  args: {
    color: 'black',
    height: 20,
  },
};

const Template: ComponentStory<typeof RememberLogo> = (args) => (
  <RememberLogo {...args} />
);

export const Basic = Template.bind({});

export default meta;
