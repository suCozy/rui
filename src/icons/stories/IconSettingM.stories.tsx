import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSettingM } from '..';

export default {
  title: 'Icons/IconSettingM',
  component: IconSettingM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconSettingM>;

const Template: ComponentStory<typeof IconSettingM> = (args) => (
  <IconSettingM {...args} />
);

export const Basic = Template.bind({});
