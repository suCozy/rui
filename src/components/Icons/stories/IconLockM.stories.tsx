import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconLockM } from '..';

export default {
  title: 'Icons/IconLockM',
  component: IconLockM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconLockM>;

const Template: ComponentStory<typeof IconLockM> = (args) => (
  <IconLockM {...args} />
);

export const Basic = Template.bind({});
