import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSortingM } from '..';

export default {
  title: 'Icons/IconSortingM',
  component: IconSortingM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSortingM>;

const Template: ComponentStory<typeof IconSortingM> = (args) => (
  <IconSortingM {...args} />
);

export const Basic = Template.bind({});
