import React from 'react';

import { type TypographyStyle } from 'mixins/typography';
import { TYPOGRAPHY_COMPONENT_MAP } from './const';
import { getTypographyComponent } from './styles';
import type { TypographyTagNames } from './types';

export function Typography({
  variant = 'Body1_M',
  tagName,
  color,
  children,
}: TypographyProps) {
  const Component = getTypographyComponent(
    tagName || TYPOGRAPHY_COMPONENT_MAP[variant]
  );

  return (
    <Component variant={variant} color={color}>
      {children}
    </Component>
  );
}

export interface TypographyProps {
  variant?: TypographyStyle;
  tagName?: TypographyTagNames;
  color?: string;
  children?: React.ReactNode;
}
