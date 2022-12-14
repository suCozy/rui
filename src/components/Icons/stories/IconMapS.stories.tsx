import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMapS } from '..';

export default {
  title: 'Icons/IconMapS',
  component: IconMapS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconMapS>;

const Template: ComponentStory<typeof IconMapS> = (args) => (
  <IconMapS {...args} />
);

export const Basic = Template.bind({});
