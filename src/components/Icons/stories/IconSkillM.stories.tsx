import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconSkillM } from '..';

export default {
  title: 'Icons/IconSkillM',
  component: IconSkillM,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconSkillM>;

const Template: ComponentStory<typeof IconSkillM> = (args) => (
  <IconSkillM {...args} />
);

export const Basic = Template.bind({});
