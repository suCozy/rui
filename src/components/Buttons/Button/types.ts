import type { ConvertTransientProps } from '@/common/types/styles';
import type { ColorVariable } from '@/mixins/colors/types';

export type ButtonSize = 'small' | 'medium' | 'large' | 'xLarge';

export type ButtonVariant = 'primary' | 'outline';

export type ButtonLayout = 'inline' | 'block' | 'fullBlock';

export type ButtonColor = ColorVariable | string;

export interface ButtonStyleProps {
  $size: ButtonSize;
  $color?: ButtonColor;
  variant: ButtonVariant;
  layout: ButtonLayout;
  isLoading: boolean;
}

export type ButtonProps = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  `aria-${string}`
> &
  Partial<ConvertTransientProps<ButtonStyleProps>> & {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  };
