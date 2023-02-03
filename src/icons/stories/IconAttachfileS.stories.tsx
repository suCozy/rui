import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAttachfileS } from '..';

export default {
  title: 'Icons/IconAttachfileS',
  component: IconAttachfileS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconAttachfileS>;

const Template: ComponentStory<typeof IconAttachfileS> = (args) => (
  <IconAttachfileS {...args} />
);

export const Basic = Template.bind({});
