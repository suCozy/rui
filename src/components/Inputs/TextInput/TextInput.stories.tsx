import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createElement } from 'react';

import * as Icons from '@/icons';

import { TextInput } from '.';

type IconNamesType = keyof typeof Icons;

const iconNames = ['none' as const, ...(Object.keys(Icons) as IconNamesType[])];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'number',
        'search',
        'tel',
        'url',
        'password',
      ] as Parameters<typeof TextInput>[0]['type'][],
      defaultValue: 'text',
    },
    hasTogglePasswordVisibilityButton: {
      type: 'boolean',
      defaultValue: false,
      if: {
        arg: 'type',
        eq: 'password',
      },
    },
    placeholder: { defaultValue: 'PlaceHolder', type: 'string' },
    hintText: { type: 'string' },
    hintTextColor: {
      control: 'select',
      options: ['roleRed', 'contents000', 'contents300'],
      defaultValue: 'roleRed',
    },
    leftElement: { control: 'select', options: iconNames },
    rightElement: { control: 'select', options: iconNames },
    label: { type: 'string' },
    required: { type: 'boolean', defaultValue: false },
    errorMessage: { type: 'string' },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = ({
  leftElement,
  rightElement,
  ...args
}) => {
  const isIconsString = (value: string): value is IconNamesType =>
    Object.keys(Icons).includes(value);
  const leftIconString = String(leftElement);
  const RightIconString = String(rightElement);
  const renderedLeftElement =
    leftElement &&
    isIconsString(leftIconString) &&
    createElement(Icons[leftIconString]);
  const renderedRightElement =
    rightElement &&
    isIconsString(RightIconString) &&
    createElement(Icons[RightIconString]);

  return (
    <TextInput
      {...args}
      leftElement={leftElement === 'none' ? null : renderedLeftElement}
      rightElement={rightElement === 'none' ? null : renderedRightElement}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
