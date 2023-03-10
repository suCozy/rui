import { contents000, contents300 } from 'colors/v3';
import { Flex } from 'components/Common/Flex';
import { IconArrowLeftS, IconArrowRightS } from 'components/Icons';
import {
  ArrowButton,
  CompactPaginationContainer,
  CurrentPage,
} from '../styles';
import { DefaultPaginationProps } from '../types';
import usePagination from '../usePagination';

export function CompactPagination({
  activePage = 1,
  totalItemCount = 0,
  onChangePage,
  itemCountPerPage,
  className,
}: DefaultPaginationProps) {
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

  const onClickPrevPage = () => onChangePage(prevPage);
  const onClickNextPage = () => onChangePage(nextPage);

  return (
    <CompactPaginationContainer
      className={className}
      role="navigation"
      aria-label="페이지네이션"
    >
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
      <Flex gap="4px" style={{ minWidth: '44px' }}>
        <CurrentPage>{activePage}</CurrentPage>/ {totalLastPage}
      </Flex>
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
    </CompactPaginationContainer>
  );
}
