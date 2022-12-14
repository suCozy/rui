import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageConfirmM } from "..";

export default {
  title: 'Icons/ImageConfirmM',
  component: ImageConfirmM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof ImageConfirmM>;

const Template: ComponentStory<typeof ImageConfirmM> = (args) => (
  <ImageConfirmM {...args} />
);

export const Basic = Template.bind({});