import styled from 'styled-components';

import { getTypographyStyles, type TypographyStyle } from 'mixins/typography';

export const StyledTypography = styled.div<{
  variant?: TypographyStyle;
  color?: string;
}>`
  ${({ variant = 'Body1_M' }) => getTypographyStyles(variant)}
  color: ${({ color = 'inherit' }) => color};
`;
