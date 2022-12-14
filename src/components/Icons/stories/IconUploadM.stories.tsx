import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconUploadM } from '..';

export default {
  title: 'Icons/IconUploadM',
  component: IconUploadM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconUploadM>;

const Template: ComponentStory<typeof IconUploadM> = (args) => (
  <IconUploadM {...args} />
);

export const Basic = Template.bind({});
