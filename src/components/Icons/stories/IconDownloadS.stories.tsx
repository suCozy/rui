import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDownloadS } from '..';

export default {
  title: 'Icons/IconDownloadS',
  component: IconDownloadS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconDownloadS>;

const Template: ComponentStory<typeof IconDownloadS> = (args) => (
  <IconDownloadS {...args} />
);

export const Basic = Template.bind({});
