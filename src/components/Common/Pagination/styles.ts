import styled, { css } from 'styled-components';

import { getTypographyStyles } from 'mixins/typography';
import { background100, contents000, contents300 } from 'colors/v3';
import { mobileOnly } from 'mixins/breakpoints';

export const PaginationContainer = styled.nav`
  all: unset;
  display: inline-flex;
  list-style-type: none;
  box-sizing: border-box;
  user-select: none;
  margin: 0;
  padding: 0;
`;

export const Pages = styled.ul`
  all: unset;
  display: inherit;
  gap: 4px;
`;

export const Page = styled.li``;

const Button = styled.button`
  ${getTypographyStyles('Body1_M')}
  all: unset;
  appearance: none;
  box-sizing: border-box;

  display: grid;
  place-items: center;

  min-width: 34px;
  height: 34px;
  cursor: pointer;
  color: ${contents000};

  &:disabled {
    color: ${contents000};
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    border: solid 1px ${contents300};
    border-radius: 4px;
    background-color: ${background100};
  }

  ${mobileOnly(css`
    min-width: 44px;
    height: 44px;
  `)}
`;

export const PageButton = styled(Button)<{ selected?: boolean }>`
  ${({ selected }) =>
    selected &&
    css`
      border: solid 1px ${contents300};
      border-radius: 4px;
      background-color: ${background100};
    `}
`;

export const MoveToButton = styled(Button)<{
  position: 'left' | 'right';
}>`
  ${({ position }) =>
    (position === 'left' &&
      css`
        margin-right: 16px;

        ${mobileOnly(css`
          margin-right: 8px;
        `)};
      `) ||
    (position === 'right' &&
      css`
        margin-left: 16px;

        ${mobileOnly(css`
          margin-left: 8px;
        `)};
      `)}
`;
