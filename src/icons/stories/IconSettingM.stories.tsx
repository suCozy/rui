import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSettingM } from '..';

export default {
  title: 'Icons/IconSettingM',
  component: IconSettingM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSettingM>;

const Template: ComponentStory<typeof IconSettingM> = (args) => (
  <IconSettingM {...args} />
);

export const Basic = Template.bind({});
