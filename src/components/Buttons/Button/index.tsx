import { Spinner } from '@/components/Common/Spinner';

import { ButtonRoot } from './styles';
import type { ButtonSizeType, ButtonVariant } from './types';

export function Button({
  className,
  disabled = false,
  variant = 'solid',
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
      variant={variant}
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
  variant?: ButtonVariant;
  outline?: boolean;
  size?: ButtonSizeType;
  loading?: boolean;
  block?: boolean;
  children: React.ReactNode;
}
