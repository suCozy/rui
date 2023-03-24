import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMailM } from '..';

export default {
  title: 'Icons/IconMailM',
  component: IconMailM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMailM>;

const Template: ComponentStory<typeof IconMailM> = (args) => (
  <IconMailM {...args} />
);

export const Basic = Template.bind({});
