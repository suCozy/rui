import React from 'react';

import * as Icons from 'assets';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof Icons;
}

function Icon({ iconName, ...props }: IconProps) {
  const getIconComponent = (iconNameString: keyof typeof Icons) =>
    Icons[iconNameString];

  const SvgComponent = getIconComponent(iconName);

  return <SvgComponent {...props} />;
}

export default Icon;
