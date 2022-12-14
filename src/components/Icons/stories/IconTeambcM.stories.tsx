import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTeambcM } from '..';

export default {
  title: 'Icons/IconTeambcM',
  component: IconTeambcM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconTeambcM>;

const Template: ComponentStory<typeof IconTeambcM> = (args) => (
  <IconTeambcM {...args} />
);

export const Basic = Template.bind({});
