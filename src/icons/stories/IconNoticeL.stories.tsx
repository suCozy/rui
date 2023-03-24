import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNoticeL } from '..';

export default {
  title: 'Icons/IconNoticeL',
  component: IconNoticeL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconNoticeL>;

const Template: ComponentStory<typeof IconNoticeL> = (args) => (
  <IconNoticeL {...args} />
);

export const Basic = Template.bind({});
