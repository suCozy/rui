import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconEditS } from '..';

export default {
  title: 'Icons/IconEditS',
  component: IconEditS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconEditS>;

const Template: ComponentStory<typeof IconEditS> = (args) => (
  <IconEditS {...args} />
);

export const Basic = Template.bind({});
