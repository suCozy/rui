import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useState } from 'react';

import { createRandomId } from '@/common/utils/id';
import { IconVisibilityOffS, IconVisibilityS } from '@/icons';

import {
  InputContainer,
  InputDecorator,
  InputError,
  InputHintText,
  InputInner,
  InputLabel,
  InputTogglePasswordVisibilityButton,
} from './styles';
import type { InputProps } from './types';

const _TextInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    label,
    leftElement,
    rightElement,
    disabled,
    hintText,
    hintTextColor,
    errorMessage,
    ...props
  },
  ref
) => {
  const [inputId] = useState(createRandomId());
  const [labelId] = useState(createRandomId());
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const isForceVisibleInput =
    props.type === 'password' &&
    props.hasTogglePasswordVisibilityButton &&
    isVisiblePassword;

  return (
    <>
      {label && (
        <InputLabel id={labelId} htmlFor={inputId}>
          {label}
          {props.required && <mark>*</mark>}
        </InputLabel>
      )}
      <InputContainer
        disabled={disabled}
        hasError={!!errorMessage}
        className={className}
      >
        {leftElement && <InputDecorator>{leftElement}</InputDecorator>}
        <InputInner
          disabled={disabled}
          id={inputId}
          aria-labelledby={label ? labelId : undefined}
          {...props}
          type={isForceVisibleInput ? 'text' : props.type || 'text'}
          ref={ref}
        />
        {hintText && (
          <InputHintText textColor={hintTextColor}>{hintText}</InputHintText>
        )}
        {props.type === 'password' &&
          props.hasTogglePasswordVisibilityButton && (
            <TogglePasswordVisibilityButton
              value={isVisiblePassword}
              onChange={setIsVisiblePassword}
            />
          )}
        {rightElement && <InputDecorator>{rightElement}</InputDecorator>}
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

export const TextInput = forwardRef(_TextInput);
