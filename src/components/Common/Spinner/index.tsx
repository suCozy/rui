import { contents000, contents999 } from 'colors/v3';
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
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8678 2.72842C10.0158 2.26394 9.03871 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 6.81381 13.6558 5.70801 13.0618 4.77705L11.9663 5.87251C12.3068 6.50599 12.5 7.23044 12.5 8C12.5 10.4853 10.4853 12.5 8 12.5C5.51472 12.5 3.5 10.4853 3.5 8C3.5 5.51472 5.51472 3.5 8 3.5C8.61887 3.5 9.20857 3.62493 9.74524 3.85095L10.8678 2.72842Z"
        fill={color === 'black' ? contents000 : contents999}
      />
    </svg>
  </Container>
);
