import Icon, { IconName } from 'components/Icon';
import { ControlChildrenType } from '../types';

const ICON_NAME = {
  check: { on: 'control_check_on_m', off: 'control_check_off_m' },
  checkbox: { on: 'control_checkbox_on_m', off: 'control_checkbox_off_m' },
  favorite: { on: 'control_bookmark_on_m', off: 'control_bookmark_off_m' },
  bookmark: { on: 'control_favorite_on', off: 'control_favorite_off' },
};

function ControlOptionIcon({ checked, size, option }: ControlChildrenType) {
  const iconSize = size === 'small' ? 16 : 24;

  return (
    <Icon
      iconName={
        checked
          ? (ICON_NAME[option].on as IconName)
          : (ICON_NAME[option].off as IconName)
      }
      width={iconSize}
      height={iconSize}
      aria-hidden="true"
    />
  );
}

export default ControlOptionIcon;
