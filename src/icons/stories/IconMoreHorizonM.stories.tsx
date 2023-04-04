import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMoreHorizonM } from '..';

export default {
  title: 'Icons/IconMoreHorizonM',
  component: IconMoreHorizonM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMoreHorizonM>;

const Template: ComponentStory<typeof IconMoreHorizonM> = (args) => (
  <IconMoreHorizonM {...args} />
);

export const Basic = Template.bind({});
