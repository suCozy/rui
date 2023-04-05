import styled, { css, keyframes } from 'styled-components';

import { SpinnerStyleProps } from './types';

const RotateAnimation = keyframes`
  to { transform: rotate(360deg); };
`;

export const Container = styled.div<SpinnerStyleProps>(
  ({ $color, layout }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    ${layout === 'full' &&
    css`
      width: 100%;
      height: 100%;
    `}

    ${$color && `color: ${$color};`};

    > svg {
      animation: ${RotateAnimation} 1.5s linear infinite;
    }
  `
);
