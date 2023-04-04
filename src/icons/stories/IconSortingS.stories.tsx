import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSortingS } from '..';

export default {
  title: 'Icons/IconSortingS',
  component: IconSortingS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSortingS>;

const Template: ComponentStory<typeof IconSortingS> = (args) => (
  <IconSortingS {...args} />
);

export const Basic = Template.bind({});
