import type { SwitchProps as PrimitiveSwitchProps } from '@radix-ui/react-switch';
import type { ReactNode } from 'react';

export interface SwitchProps extends PrimitiveSwitchProps {
  children?: ReactNode;
  size?: 'small' | 'large';
}
