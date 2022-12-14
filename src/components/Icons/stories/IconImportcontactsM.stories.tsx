import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconImportcontactsM } from "..";

export default {
  title: 'Icons/IconImportcontactsM',
  component: IconImportcontactsM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconImportcontactsM>;

const Template: ComponentStory<typeof IconImportcontactsM> = (args) => (
  <IconImportcontactsM {...args} />
);

export const Basic = Template.bind({});