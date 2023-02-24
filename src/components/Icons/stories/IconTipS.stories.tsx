import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTipS } from '..';

export default {
  title: 'Icons/IconTipS',
  component: IconTipS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconTipS>;

const Template: ComponentStory<typeof IconTipS> = (args) => (
  <IconTipS {...args} />
);

export const Basic = Template.bind({});
