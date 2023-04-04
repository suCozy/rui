import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconFlashoffM } from '..';

export default {
  title: 'Icons/IconFlashoffM',
  component: IconFlashoffM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconFlashoffM>;

const Template: ComponentStory<typeof IconFlashoffM> = (args) => (
  <IconFlashoffM {...args} />
);

export const Basic = Template.bind({});
