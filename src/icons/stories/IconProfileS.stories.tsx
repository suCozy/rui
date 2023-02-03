import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconProfileS } from '..';

export default {
  title: 'Icons/IconProfileS',
  component: IconProfileS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconProfileS>;

const Template: ComponentStory<typeof IconProfileS> = (args) => (
  <IconProfileS {...args} />
);

export const Basic = Template.bind({});
