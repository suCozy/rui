import { Children, cloneElement, isValidElement, ReactNode } from 'react';

import Check from '../Check';
import { ControlRoot } from './styles';
import type { ControlProps } from './types';

/**
 *
 * @prop {boolean | 'indeterminate'} checked - indeterminate일 경우 hover, focus 상태
 * @prop {'small' | 'medium'} size / default: 'medium'
 * @prop {boolean} defaultChecked
 * @prop {string} id string
 * @prop {string} name string
 * @prop {boolean} asChild / default: false
 * @prop {function} onCheckedChange
 * @prop {boolean} disabled boolean
 * @prop {boolean} required boolean
 * @prop {string} value / default: 'on'
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference
 */
function Control({
  children,
  checked,
  defaultChecked,
  name,
  size = 'medium',
  id,
  ...props
}: ControlProps) {
  return (
    <ControlRoot
      id={id}
      role="checkbox"
      aria-checked={!!checked}
      aria-label={name}
      {...props}
    >
      {Children.map<ReactNode, ReactNode>(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { checked, size, ...child.props });
        }
      })}
    </ControlRoot>
  );
}

export default Object.assign(Control, { Check });
