import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDownloadS } from '..';

export default {
  title: 'Icons/IconDownloadS',
  component: IconDownloadS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconDownloadS>;

const Template: ComponentStory<typeof IconDownloadS> = (args) => (
  <IconDownloadS {...args} />
);

export const Basic = Template.bind({});
