import { ControlOptionIcon } from './ControlOptionIcon';
import { ControlInput, ControlRoot } from './styles';
import type { ControlProps } from './types';

/**
 *
 * @prop {ReactNode} children
 * @prop {boolean} checked
 * @prop {'small' | 'medium'} size / default: 'medium'
 * @prop {'check' | 'checkbox' | 'favorite' | 'bookmark'} option
 * @prop {function} onCheckedChange
 * @prop {boolean} disabled boolean
 * @prop {boolean} required boolean
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference
 */
export function Control({
  children,
  checked,
  disabled,
  size = 'medium',
  option = 'checkbox',
  onCheckedChange,
  id,
  name,
  ...props
}: ControlProps) {
  return (
    <ControlRoot htmlFor={id}>
      <ControlInput
        id={id}
        type="checkbox"
        aria-checked={checked}
        aria-label={children?.toString()}
        tabIndex={0}
        checked={checked}
        onChange={(e) => {
          if (disabled) {
            return;
          }
          onCheckedChange(e);
        }}
        {...props}
      />
      <ControlOptionIcon checked={checked} size={size} option={option} />
      {/* 라벨 디자인 미정 */}
      {children}
    </ControlRoot>
  );
}
