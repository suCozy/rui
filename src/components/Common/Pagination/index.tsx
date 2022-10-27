import { contents000, contents300 } from 'colors/v3';
import Icon from 'components/Icon';
import { range } from 'utils/common';
import {
  MoveToButton,
  Pages,
  Page,
  PaginationContainer,
  PageButton,
} from './styles';
import { PaginationProps } from './types';
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
    <PaginationContainer className={className} aria-label="Pagination">
      <MoveToButton
        disabled={isFirstPageDisabled}
        position="left"
        onClick={onClickFirstPage}
      >
        <Icon
          iconName="icon_arrow_double_left_s"
          color={iconColor(isFirstPageDisabled)}
        />
      </MoveToButton>
      <MoveToButton
        disabled={isPrevPageDisabled}
        position="left"
        onClick={onClickPrevPage}
      >
        <Icon
          iconName="icon_arrow_left_s"
          color={iconColor(isPrevPageDisabled)}
        />
      </MoveToButton>
      <Pages>
        {range(firstPage, rangeLastPage)?.map((_page) => (
          <Page key={_page}>
            <PageButton
              selected={_page === activePage}
              onClick={() => onClickPage(_page)}
            >
              {_page}
            </PageButton>
          </Page>
        ))}
      </Pages>
      <MoveToButton
        disabled={isNextPageDisabled}
        position="right"
        onClick={onClickNextPage}
      >
        <Icon
          iconName="icon_arrow_right_s"
          color={iconColor(isNextPageDisabled)}
        />
      </MoveToButton>
      <MoveToButton
        disabled={isLastPageDisabled}
        position="right"
        onClick={onClickLastPage}
      >
        <Icon
          iconName="icon_arrow_double_right_s"
          color={iconColor(isLastPageDisabled)}
        />
      </MoveToButton>
    </PaginationContainer>
  );
}
