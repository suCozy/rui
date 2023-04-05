import { contents000, contents300, contents999 } from '@/mixins/colors';
import type { SpinnerSize } from '@/components/Common/Spinner/types';

import type { ButtonSize, ButtonVariant } from './types';

export const BUTTON_SIZES = {
  small: {
    typography: 'Body2_M',
    height: '32px',
    minWidth: '68px',
    padding: '0 16px',
  },
  medium: {
    typography: 'Body1_M',
    height: '36px',
    minWidth: '78px',
    padding: '0 20px',
  },
  large: {
    typography: 'Headline4_M',
    height: '44px',
    minWidth: '108px',
    padding: '0 20px',
  },
  xLarge: {
    typography: 'Headline4_M',
    height: '52px',
    minWidth: '116px',
    padding: '0 24px',
  },
} as const satisfies Record<ButtonSize, unknown>;

export const BUTTON_COLORS = {
  primary: {
    backgroundColor: contents000,
    color: contents999,
  },
  outline: {
    backgroundColor: contents300,
    color: contents000,
  },
} as const satisfies Record<ButtonVariant, unknown>;

export const SPINNER_SIZE_MAP = {
  small: 'small',
  medium: 'small',
  large: 'medium',
  xLarge: 'medium',
} as const satisfies Record<ButtonSize, SpinnerSize>;

export const ICON_GAP_MAP = {
  small: '4px',
  medium: '4px',
  large: '8px',
  xLarge: '8px',
} as const satisfies Record<ButtonSize, string>;
