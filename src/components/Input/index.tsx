import {
  useMemo,
  forwardRef,
  memo,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
  ReactNode,
} from 'react';

import {
  InputContainer,
  InputHintText,
  InputInner,
  InputLabel,
} from './index.styles';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, `aria-${string}`> {
  label?: string;
  hintText?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, label, leftElement, rightElement, disabled, hintText, ...props },
  ref
) => {
  // TODO: useId로 대체해야 함, 랜덤 ID생성하는 로직 작성할 것
  const labelId = useMemo(() => String(Date.now()), []);
  return (
    <>
      {label && <InputLabel htmlFor={labelId}>{label}</InputLabel>}
      <InputContainer disabled={disabled} className={className}>
        {leftElement}
        <InputInner
          disabled={disabled}
          id={labelId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          ref={ref}
        />
        {hintText && <InputHintText>{hintText}</InputHintText>}
        {rightElement}
      </InputContainer>
    </>
  );
};

export default memo(forwardRef(Input));
