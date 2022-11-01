import type { ButtonProps } from './types';
import { ButtonRoot } from './styles';
import { Spinner } from 'components/Common/Spinner';

function Button({
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
  const isLarge = size.includes('arge');

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
      {/* left / right 아이콘 추가 시 Icon 컴포넌트를 사용해주세요. */}
      {loading && !disabled ? (
        <Spinner size={isLarge ? 24 : 16} color={outline ? 'black' : 'white'} />
      ) : (
        children
      )}
    </ButtonRoot>
  );
}

export default Button;
