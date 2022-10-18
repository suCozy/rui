import { getTypographyStyles, type TypographyStyle } from 'mixins/typography';
import styled from 'styled-components';
import type { TypographyTagNames } from './types';

export const getTypographyComponent = ({
  variant = 'Body1_M',
  tagName,
}: {
  variant: TypographyStyle;
  tagName: TypographyTagNames;
}) => styled(tagName)`
  ${getTypographyStyles(variant)}
  margin: 0;
`;
