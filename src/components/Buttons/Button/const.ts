import { contents000, contents150 } from '@/mixins/colors';

import type { ButtonVariant } from './types';

export const BUTTON_SIZES = {
  small: {
    typography: 'Body2_M',
    height: '32px',
    minWidth: '68px',
  },
  medium: {
    typography: 'Body1_M',
    height: '36px',
    minWidth: '78px',
  },
  large: {
    typography: 'Headline4_M',
    height: '44px',
    minWidth: '108px',
  },
  xLarge: {
    typography: 'Headline4_M',
    height: '52px',
    minWidth: '116px',
  },
} as const;

export const BUTTON_COLORS: Record<ButtonVariant, string> = {
  solid: contents000,
  secondary: contents150,
} as const;
