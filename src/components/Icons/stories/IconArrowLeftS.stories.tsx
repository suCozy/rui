import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowLeftS } from '..';

export default {
  title: 'Icons/IconArrowLeftS',
  component: IconArrowLeftS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconArrowLeftS>;

const Template: ComponentStory<typeof IconArrowLeftS> = (args) => (
  <IconArrowLeftS {...args} />
);

export const Basic = Template.bind({});
