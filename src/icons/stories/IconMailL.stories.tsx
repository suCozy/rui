import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMailL } from '..';

export default {
  title: 'Icons/IconMailL',
  component: IconMailL,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconMailL>;

const Template: ComponentStory<typeof IconMailL> = (args) => (
  <IconMailL {...args} />
);

export const Basic = Template.bind({});
