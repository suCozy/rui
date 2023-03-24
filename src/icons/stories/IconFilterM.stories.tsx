import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconFilterM } from '..';

export default {
  title: 'Icons/IconFilterM',
  component: IconFilterM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconFilterM>;

const Template: ComponentStory<typeof IconFilterM> = (args) => (
  <IconFilterM {...args} />
);

export const Basic = Template.bind({});
