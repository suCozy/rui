import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconUploadM } from '..';

export default {
  title: 'Icons/IconUploadM',
  component: IconUploadM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconUploadM>;

const Template: ComponentStory<typeof IconUploadM> = (args) => (
  <IconUploadM {...args} />
);

export const Basic = Template.bind({});
