import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCareerInactiveM } from '..';

export default {
  title: 'Icons/IconCareerInactiveM',
  component: IconCareerInactiveM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCareerInactiveM>;

const Template: ComponentStory<typeof IconCareerInactiveM> = (args) => (
  <IconCareerInactiveM {...args} />
);

export const Basic = Template.bind({});
