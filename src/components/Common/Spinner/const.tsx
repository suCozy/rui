import { IconSpinnerM, IconSpinnerS } from '@/icons';

import type { SpinnerSize } from './types';

export const SPINNER_SIZES = {
  medium: IconSpinnerM,
  small: IconSpinnerS,
} as const satisfies Record<
  SpinnerSize,
  React.FC<React.SVGProps<SVGSVGElement>>
>;
