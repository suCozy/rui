import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createElement } from 'react';

import {
  getIconComponentFromName,
  iconNames,
  isIconName,
} from '@/components/stories/util';

import { Button } from '.';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    icon: { control: 'select', options: iconNames },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ icon, ...args }) => {
  const iconString = String(icon);
  const iconElement =
    icon &&
    isIconName(iconString) &&
    createElement(getIconComponentFromName(iconString));

  return (
    <Button {...args} icon={iconElement}>
      버튼
    </Button>
  );
};

export const Default = Template.bind({});
