import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconProfileS } from '..';

export default {
  title: 'Icons/IconProfileS',
  component: IconProfileS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconProfileS>;

const Template: ComponentStory<typeof IconProfileS> = (args) => (
  <IconProfileS {...args} />
);

export const Basic = Template.bind({});
