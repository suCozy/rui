import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWonM } from '..';

export default {
  title: 'Icons/IconWonM',
  component: IconWonM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconWonM>;

const Template: ComponentStory<typeof IconWonM> = (args) => (
  <IconWonM {...args} />
);

export const Basic = Template.bind({});
