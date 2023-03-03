import { contents000, contents300 } from 'colors/v3';
import { Flex } from 'components/Common/Flex';
import { IconArrowLeftS, IconArrowRightS } from 'components/Icons';
import {
  ArrowButton,
  CompactPaginationContainer,
  CurrentPage,
} from '../styles';
import type { CompactPaginationProps } from '../types';
import usePagination from '../usePagination';

export function CompactPagination({
  activePage = 1,
  totalItemCount = 0,
  onChangePage,
  itemCountPerPage,
  infinite = false,
  className,
}: CompactPaginationProps) {
  const {
    totalLastPage,
    prevPage,
    nextPage,
    isPrevPageDisabled,
    isNextPageDisabled,
  } = usePagination({
    activePage,
    totalItemCount,
    pageRangeDisplayed: 1,
    itemCountPerPage,
  });

  const iconColor = (disabled: boolean) =>
    disabled ? contents300 : contents000;

  const onClickPrevPage = () => {
    const prevPageToGo =
      activePage === 1 && infinite ? totalLastPage : prevPage;
    onChangePage(prevPageToGo);
  };

  const onClickNextPage = () => {
    const nextPageToGo =
      activePage === totalLastPage && infinite ? 1 : nextPage;
    onChangePage(nextPageToGo);
  };

  const hasOnlyOnePage = totalLastPage === 1;

  const getArrowButtonDisabled = (disabled: boolean) => {
    if (hasOnlyOnePage) {
      return true;
    }
    if (infinite) {
      return false;
    }
    return disabled;
  };

  const getArrowButtonColor = (disabled: boolean) => {
    if (hasOnlyOnePage) {
      return contents300;
    }
    if (infinite) {
      return contents000;
    }
    return iconColor(disabled);
  };

  return (
    <CompactPaginationContainer
      className={className}
      role="navigation"
      aria-label="페이지네이션"
    >
      <ArrowButton
        disabled={getArrowButtonDisabled(isPrevPageDisabled)}
        onClick={onClickPrevPage}
        aria-label="이전 페이지로 이동"
      >
        <IconArrowLeftS
          color={getArrowButtonColor(isPrevPageDisabled)}
          aria-hidden="true"
        />
      </ArrowButton>
      <Flex gap="4px" style={{ minWidth: '44px', userSelect: 'none' }}>
        <CurrentPage>{activePage}</CurrentPage>/ {totalLastPage}
      </Flex>
      <ArrowButton
        disabled={getArrowButtonDisabled(isNextPageDisabled)}
        onClick={onClickNextPage}
        aria-label="다음 페이지로 이동"
      >
        <IconArrowRightS
          color={getArrowButtonColor(isNextPageDisabled)}
          aria-hidden="true"
        />
      </ArrowButton>
    </CompactPaginationContainer>
  );
}
