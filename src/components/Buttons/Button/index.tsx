import React from 'react';

import { Spinner } from 'components/Common/Spinner';
import { ButtonRoot } from './styles';
import type { ButtonSizeType, ButtonTheme } from './types';

export function Button({
  className,
  disabled = false,
  theme = 'solid',
  outline = false,
  size = 'medium',
  loading = false,
  block = false,
  children,
  ...props
}: ButtonProps) {
  const isLarge = size?.toLocaleLowerCase().includes('large');

  return (
    <ButtonRoot
      className={className}
      size={size}
      theme={theme}
      outline={outline}
      disabled={disabled}
      block={block}
      {...props}
    >
      {/* left / right 아이콘 추가 시 Icon 컴포넌트를 사용해주세요. */}
      {loading && !disabled ? (
        <Spinner size={isLarge ? 24 : 16} color={outline ? 'black' : 'white'} />
      ) : (
        children
      )}
    </ButtonRoot>
  );
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  theme?: ButtonTheme;
  outline?: boolean;
  size?: ButtonSizeType;
  loading?: boolean;
  block?: boolean;
  children: React.ReactNode;
}
