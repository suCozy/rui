import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconZoominM } from '..';

export default {
  title: 'Icons/IconZoominM',
  component: IconZoominM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconZoominM>;

const Template: ComponentStory<typeof IconZoominM> = (args) => (
  <IconZoominM {...args} />
);

export const Basic = Template.bind({});
