import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCallM } from '..';

export default {
  title: 'Icons/IconCallM',
  component: IconCallM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconCallM>;

const Template: ComponentStory<typeof IconCallM> = (args) => (
  <IconCallM {...args} />
);

export const Basic = Template.bind({});
