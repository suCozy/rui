import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCareerM } from "..";

export default {
  title: 'Icons/IconCareerM',
  component: IconCareerM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCareerM>;

const Template: ComponentStory<typeof IconCareerM> = (args) => (
  <IconCareerM {...args} />
);

export const Basic = Template.bind({});