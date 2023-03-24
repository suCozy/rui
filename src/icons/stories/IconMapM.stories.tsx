import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMapM } from '..';

export default {
  title: 'Icons/IconMapM',
  component: IconMapM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMapM>;

const Template: ComponentStory<typeof IconMapM> = (args) => (
  <IconMapM {...args} />
);

export const Basic = Template.bind({});
