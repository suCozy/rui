import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconLockS } from '..';

export default {
  title: 'Icons/IconLockS',
  component: IconLockS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconLockS>;

const Template: ComponentStory<typeof IconLockS> = (args) => (
  <IconLockS {...args} />
);

export const Basic = Template.bind({});
