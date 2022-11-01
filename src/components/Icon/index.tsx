import React from 'react';

import * as Icons from 'assets';

export type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconName;
}

function Icon({ iconName, ...props }: IconProps) {
  const getIconComponent = (iconNameString: IconName) => Icons[iconNameString];

  const SvgComponent = getIconComponent(iconName);

  return <SvgComponent {...props} />;
}

export default Icon;
