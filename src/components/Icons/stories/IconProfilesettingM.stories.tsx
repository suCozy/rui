import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconProfilesettingM } from '..';

export default {
  title: 'Icons/IconProfilesettingM',
  component: IconProfilesettingM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconProfilesettingM>;

const Template: ComponentStory<typeof IconProfilesettingM> = (args) => (
  <IconProfilesettingM {...args} />
);

export const Basic = Template.bind({});
