import { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';

import {
  getIconComponentFromName,
  iconNames,
  isIconName,
} from '@/components/stories/util';

import { TextInput } from '.';

type Story = StoryObj<typeof TextInput>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
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
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  render: ({ leftElement, rightElement, ...args }) => {
    const leftIconString = String(leftElement);
    const RightIconString = String(rightElement);
    const renderedLeftElement =
      leftElement &&
      isIconName(leftIconString) &&
      createElement(getIconComponentFromName(leftIconString));
    const renderedRightElement =
      rightElement &&
      isIconName(RightIconString) &&
      createElement(getIconComponentFromName(RightIconString));

    return (
      <TextInput
        {...args}
        leftElement={renderedLeftElement}
        rightElement={renderedRightElement}
      />
    );
  },
};

export default meta;
