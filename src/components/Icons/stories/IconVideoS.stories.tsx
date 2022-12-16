import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVideoS } from '..';

export default {
  title: 'Icons/IconVideoS',
  component: IconVideoS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconVideoS>;

const Template: ComponentStory<typeof IconVideoS> = (args) => (
  <IconVideoS {...args} />
);

export const Basic = Template.bind({});
