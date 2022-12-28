import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RememberMobileLogo } from '.';

const meta: ComponentMeta<typeof RememberMobileLogo> = {
  title: 'Logos/RememberMobileLogo ',
  component: RememberMobileLogo,
  args: {
    color: 'black',
    height: 20,
    customElement: '기업용 서비스',
  },
};

const Template: ComponentStory<typeof RememberMobileLogo> = (args) => (
  <RememberMobileLogo {...args} />
);

export const Basic = Template.bind({});

export default meta;
