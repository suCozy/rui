import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMessageM } from '..';

export default {
  title: 'Icons/IconMessageM',
  component: IconMessageM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconMessageM>;

const Template: ComponentStory<typeof IconMessageM> = (args) => (
  <IconMessageM {...args} />
);

export const Basic = Template.bind({});
