import { TypographyStyle } from 'mixins/typography';
import { TypographyTagNames } from './types';

export const TYPOGRAPHY_COMPONENT_MAP: Record<
  TypographyStyle,
  TypographyTagNames
> = {
  Headline2_B: 'h2',
  Headline3_B: 'h3',
  Headline4_B: 'h4',
  Headline4_M: 'h4',
  Body1_B: 'p',
  Body1_M: 'p',
  Body2_B: 'p',
  Body2_M: 'p',
  Caption_B: 'p',
};
