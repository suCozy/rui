import type { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';

import {
  getIconComponentFromName,
  iconNames,
  isIconName,
} from '@/components/stories/util';

import { TextInput } from '.';

type Story = StoryObj<typeof TextInput>;

const meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
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
      ] satisfies Parameters<typeof TextInput>[0]['type'][],
    },
    hasTogglePasswordVisibilityButton: {
      type: 'boolean',
      defaultValue: false,
      if: {
        arg: 'type',
        eq: 'password',
      },
    },
    placeholder: {
      type: 'string',
      table: {
        defaultValue: { summary: 'PlaceHolder' },
      },
    },
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
} satisfies Meta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  render: ({ leftElement, rightElement, ...props }) => {
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
        leftElement={renderedLeftElement}
        rightElement={renderedRightElement}
        placeholder="PlaceHolder"
        {...props}
      />
    );
  },
};

export default meta;
