import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconInfoS } from '..';

export default {
  title: 'Icons/IconInfoS',
  component: IconInfoS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconInfoS>;

const Template: ComponentStory<typeof IconInfoS> = (args) => (
  <IconInfoS {...args} />
);

export const Basic = Template.bind({});
