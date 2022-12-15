import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDeleteM } from '..';

export default {
  title: 'Icons/IconDeleteM',
  component: IconDeleteM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconDeleteM>;

const Template: ComponentStory<typeof IconDeleteM> = (args) => (
  <IconDeleteM {...args} />
);

export const Basic = Template.bind({});
