import styled from 'styled-components';

import { getTypographyStyles, type TypographyStyle } from 'mixins/typography';
import type { TypographyTagNames } from './types';
import { contents000 } from 'colors/v3';

export const getTypographyComponent = (tagName: TypographyTagNames) => styled(
  tagName
)<{ variant?: TypographyStyle; color?: string }>`
  ${({ variant = 'Body1_M' }) => getTypographyStyles(variant)}
  color: ${({ color = contents000 }) => color};
  margin: 0;
`;
