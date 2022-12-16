import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCommmyM } from '..';

export default {
  title: 'Icons/IconCommmyM',
  component: IconCommmyM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconCommmyM>;

const Template: ComponentStory<typeof IconCommmyM> = (args) => (
  <IconCommmyM {...args} />
);

export const Basic = Template.bind({});
