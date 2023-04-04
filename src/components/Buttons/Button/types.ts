import { ColorVariable } from '@/mixins/colors/types';

export type ButtonSize = 'small' | 'medium' | 'large' | 'xLarge';

export type ButtonVariant = 'primary' | 'outline';

export type ButtonLayout = 'inline' | 'block' | 'fullBlock';

export type ButtonColor = ColorVariable | string;

export interface ButtonStyleProps {
  $size: ButtonSize;
  $color: ButtonColor;
  variant: ButtonVariant;
  layout: ButtonLayout;
  isLoading: boolean;
}

export interface ButtonProps
  extends Omit<ButtonStyleProps, '$size' | '$color'>,
    Omit<React.HTMLAttributes<HTMLButtonElement>, `aria-${string}`> {
  size: ButtonStyleProps['$size'];
  color: ButtonStyleProps['$color'];
}
