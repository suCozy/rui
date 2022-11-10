import React from 'react';

import { contents000, contents300 } from 'colors/v3';
import { Icon } from 'components/Icon/Icon';
import { range } from 'utils/common';
import {
  BaseButton,
  Pages,
  Page,
  PaginationContainer,
  PageButton,
} from './styles';
import type { PaginationProps } from './types';
import usePagination from './usePagination';

export function Pagination({
  activePage = 1,
  totalItemCount = 0,
  pageRangeDisplayed,
  onChangePage,
  itemCountPerPage,
  className,
}: PaginationProps) {
  const {
    firstPage,
    rangeLastPage,
    totalLastPage,
    prevPage,
    nextPage,
    isPrevPageDisabled,
    isNextPageDisabled,
    isFirstPageDisabled,
    isLastPageDisabled,
  } = usePagination({
    activePage,
    totalItemCount,
    pageRangeDisplayed,
    itemCountPerPage,
  });

  const iconColor = (disabled: boolean) =>
    disabled ? contents300 : contents000;

  const onClickPrevPage = () => onChangePage(prevPage);
  const onClickNextPage = () => onChangePage(nextPage);
  const onClickFirstPage = () => onChangePage(1);
  const onClickLastPage = () => onChangePage(totalLastPage);

  const onClickPage = (page: number) => onChangePage(page);

  return (
    <PaginationContainer
      className={className}
      role="navigation"
      aria-label="페이지네이션"
    >
      <BaseButton
        disabled={isFirstPageDisabled}
        onClick={onClickFirstPage}
        aria-label="첫 페이지로 이동"
      >
        <Icon
          iconName="icon_arrow_double_left_s"
          color={iconColor(isFirstPageDisabled)}
          aria-hidden="true"
        />
      </BaseButton>
      <BaseButton
        disabled={isPrevPageDisabled}
        onClick={onClickPrevPage}
        aria-label="이전 페이지로 이동"
      >
        <Icon
          iconName="icon_arrow_left_s"
          color={iconColor(isPrevPageDisabled)}
          aria-hidden="true"
        />
      </BaseButton>
      <Pages>
        {range(firstPage, rangeLastPage)?.map((_page) => (
          <Page key={_page}>
            <PageButton
              selected={_page === activePage}
              onClick={() => onClickPage(_page)}
              aria-label={`페이지 ${_page}`}
            >
              {_page}
            </PageButton>
          </Page>
        ))}
      </Pages>
      <BaseButton
        disabled={isNextPageDisabled}
        onClick={onClickNextPage}
        aria-label="다음 페이지로 이동"
      >
        <Icon
          iconName="icon_arrow_right_s"
          color={iconColor(isNextPageDisabled)}
          aria-hidden="true"
        />
      </BaseButton>
      <BaseButton
        disabled={isLastPageDisabled}
        onClick={onClickLastPage}
        aria-label="마지막 페이지로 이동"
      >
        <Icon
          iconName="icon_arrow_double_right_s"
          color={iconColor(isLastPageDisabled)}
          aria-hidden="true"
        />
      </BaseButton>
    </PaginationContainer>
  );
}
