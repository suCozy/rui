import { StyledButton } from './styles';
import type { ButtonProps } from './types';

export function Button({
  children,
  color,
  size = 'small',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <StyledButton $color={color} $size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
