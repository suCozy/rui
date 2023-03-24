import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconShareM } from '..';

export default {
  title: 'Icons/IconShareM',
  component: IconShareM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconShareM>;

const Template: ComponentStory<typeof IconShareM> = (args) => (
  <IconShareM {...args} />
);

export const Basic = Template.bind({});
