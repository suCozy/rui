import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDeleteS } from '..';

export default {
  title: 'Icons/IconDeleteS',
  component: IconDeleteS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconDeleteS>;

const Template: ComponentStory<typeof IconDeleteS> = (args) => (
  <IconDeleteS {...args} />
);

export const Basic = Template.bind({});
