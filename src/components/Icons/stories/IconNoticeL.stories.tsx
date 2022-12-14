import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNoticeL } from '..';

export default {
  title: 'Icons/IconNoticeL',
  component: IconNoticeL,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconNoticeL>;

const Template: ComponentStory<typeof IconNoticeL> = (args) => (
  <IconNoticeL {...args} />
);

export const Basic = Template.bind({});
