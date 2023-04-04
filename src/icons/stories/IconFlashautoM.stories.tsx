import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconFlashautoM } from '..';

export default {
  title: 'Icons/IconFlashautoM',
  component: IconFlashautoM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconFlashautoM>;

const Template: ComponentStory<typeof IconFlashautoM> = (args) => (
  <IconFlashautoM {...args} />
);

export const Basic = Template.bind({});
