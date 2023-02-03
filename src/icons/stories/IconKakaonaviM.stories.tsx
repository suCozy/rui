import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconKakaonaviM } from '..';

export default {
  title: 'Icons/IconKakaonaviM',
  component: IconKakaonaviM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconKakaonaviM>;

const Template: ComponentStory<typeof IconKakaonaviM> = (args) => (
  <IconKakaonaviM {...args} />
);

export const Basic = Template.bind({});
