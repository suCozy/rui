import * as SwitchPrimitive from '@radix-ui/react-switch';
import styled, { css } from 'styled-components';

import { contents300, contents999, secondary100 } from 'mixins/colors';
import type { SwitchProps } from './types';

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const SwitchRoot = styled(SwitchPrimitive.Root)<{
  size: SwitchProps['size'];
}>`
  all: unset;
  background-color: ${contents300};
  border-radius: 24px;
  position: relative;
  cursor: pointer;

  /* focus hover 디자인 미정 */
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
  &[data-state='checked'] {
    background-color: ${secondary100};
  }

  ${({ size }) =>
    (size === 'small' &&
      css`
        width: 36px;
        height: 20px;
      `) ||
    (size === 'large' &&
      css`
        width: 64px;
        height: 38px;
      `)};
`;

export const SwitchThumb = styled(SwitchPrimitive.Thumb)<{
  size: SwitchProps['size'];
}>`
  display: block;
  background-color: ${contents999};
  border-radius: 50%;
  transition: transform 100ms ease-out;
  will-change: transform;

  ${({ size }) =>
    (size === 'small' &&
      css`
        width: 14px;
        height: 14px;
        transform: translateX(3px);
        &[data-state='checked'] {
          transform: translateX(19px);
        }
      `) ||
    (size === 'large' &&
      css`
        width: 28px;
        height: 28px;
        transform: translateX(5px);
        &[data-state='checked'] {
          transform: translateX(31px);
        }
      `)};
`;
