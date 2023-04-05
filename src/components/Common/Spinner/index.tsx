import { Container } from './styles';
import { SpinnerProps } from './types';
import { SPINNER_SIZES } from './const';

export const Spinner = ({
  size = 'small',
  className,
  color,
  layout = 'block',
}: SpinnerProps) => {
  const isRegularSize = typeof size === 'string';
  const SpinnerIcon = SPINNER_SIZES[isRegularSize ? size : 'small'];

  return (
    <Container className={className} $color={color} layout={layout}>
      <SpinnerIcon {...(!isRegularSize && { width: size, height: size })} />
    </Container>
  );
};
