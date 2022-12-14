import { contents300, secondary100 } from 'colors/v3';
import {
  ControlCheckOnM,
  ControlCheckOffM,
  ControlCheckboxOnM,
  ControlCheckboxOffM,
  ControlBookmarkOnM,
  ControlBookmarkOffM,
  ControlFavoriteOn,
  ControlFavoriteOff,
} from 'components/Icons';
import type { ControlChildrenType, ControlOption } from '../types';

const ICON_NAME: Record<
  ControlOption,
  Record<'on' | 'off', React.FC<React.SVGProps<SVGSVGElement>>>
> = {
  check: { on: ControlCheckOnM, off: ControlCheckOffM },
  checkbox: { on: ControlCheckboxOnM, off: ControlCheckboxOffM },
  favorite: { on: ControlBookmarkOnM, off: ControlBookmarkOffM },
  bookmark: { on: ControlFavoriteOn, off: ControlFavoriteOff },
};

export function ControlOptionIcon({
  checked,
  size,
  option,
}: ControlChildrenType) {
  const iconSize = size === 'small' ? 16 : 24;
  const Icon = checked ? ICON_NAME[option].on : ICON_NAME[option].off;

  return (
    <Icon
      width={iconSize}
      height={iconSize}
      aria-hidden="true"
      color={checked ? secondary100 : contents300}
    />
  );
}
