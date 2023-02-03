import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSettingL } from '..';

export default {
  title: 'Icons/IconSettingL',
  component: IconSettingL,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconSettingL>;

const Template: ComponentStory<typeof IconSettingL> = (args) => (
  <IconSettingL {...args} />
);

export const Basic = Template.bind({});
