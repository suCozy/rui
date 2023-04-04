import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconFolderM } from '..';

export default {
  title: 'Icons/IconFolderM',
  component: IconFolderM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconFolderM>;

const Template: ComponentStory<typeof IconFolderM> = (args) => (
  <IconFolderM {...args} />
);

export const Basic = Template.bind({});
