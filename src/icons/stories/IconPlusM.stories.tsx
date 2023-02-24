import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPlusM } from '..';

export default {
  title: 'Icons/IconPlusM',
  component: IconPlusM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPlusM>;

const Template: ComponentStory<typeof IconPlusM> = (args) => (
  <IconPlusM {...args} />
);

export const Basic = Template.bind({});
