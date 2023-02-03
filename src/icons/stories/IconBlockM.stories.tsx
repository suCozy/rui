import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconBlockM } from '..';

export default {
  title: 'Icons/IconBlockM',
  component: IconBlockM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconBlockM>;

const Template: ComponentStory<typeof IconBlockM> = (args) => (
  <IconBlockM {...args} />
);

export const Basic = Template.bind({});
