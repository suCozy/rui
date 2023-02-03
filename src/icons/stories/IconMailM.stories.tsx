import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMailM } from '..';

export default {
  title: 'Icons/IconMailM',
  component: IconMailM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconMailM>;

const Template: ComponentStory<typeof IconMailM> = (args) => (
  <IconMailM {...args} />
);

export const Basic = Template.bind({});
