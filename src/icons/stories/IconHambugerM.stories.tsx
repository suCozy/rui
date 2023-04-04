import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHambugerM } from '..';

export default {
  title: 'Icons/IconHambugerM',
  component: IconHambugerM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconHambugerM>;

const Template: ComponentStory<typeof IconHambugerM> = (args) => (
  <IconHambugerM {...args} />
);

export const Basic = Template.bind({});
