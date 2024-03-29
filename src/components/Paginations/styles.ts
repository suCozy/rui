import styled, { css } from 'styled-components';

import {
  bg100,
  bg200,
  bg300,
  contents000,
  contents300,
  getTypographyStyles,
} from '@/mixins';
import { mobileOnly, desktopOnly } from '@/mixins/breakpoints';

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

export const CompactPaginationContainer = styled.div`
  all: unset;

  ${getTypographyStyles('Body1_M')}
  gap: 16px;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export const CurrentPage = styled.span`
  ${getTypographyStyles('Body1_B')}
`;

export const Pages = styled.ul`
  all: unset;
  display: inherit;
  gap: 4px;
`;

export const Page = styled.li``;

const DefaultButton = styled.button`
  all: unset;
  appearance: none;
  box-sizing: border-box;

  ${getTypographyStyles('Body1_M')}
  display: grid;
  place-items: center;

  min-width: 34px;
  height: 34px;
  cursor: pointer;
  color: ${contents000};
  border-radius: 4px;

  &:disabled {
    color: ${contents000};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const ArrowButton = styled(DefaultButton)`
  ${desktopOnly(css`
    &:hover {
      background-color: ${bg200};
    }
    &:active {
      background-color: ${bg300};
    }
  `)}

  ${mobileOnly(css`
    min-width: 44px;
    height: 44px;
  `)}
`;

export const BaseButton = styled(DefaultButton)`
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
