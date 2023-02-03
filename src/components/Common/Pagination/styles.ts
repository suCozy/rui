import styled, { css } from 'styled-components';

import { getTypographyStyles } from 'mixins/typography';
import { bg100, contents000, contents300 } from 'mixins/colors';
import { mobileOnly } from 'mixins/breakpoints';

export const PaginationContainer = styled.nav`
  all: unset;
  display: inline-flex;
  list-style-type: none;
  box-sizing: border-box;
  user-select: none;
  margin: 0;
  padding: 0;
  gap: 16px;

  ${mobileOnly(css`
    gap: 8px;
  `)};
`;

export const Pages = styled.ul`
  all: unset;
  display: inherit;
  gap: 4px;
`;

export const Page = styled.li``;

export const BaseButton = styled.button`
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
    background-color: ${bg100};
  }

  ${mobileOnly(css`
    min-width: 44px;
    height: 44px;
  `)}
`;

export const PageButton = styled(BaseButton)<{ selected?: boolean }>`
  ${({ selected }) =>
    selected &&
    css`
      border: solid 1px ${contents300};
      border-radius: 4px;
      background-color: ${bg100};
    `}
`;
