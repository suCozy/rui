import type { ButtonProps } from './types';
import { ButtonRoot, Spinner } from './styled';
import { IconSpinner } from 'assets';

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
      {/* Spinner 컴포넌트로 대체 예정 */}
      {loading && !disabled ? (
        <Spinner
          size={size}
          outline={outline}
          disabled={disabled}
          src={IconSpinner}
          alt="spinner"
        />
      ) : (
        children
      )}
    </ButtonRoot>
  );
}

export { Root };
