import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMoreVertical2M } from '..';

export default {
  title: 'Icons/IconMoreVertical2M',
  component: IconMoreVertical2M,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMoreVertical2M>;

const Template: ComponentStory<typeof IconMoreVertical2M> = (args) => (
  <IconMoreVertical2M {...args} />
);

export const Basic = Template.bind({});
