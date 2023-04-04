import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconGradeM } from '..';

export default {
  title: 'Icons/IconGradeM',
  component: IconGradeM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconGradeM>;

const Template: ComponentStory<typeof IconGradeM> = (args) => (
  <IconGradeM {...args} />
);

export const Basic = Template.bind({});
