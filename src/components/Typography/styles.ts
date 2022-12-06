import styled from 'styled-components';

import { contents000 } from 'colors/v3';
import { getTypographyStyles, type TypographyStyle } from 'mixins/typography';

export const StyledTypography = styled.div<{
  variant?: TypographyStyle;
  color?: string;
}>`
  ${({ variant = 'Body1_M' }) => getTypographyStyles(variant)}
  color: ${({ color = contents000 }) => color};
`;
