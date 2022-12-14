import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDownloadM } from "..";

export default {
  title: 'Icons/IconDownloadM',
  component: IconDownloadM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconDownloadM>;

const Template: ComponentStory<typeof IconDownloadM> = (args) => (
  <IconDownloadM {...args} />
);

export const Basic = Template.bind({});