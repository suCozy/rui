import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconLinkM } from '..';

export default {
  title: 'Icons/IconLinkM',
  component: IconLinkM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconLinkM>;

const Template: ComponentStory<typeof IconLinkM> = (args) => (
  <IconLinkM {...args} />
);

export const Basic = Template.bind({});
