import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconMuteMOutline } from '..';

export default {
  title: 'Icons/IconMuteMOutline',
  component: IconMuteMOutline,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconMuteMOutline>;

const Template: ComponentStory<typeof IconMuteMOutline> = (args) => (
  <IconMuteMOutline {...args} />
);

export const Basic = Template.bind({});
