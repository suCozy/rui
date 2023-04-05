import { Spinner } from '@/components/Common';

import { SPINNER_SIZE_MAP } from './const';
import { StyledButton } from './styles';
import type { ButtonProps } from './types';

export function Button({
  children,
  color,
  size = 'small',
  variant = 'primary',
  layout = 'block',
  isLoading = false,
  icon,
  iconPosition,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $color={color}
      $size={size}
      variant={variant}
      layout={layout}
      isLoading={isLoading}
      aria-live="polite"
      aria-busy={isLoading}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {isLoading ? <Spinner size={SPINNER_SIZE_MAP[size]} /> : children}
      {iconPosition === 'right' && icon}
    </StyledButton>
  );
}
