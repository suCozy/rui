import { ConvertTransientProps } from '@/common/utils/type';
import { ColorVariable } from '@/mixins/colors/types';

export type SpinnerLayout = 'full' | 'block';
export type SpinnerSize = 'small' | 'medium' | number;

export interface SpinnerStyleProps {
  $color?: ColorVariable | string;
  layout?: SpinnerLayout;
}

export interface SpinnerProps extends ConvertTransientProps<SpinnerStyleProps> {
  children?: React.ReactNode;
  className?: string;
  size?: SpinnerSize;
}
