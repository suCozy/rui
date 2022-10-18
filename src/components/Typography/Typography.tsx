import { TypographyStyle } from 'mixins/typography';
import React from 'react';
import { TYPOGRAPHY_COMPONENT_MAP } from './const';
import { getTypographyComponent } from './styles';
import { TypographyTagNames } from './types';

export function Typography({
  variant = 'Body1_M',
  tagName,
  children,
}: TypographyProps) {
  const Styled = getTypographyComponent({
    variant,
    tagName: tagName || TYPOGRAPHY_COMPONENT_MAP[variant],
  });

  return <Styled>{children}</Styled>;
}

export interface TypographyProps {
  variant?: TypographyStyle;
  tagName?: TypographyTagNames;
  children?: React.ReactNode;
}
