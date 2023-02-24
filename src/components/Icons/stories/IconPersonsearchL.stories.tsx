import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPersonsearchL } from '..';

export default {
  title: 'Icons/IconPersonsearchL',
  component: IconPersonsearchL,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPersonsearchL>;

const Template: ComponentStory<typeof IconPersonsearchL> = (args) => (
  <IconPersonsearchL {...args} />
);

export const Basic = Template.bind({});
