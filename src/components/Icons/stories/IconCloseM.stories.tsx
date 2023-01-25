import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCloseM } from '..';

export default {
  title: 'Icons/IconCloseM',
  component: IconCloseM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCloseM>;

const Template: ComponentStory<typeof IconCloseM> = (args) => (
  <IconCloseM {...args} />
);

export const Basic = Template.bind({});
