import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTaxiM } from '..';

export default {
  title: 'Icons/IconTaxiM',
  component: IconTaxiM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconTaxiM>;

const Template: ComponentStory<typeof IconTaxiM> = (args) => (
  <IconTaxiM {...args} />
);

export const Basic = Template.bind({});
