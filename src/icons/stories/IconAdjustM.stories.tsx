import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAdjustM } from '..';

export default {
  title: 'Icons/IconAdjustM',
  component: IconAdjustM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconAdjustM>;

const Template: ComponentStory<typeof IconAdjustM> = (args) => (
  <IconAdjustM {...args} />
);

export const Basic = Template.bind({});
