import { type TypographyStyle } from 'mixins/typography';
import { StyledTypography } from './styles';
import type { TypographyTagNames } from './types';

export function Typography({
  variant = 'Body1_M',
  tagName,
  color,
  children,
}: TypographyProps) {
  return (
    <StyledTypography as={tagName} variant={variant} color={color}>
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
