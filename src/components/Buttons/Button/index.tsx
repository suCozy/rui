import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, memo } from 'react';

import { Spinner } from '@/components/Common';

import { SPINNER_SIZE_MAP } from './const';
import { StyledButton } from './styles';
import type { ButtonProps } from './types';

const _Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    color,
    size = 'small',
    variant = 'primary',
    layout = 'block',
    isLoading = false,
    icon,
    iconPosition,
    ...props
  },
  ref
) => (
  <StyledButton
    $color={color}
    $size={size}
    variant={variant}
    layout={layout}
    isLoading={isLoading}
    aria-live="polite"
    aria-busy={isLoading}
    ref={ref}
    {...props}
  >
    {isLoading ? (
      <Spinner size={SPINNER_SIZE_MAP[size]} />
    ) : (
      <>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </>
    )}
  </StyledButton>
);

export const Button = memo(forwardRef(_Button));
