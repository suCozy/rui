import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVisibilityOffS } from '..';

export default {
  title: 'Icons/IconVisibilityOffS',
  component: IconVisibilityOffS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconVisibilityOffS>;

const Template: ComponentStory<typeof IconVisibilityOffS> = (args) => (
  <IconVisibilityOffS {...args} />
);

export const Basic = Template.bind({});
