import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSettingS } from '..';

export default {
  title: 'Icons/IconSettingS',
  component: IconSettingS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSettingS>;

const Template: ComponentStory<typeof IconSettingS> = (args) => (
  <IconSettingS {...args} />
);

export const Basic = Template.bind({});
