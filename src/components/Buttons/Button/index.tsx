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
      {/* 버튼 아이콘 추후 작업 예정 */}
      {loading && !disabled ? <Spinner size={isLarge ? 24 : 16} /> : children}
    </ButtonRoot>
  );
}

export default Object.assign(Button, {});
