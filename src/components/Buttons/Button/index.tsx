import type { ButtonProps } from './types';
import { ButtonRoot } from './styles';
import { Spinner } from 'components/Common/Spinner';

function Root({
  className,
  disabled = false,
  theme = 'solid',
  outline = false,
  size = 'small',
  loading = false,
  block = false,
  children,
  ...props
}: ButtonProps) {
  const isLarge = size.includes('large');
  return (
    <ButtonRoot
      className={className}
      size={size}
      theme={theme}
      outline={outline}
      disabled={disabled}
      block={block}
      loading={loading}
      {...props}
    >
      {loading && !disabled ? <Spinner size={isLarge ? 24 : 16} /> : children}
    </ButtonRoot>
  );
}

export { Root };
