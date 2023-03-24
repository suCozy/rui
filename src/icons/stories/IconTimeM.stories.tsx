import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTimeM } from '..';

export default {
  title: 'Icons/IconTimeM',
  component: IconTimeM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconTimeM>;

const Template: ComponentStory<typeof IconTimeM> = (args) => (
  <IconTimeM {...args} />
);

export const Basic = Template.bind({});
