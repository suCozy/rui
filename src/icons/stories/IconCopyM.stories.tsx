import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCopyM } from '..';

export default {
  title: 'Icons/IconCopyM',
  component: IconCopyM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCopyM>;

const Template: ComponentStory<typeof IconCopyM> = (args) => (
  <IconCopyM {...args} />
);

export const Basic = Template.bind({});
