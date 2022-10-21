import React from 'react';

import * as Icons from 'assets';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof Icons;
}

function Icon({ iconName }: IconProps) {
  const getIconComponent = (iconNameString: keyof typeof Icons) =>
    Icons[iconNameString];

  const SvgComponent = getIconComponent(iconName);

  return <SvgComponent />;
}

export default Icon;
