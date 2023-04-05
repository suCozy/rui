import styled, { css } from 'styled-components';

import {
  disabled,
  getRgb,
  getTypographyStyles,
  primary100,
  primary200,
} from '@/mixins';

import { BUTTON_COLORS, BUTTON_SIZES, ICON_GAP_MAP } from './const';
import type { ButtonStyleProps } from './types';

export const StyledButton = styled.button<ButtonStyleProps>(
  ({ variant, $size, layout, $color }) => [
    // 공용 스타일
    css`
      all: unset;
      appearance: none;
      box-sizing: border-box;
      user-select: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;

      display: ${layout === 'inline' ? 'inline-flex' : 'flex'};
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      gap: ${ICON_GAP_MAP[$size]};

      ${getTypographyStyles(BUTTON_SIZES[$size].typography)}
      ${layout === 'fullBlock' && `width: 100%;`}
      min-width: ${BUTTON_SIZES[$size].minWidth};
      height: ${BUTTON_SIZES[$size].height};
      padding: ${BUTTON_SIZES[$size].padding};
      border-radius: 4px;

      color: ${(variant === 'outline' ? $color : null) ??
      BUTTON_COLORS[variant].color};

      &:disabled {
        cursor: not-allowed;

        &::before {
          display: none;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(${getRgb(primary200)});
        opacity: 0;
        pointer-events: none;

        transition: opacity 0.2s;
      }
      @media (hover: hover) {
        &:hover::before {
          opacity: 0.1;
        }
      }
      &:active::before {
        opacity: 0.2;
      }
    `,

    // primary 스타일
    variant === 'primary' &&
      css`
        background-color: ${$color ?? BUTTON_COLORS[variant].backgroundColor};
        &:disabled {
          background-color: ${disabled};
        }
        &::before {
          background-color: ${primary200};
        }
      `,

    // outline 스타일
    variant === 'outline' &&
      css`
        border: 1px solid ${$color ?? BUTTON_COLORS[variant].backgroundColor};
        &:disabled {
          border-color: ${disabled};
          color: ${disabled};
        }
        &::before {
          background-color: ${$color ?? primary100};
        }
      `,
  ]
);
