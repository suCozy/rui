import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RememberSquareLogo } from './index';

const meta: ComponentMeta<typeof RememberSquareLogo> = {
  title: 'Logos/RememberSquareLogo ',
  component: RememberSquareLogo,
  args: {
    height: 20,
    customElement: '리멤버 블랙',
  },
};

const Template: ComponentStory<typeof RememberSquareLogo> = (args) => (
  <RememberSquareLogo {...args} />
);

export const Basic = Template.bind({});

export default meta;
