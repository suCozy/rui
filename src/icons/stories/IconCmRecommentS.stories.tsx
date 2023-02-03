import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCmRecommentS } from '..';

export default {
  title: 'Icons/IconCmRecommentS',
  component: IconCmRecommentS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconCmRecommentS>;

const Template: ComponentStory<typeof IconCmRecommentS> = (args) => (
  <IconCmRecommentS {...args} />
);

export const Basic = Template.bind({});
