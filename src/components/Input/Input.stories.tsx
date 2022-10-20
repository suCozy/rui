import { ComponentMeta, ComponentStory } from '@storybook/react';

import * as Assets from 'assets';

import Input from '.';
const iconNames = ['none', ...Object.keys(Assets)];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    hintText: { defaultValue: undefined, type: 'string' },
    leftElement: { control: 'select', options: iconNames },
    rightElement: { control: 'select', options: iconNames },
    type: { control: 'radio', options: ['text', 'password'] },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
} as ComponentMeta<typeof Input>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = ({
  leftElement,
  rightElement,
  ...args
}) => {
  const RenderedLeftElement = Assets[String(leftElement)];
  const RenderedRightElement = Assets[String(rightElement)];

  return (
    <Input
      {...args}
      leftElement={leftElement === 'none' ? null : <RenderedLeftElement />}
      rightElement={rightElement === 'none' ? null : <RenderedRightElement />}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  hintText: 'hint',
};

export const WithLabel = Template.bind({});
WithLabel.args = { placeholder: 'Placeholder', label: 'Label' };
