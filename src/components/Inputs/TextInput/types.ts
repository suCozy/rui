import type { InputHTMLAttributes, ReactNode } from 'react';

import type { ColorVariable } from '@/mixins/colors/types';

type BaseInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  `aria-${string}`
>;

type TextInputProps = {
  type?: 'text' | 'number' | 'email' | 'search' | 'tel' | 'url';
  label?: ReactNode;
  hintText?: string;
  hintTextColor?: ColorVariable;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  errorMessage?: string;
};

type PasswordInputProps = Omit<TextInputProps, 'type'> & {
  type: 'password';
  hasTogglePasswordVisibilityButton: boolean;
};

export type InputProps = BaseInputProps & (TextInputProps | PasswordInputProps);
