import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconReportM } from '..';

export default {
  title: 'Icons/IconReportM',
  component: IconReportM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconReportM>;

const Template: ComponentStory<typeof IconReportM> = (args) => (
  <IconReportM {...args} />
);

export const Basic = Template.bind({});
