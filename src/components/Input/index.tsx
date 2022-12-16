import {
  forwardRef,
  memo,
  ReactNode,
  useState,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from 'react';

import { IconVisibilityS, IconVisibilityOffS } from 'components/Icons';
import { createRandomId } from 'utils/id';

import {
  InputContainer,
  InputError,
  InputHintText,
  InputInner,
  InputLabel,
  InputTogglePasswordVisibilityButton,
} from './index.styles';

type BaseInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  `aria-${string}`
>;

type TextInputProps = {
  type?: 'text' | 'number' | 'email' | 'search' | 'tel' | 'url';
  label?: ReactNode;
  hintText?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  errorMessage?: string;
};

type PasswordInputProps = Omit<TextInputProps, 'type'> & {
  type: 'password';
  hasTogglePasswordVisibilityButton: boolean;
};

export type InputProps = BaseInputProps & (TextInputProps | PasswordInputProps);

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    label,
    leftElement,
    rightElement,
    disabled,
    hintText,
    errorMessage,
    ...props
  },
  ref
) => {
  const [labelId] = useState(createRandomId());
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const isForceVisibleInput =
    props.type === 'password' &&
    props.hasTogglePasswordVisibilityButton &&
    isVisiblePassword;

  return (
    <>
      {label && (
        <InputLabel htmlFor={labelId}>
          {label}
          {props.required && <mark>*</mark>}
        </InputLabel>
      )}
      <InputContainer
        disabled={disabled}
        hasError={!!errorMessage}
        className={className}
      >
        {leftElement}
        <InputInner
          disabled={disabled}
          id={labelId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          type={isForceVisibleInput ? 'text' : props.type ?? 'text'}
          ref={ref}
        />
        {hintText && <InputHintText>{hintText}</InputHintText>}
        {props.type === 'password' &&
          props.hasTogglePasswordVisibilityButton && (
            <TogglePasswordVisibilityButton
              value={isVisiblePassword}
              onChange={setIsVisiblePassword}
            />
          )}
        {rightElement}
      </InputContainer>
      {errorMessage && <InputError>{errorMessage}</InputError>}
    </>
  );
};

const TogglePasswordVisibilityButton = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => (
  <InputTogglePasswordVisibilityButton
    role="switch"
    aria-checked={value ? 'true' : 'false'}
    aria-label="비밀번호 표시"
    onClick={() => {
      onChange(!value);
    }}
  >
    {value ? <IconVisibilityOffS /> : <IconVisibilityS />}
  </InputTogglePasswordVisibilityButton>
);

export default memo(forwardRef(Input));
