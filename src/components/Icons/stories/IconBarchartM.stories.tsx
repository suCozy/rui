import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconBarchartM } from '..';

export default {
  title: 'Icons/IconBarchartM',
  component: IconBarchartM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconBarchartM>;

const Template: ComponentStory<typeof IconBarchartM> = (args) => (
  <IconBarchartM {...args} />
);

export const Basic = Template.bind({});
