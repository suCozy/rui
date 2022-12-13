import { contents300, secondary100 } from 'colors/v3';
import { Icon, type IconName } from 'components/Icon/Icon';
import type { ControlChildrenType, ControlOption } from '../types';

const ICON_NAME: Record<ControlOption, Record<'on' | 'off', IconName>> = {
  check: { on: 'control_check_on_m', off: 'control_check_off_m' },
  checkbox: { on: 'control_checkbox_on_m', off: 'control_checkbox_off_m' },
  favorite: { on: 'control_bookmark_on_m', off: 'control_bookmark_off_m' },
  bookmark: { on: 'control_favorite_on', off: 'control_favorite_off' },
};

export function ControlOptionIcon({
  checked,
  size,
  option,
}: ControlChildrenType) {
  const iconSize = size === 'small' ? 16 : 24;

  return (
    <Icon
      iconName={checked ? ICON_NAME[option].on : ICON_NAME[option].off}
      width={iconSize}
      height={iconSize}
      aria-hidden="true"
      color={checked ? secondary100 : contents300}
    />
  );
}
