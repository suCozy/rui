import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconEduS } from '..';

export default {
  title: 'Icons/IconEduS',
  component: IconEduS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconEduS>;

const Template: ComponentStory<typeof IconEduS> = (args) => (
  <IconEduS {...args} />
);

export const Basic = Template.bind({});
