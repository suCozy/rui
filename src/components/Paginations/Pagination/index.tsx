import { contents000, contents300 } from '@/mixins/colors';
import {
  IconArrowLeftDoubleS,
  IconArrowLeftS,
  IconArrowRightS,
  IconArrowRightDoubleS,
} from '@/icons';
import { range } from '@/common/utils/common';

import {
  Pages,
  Page,
  PaginationContainer,
  PageButton,
  ArrowButton,
} from '../styles';
import type { PaginationProps } from '../types';
import usePagination from '../usePagination';

export function Pagination({
  activePage = 1,
  totalItemCount = 0,
  pageRangeDisplayed = 10,
  onChangePage,
  itemCountPerPage,
  className,
  showFirstButton = false,
  showLastButton = false,
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
      {showFirstButton && (
        <ArrowButton
          disabled={isFirstPageDisabled}
          onClick={onClickFirstPage}
          aria-label="첫 페이지로 이동"
        >
          <IconArrowLeftDoubleS
            color={iconColor(isFirstPageDisabled)}
            aria-hidden="true"
          />
        </ArrowButton>
      )}
      <ArrowButton
        disabled={isPrevPageDisabled}
        onClick={onClickPrevPage}
        aria-label="이전 페이지로 이동"
      >
        <IconArrowLeftS
          color={iconColor(isPrevPageDisabled)}
          aria-hidden="true"
        />
      </ArrowButton>
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
      <ArrowButton
        disabled={isNextPageDisabled}
        onClick={onClickNextPage}
        aria-label="다음 페이지로 이동"
      >
        <IconArrowRightS
          color={iconColor(isNextPageDisabled)}
          aria-hidden="true"
        />
      </ArrowButton>
      {showLastButton && (
        <ArrowButton
          disabled={isLastPageDisabled}
          onClick={onClickLastPage}
          aria-label="마지막 페이지로 이동"
        >
          <IconArrowRightDoubleS
            color={iconColor(isLastPageDisabled)}
            aria-hidden="true"
          />
        </ArrowButton>
      )}
    </PaginationContainer>
  );
}
