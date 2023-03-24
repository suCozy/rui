import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWonS } from '..';

export default {
  title: 'Icons/IconWonS',
  component: IconWonS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconWonS>;

const Template: ComponentStory<typeof IconWonS> = (args) => (
  <IconWonS {...args} />
);

export const Basic = Template.bind({});
