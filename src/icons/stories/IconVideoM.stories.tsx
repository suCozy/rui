import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVideoM } from '..';

export default {
  title: 'Icons/IconVideoM',
  component: IconVideoM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconVideoM>;

const Template: ComponentStory<typeof IconVideoM> = (args) => (
  <IconVideoM {...args} />
);

export const Basic = Template.bind({});
