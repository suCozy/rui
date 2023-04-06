import type { ChangeEvent, ReactNode } from 'react';

export type ControlSizeType = 'small' | 'medium';

export interface ControlProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: ControlSizeType;
  checked: boolean;
  disabled?: boolean;
  required?: boolean;
  onCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  option: ControlOption;
  children?: ReactNode;
  name?: string;
}

export type ControlChildrenType = Pick<
  ControlProps,
  'size' | 'checked' | 'disabled' | 'option'
>;

export type ControlOption = 'check' | 'checkbox' | 'favorite' | 'bookmark';
