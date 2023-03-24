import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconInfoM } from '..';

export default {
  title: 'Icons/IconInfoM',
  component: IconInfoM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconInfoM>;

const Template: ComponentStory<typeof IconInfoM> = (args) => (
  <IconInfoM {...args} />
);

export const Basic = Template.bind({});
