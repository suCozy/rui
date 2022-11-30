import React from 'react';

import { type TypographyStyle } from 'mixins/typography';
import { TYPOGRAPHY_COMPONENT_MAP } from './const';
import { StyledTypography } from './styles';
import type { TypographyTagNames } from './types';

export function Typography({
  variant = 'Body1_M',
  tagName,
  color,
  children,
}: TypographyProps) {
  return (
    <StyledTypography
      as={tagName || TYPOGRAPHY_COMPONENT_MAP[variant]}
      variant={variant}
      color={color}
    >
      {children}
    </StyledTypography>
  );
}

export interface TypographyProps {
  variant?: TypographyStyle;
  tagName?: TypographyTagNames;
  color?: string;
  children?: React.ReactNode;
}
