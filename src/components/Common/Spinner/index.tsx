import React from 'react';

import { contents000, contents999 } from 'colors/v3';
import { IconSpinner } from 'components/Icons';
import { Container } from './styles';

export interface SpinnerProps {
  size?: number;
  color?: 'black' | 'white';
  className?: string;
}

export const Spinner = ({
  size = 32,
  color = 'black',
  className,
}: SpinnerProps) => (
  <Container className={className}>
    <IconSpinner
      width={size}
      height={size}
      color={color === 'black' ? contents000 : contents999}
      aria-hidden={true}
    />
  </Container>
);
