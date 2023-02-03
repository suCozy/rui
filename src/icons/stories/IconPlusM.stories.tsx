import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPlusM } from '..';

export default {
  title: 'Icons/IconPlusM',
  component: IconPlusM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconPlusM>;

const Template: ComponentStory<typeof IconPlusM> = (args) => (
  <IconPlusM {...args} />
);

export const Basic = Template.bind({});
