import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconImageM } from '..';

export default {
  title: 'Icons/IconImageM',
  component: IconImageM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconImageM>;

const Template: ComponentStory<typeof IconImageM> = (args) => (
  <IconImageM {...args} />
);

export const Basic = Template.bind({});
