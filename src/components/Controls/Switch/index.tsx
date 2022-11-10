import React from 'react';

import { SwitchRoot, SwitchThumb, Label } from './styles';
import type { SwitchProps } from './types';

/**
 *
 * @prop {ReactNode} children
 * @prop {string} id
 * @prop {boolean} checked
 * @prop {boolean} defaultChecked
 * @prop {'small' | 'large'} size / default: 'medium'
 * @prop {function} onCheckedChange
 * @prop {boolean} disabled boolean
 * @prop {boolean} required boolean
 * @see https://www.radix-ui.com/docs/primitives/components/switch#api-reference
 */
export function Switch({
  children,
  id,
  size = 'small',
  ...props
}: SwitchProps) {
  return (
    <Label htmlFor={id}>
      <SwitchRoot
        id={id}
        size={size}
        role="switch"
        aria-label={children?.toString()}
        {...props}
      >
        <SwitchThumb size={size} aria-hidden="true" />
      </SwitchRoot>
      {/* 라벨 디자인 미정 */}
      {children}
    </Label>
  );
}
