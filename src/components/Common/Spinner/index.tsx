import { IconSpinner } from '@/icons';
import { contents000 } from '@/mixins/colors';

import { Container } from './styles';

export interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Spinner = ({
  size = 32,
  color = contents000,
  className,
}: SpinnerProps) => (
  <Container className={className}>
    <IconSpinner width={size} height={size} color={color} aria-hidden />
  </Container>
);
