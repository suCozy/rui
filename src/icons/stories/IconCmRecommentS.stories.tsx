import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCmRecommentS } from '..';

export default {
  title: 'Icons/IconCmRecommentS',
  component: IconCmRecommentS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCmRecommentS>;

const Template: ComponentStory<typeof IconCmRecommentS> = (args) => (
  <IconCmRecommentS {...args} />
);

export const Basic = Template.bind({});
