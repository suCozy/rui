import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMuteS } from '..';

export default {
  title: 'Icons/IconMuteS',
  component: IconMuteS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconMuteS>;

const Template: ComponentStory<typeof IconMuteS> = (args) => (
  <IconMuteS {...args} />
);

export const Basic = Template.bind({});
