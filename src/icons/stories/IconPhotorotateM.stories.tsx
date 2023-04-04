import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconPhotorotateM } from '..';

export default {
  title: 'Icons/IconPhotorotateM',
  component: IconPhotorotateM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconPhotorotateM>;

const Template: ComponentStory<typeof IconPhotorotateM> = (args) => (
  <IconPhotorotateM {...args} />
);

export const Basic = Template.bind({});
