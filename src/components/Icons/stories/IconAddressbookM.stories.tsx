import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAddressbookM } from '..';

export default {
  title: 'Icons/IconAddressbookM',
  component: IconAddressbookM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconAddressbookM>;

const Template: ComponentStory<typeof IconAddressbookM> = (args) => (
  <IconAddressbookM {...args} />
);

export const Basic = Template.bind({});
