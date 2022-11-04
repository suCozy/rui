import React from 'react';

import { Icons } from '../../index';

export type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconName;
}

export function Icon({ iconName, ...props }: IconProps) {
  const getIconComponent = (iconNameString: IconName) => Icons[iconNameString];

  const SvgComponent = getIconComponent(iconName);

  return <SvgComponent {...props} />;
}
