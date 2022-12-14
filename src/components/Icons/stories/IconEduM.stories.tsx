import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconEduM } from "..";

export default {
  title: 'Icons/IconEduM',
  component: IconEduM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconEduM>;

const Template: ComponentStory<typeof IconEduM> = (args) => (
  <IconEduM {...args} />
);

export const Basic = Template.bind({});