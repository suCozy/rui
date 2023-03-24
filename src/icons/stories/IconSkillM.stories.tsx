import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSkillM } from '..';

export default {
  title: 'Icons/IconSkillM',
  component: IconSkillM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconSkillM>;

const Template: ComponentStory<typeof IconSkillM> = (args) => (
  <IconSkillM {...args} />
);

export const Basic = Template.bind({});
