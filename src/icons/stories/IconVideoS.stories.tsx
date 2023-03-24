import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVideoS } from '..';

export default {
  title: 'Icons/IconVideoS',
  component: IconVideoS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconVideoS>;

const Template: ComponentStory<typeof IconVideoS> = (args) => (
  <IconVideoS {...args} />
);

export const Basic = Template.bind({});
