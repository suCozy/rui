import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconShareS } from '..';

export default {
  title: 'Icons/IconShareS',
  component: IconShareS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconShareS>;

const Template: ComponentStory<typeof IconShareS> = (args) => (
  <IconShareS {...args} />
);

export const Basic = Template.bind({});
