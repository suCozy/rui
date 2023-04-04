import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconFlashM } from '..';

export default {
  title: 'Icons/IconFlashM',
  component: IconFlashM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconFlashM>;

const Template: ComponentStory<typeof IconFlashM> = (args) => (
  <IconFlashM {...args} />
);

export const Basic = Template.bind({});
