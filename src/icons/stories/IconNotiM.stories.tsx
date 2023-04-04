import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNotiM } from '..';

export default {
  title: 'Icons/IconNotiM',
  component: IconNotiM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconNotiM>;

const Template: ComponentStory<typeof IconNotiM> = (args) => (
  <IconNotiM {...args} />
);

export const Basic = Template.bind({});
