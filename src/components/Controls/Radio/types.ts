import { ChangeEvent, ReactNode } from 'react';

export type ControlSizeType = 'small' | 'medium';

export interface ControlProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: ControlSizeType;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  name?: string;
}
