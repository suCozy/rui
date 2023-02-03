import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMuteM } from '..';

export default {
  title: 'Icons/IconMuteM',
  component: IconMuteM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconMuteM>;

const Template: ComponentStory<typeof IconMuteM> = (args) => (
  <IconMuteM {...args} />
);

export const Basic = Template.bind({});
