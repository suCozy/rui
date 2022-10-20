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
  leftElements?: ReactNode;
  rightElements?: ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    label,
    leftElements,
    rightElements,
    disabled,
    hintText,
    ...props
  },
  ref
) => {
  // TODO: useId로 대체해야 함, 랜덤 ID생성하는 로직 작성할 것
  const labelId = useMemo(() => String(Date.now()), []);
  return (
    <>
      {label && <InputLabel htmlFor={labelId}>{label}</InputLabel>}
      <InputContainer disabled={disabled} className={className}>
        {leftElements}
        <InputInner
          disabled={disabled}
          id={labelId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          ref={ref}
        />
        {hintText && <InputHintText>{hintText}</InputHintText>}
        {rightElements}
      </InputContainer>
    </>
  );
};

export default memo(forwardRef(Input));
