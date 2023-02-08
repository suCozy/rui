import { ControlRoot } from '../Control/styles';
import { RadioInput } from './styles';
import { ControlProps } from './types';

/**
 *
 * @prop {ReactNode} children
 * @prop {string} id
 * @prop {boolean} checked
 * @prop {function} onCheckedChange
 * @prop {boolean} disabled
 */
export function Radio({
  children,
  disabled = false,
  checked,
  onCheckedChange,
  id,
  name,
  ...props
}: Omit<ControlProps, 'size'>) {
  return (
    <ControlRoot htmlFor={id}>
      <RadioInput
        id={id}
        name={name}
        type="radio"
        aria-checked={checked}
        aria-label={name}
        tabIndex={0}
        checked={checked}
        disabled={disabled}
        onChange={(e) => {
          if (disabled) {
            return;
          }
          onCheckedChange(e);
        }}
        {...props}
      />
      {/* 라벨 디자인 미정 */}
      {children}
    </ControlRoot>
  );
}
