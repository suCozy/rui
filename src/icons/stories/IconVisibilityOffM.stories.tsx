import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVisibilityOffM } from '..';

export default {
  title: 'Icons/IconVisibilityOffM',
  component: IconVisibilityOffM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconVisibilityOffM>;

const Template: ComponentStory<typeof IconVisibilityOffM> = (args) => (
  <IconVisibilityOffM {...args} />
);

export const Basic = Template.bind({});
