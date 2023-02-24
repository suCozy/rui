import styled, { css } from 'styled-components';
import {
  bg100,
  bg200,
  bg300,
  contents000,
  contents100,
  contents150,
  contents300,
  contents999,
} from 'colors/v3';

import { webOnly } from 'mixins/breakpoints';
import { getTypographyStyles } from 'mixins/typography';
import { BUTTON_COLORS, BUTTON_SIZES } from './const';
import type { ButtonStyleType } from './types';

export const ButtonRoot = styled.button<ButtonStyleType>`
  all: unset;
  appearance: none;
  box-sizing: border-box;
  user-select: none;
  padding: 0 16px;
  transition: background 0.2s ease-in-out;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${contents999};
  border-radius: 4px;

  &:disabled {
    background-color: ${contents300};
    cursor: not-allowed;
    color: ${contents999};

    ${({ outline }) =>
      outline &&
      css`
        background-color: ${bg100};
        border: 1px solid ${contents300};
        color: ${contents300};
      `};
  }

  ${webOnly(css`
    &:hover {
      background-color: ${contents100};
    }
    &:active {
      background-color: ${contents150};
    }
  `)}

  ${({ block }) =>
    block &&
    css`
      flex-shrink: 1;
      width: 100%;
    `};

  ${({ size = 'medium' }) => css`
    ${getTypographyStyles(BUTTON_SIZES[size].typography)}
    height: ${BUTTON_SIZES[size].height};
    min-width: ${BUTTON_SIZES[size].minWidth};
  `};

  ${({ theme }) => css`
    background-color: ${BUTTON_COLORS[theme]};
  `};

  ${({ outline }) =>
    outline &&
    css`
      background-color: ${bg100};
      border: 1px solid ${contents300};
      color: ${contents000};

      ${webOnly(css`
        &:hover {
          background-color: ${bg200};
        }
        &:active {
          background-color: ${bg300};
        }
      `)}
    `};
`;
