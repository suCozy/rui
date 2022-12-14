import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCareerS } from "..";

export default {
  title: 'Icons/IconCareerS',
  component: IconCareerS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black'
  }
} as ComponentMeta<typeof IconCareerS>;

const Template: ComponentStory<typeof IconCareerS> = (args) => (
  <IconCareerS {...args} />
);

export const Basic = Template.bind({});