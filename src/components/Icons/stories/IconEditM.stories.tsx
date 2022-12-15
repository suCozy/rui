import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconEditM } from '..';

export default {
  title: 'Icons/IconEditM',
  component: IconEditM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconEditM>;

const Template: ComponentStory<typeof IconEditM> = (args) => (
  <IconEditM {...args} />
);

export const Basic = Template.bind({});
