import type { CheckboxProps } from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';

export type ControlSizeType = 'small' | 'medium';

export interface ControlProps extends CheckboxProps {
  size?: ControlSizeType;
  children?: ReactNode;
}

export type ControlChildrenType = Pick<
  ControlProps,
  'size' | 'checked' | 'disabled'
>;
