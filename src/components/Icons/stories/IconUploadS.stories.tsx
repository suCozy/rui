import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconUploadS } from "..";

export default {
  title: 'Icons/IconUploadS',
  component: IconUploadS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconUploadS>;

const Template: ComponentStory<typeof IconUploadS> = (args) => (
  <IconUploadS {...args} />
);

export const Basic = Template.bind({});