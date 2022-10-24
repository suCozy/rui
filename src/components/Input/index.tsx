import {
  forwardRef,
  memo,
  ReactNode,
  useState,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from 'react';

import { createRandomId } from 'utils/id';

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
  hasToggleVisibleIcon?: boolean;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    label,
    leftElement,
    rightElement,
    disabled,
    hintText,
    hasToggleVisibleIcon,
    ...props
  },
  ref
) => {
  const [labelId] = useState(createRandomId());

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
        {/* {hasToggleVisibleIcon && <} */}
        {rightElement}
      </InputContainer>
    </>
  );
};

export default memo(forwardRef(Input));
