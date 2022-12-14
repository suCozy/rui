import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCareerInactiveM } from '..';

export default {
  title: 'Icons/IconCareerInactiveM',
  component: IconCareerInactiveM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconCareerInactiveM>;

const Template: ComponentStory<typeof IconCareerInactiveM> = (args) => (
  <IconCareerInactiveM {...args} />
);

export const Basic = Template.bind({});
