import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconExternalM } from '..';

export default {
  title: 'Icons/IconExternalM',
  component: IconExternalM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconExternalM>;

const Template: ComponentStory<typeof IconExternalM> = (args) => (
  <IconExternalM {...args} />
);

export const Basic = Template.bind({});
