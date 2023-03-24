import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCareerM } from '..';

export default {
  title: 'Icons/IconCareerM',
  component: IconCareerM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCareerM>;

const Template: ComponentStory<typeof IconCareerM> = (args) => (
  <IconCareerM {...args} />
);

export const Basic = Template.bind({});
