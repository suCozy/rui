import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAttachfileM } from '..';

export default {
  title: 'Icons/IconAttachfileM',
  component: IconAttachfileM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconAttachfileM>;

const Template: ComponentStory<typeof IconAttachfileM> = (args) => (
  <IconAttachfileM {...args} />
);

export const Basic = Template.bind({});
