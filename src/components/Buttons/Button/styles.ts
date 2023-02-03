import styled, { css } from 'styled-components';

import { getTypographyStyles } from 'mixins/typography';
import { BUTTON_COLORS, BUTTON_SIZES } from './const';
import type { ButtonStyleType } from './types';
import { contents300, contents999, contents000 } from 'mixins/colors';

export const ButtonRoot = styled.button<ButtonStyleType>`
  all: unset;
  appearance: none;
  box-sizing: border-box;
  user-select: none;
  padding: 0 16px;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${contents999};
  border-radius: 4px;

  ${({ block }) =>
    block &&
    css`
      flex-shrink: 1;
      width: 100%;
    `};

  ${({ size }) => css`
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
      background-color: ${contents999};
      border: 1px solid ${contents300};
      color: ${contents000};
    `};

  &:disabled {
    background-color: ${contents300};
    cursor: not-allowed;
    color: ${contents999};

    ${({ outline }) =>
      outline &&
      css`
        background-color: ${contents999};
        border: 1px solid ${contents300};
        color: ${contents300};
      `};
  }
`;
