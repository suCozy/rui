import Icon from 'components/Icon';
import { ControlChildrenType } from '../Control/types';

function Check({ checked, size }: ControlChildrenType) {
  const iconSize = size === 'small' ? 16 : 24;

  return (
    <>
      {checked === true && (
        <Icon
          iconName="control_bookmark_off_m"
          width={iconSize}
          height={iconSize}
          aria-hidden="true"
        />
      )}
      {checked === false && (
        <Icon
          iconName="control_bookmark_on_m"
          width={iconSize}
          height={iconSize}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Check;
