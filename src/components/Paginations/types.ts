export interface DefaultPaginationProps {
  itemCountPerPage: number;
  totalItemCount?: number;
  activePage?: number;
  onChangePage: (page: number) => void;
  className?: string;
}

export interface CompactPaginationProps extends DefaultPaginationProps {
  infinite?: boolean;
}

export interface PaginationProps extends DefaultPaginationProps {
  pageRangeDisplayed?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
}

export type PaginationItems = Required<
  Pick<
    PaginationProps,
    'itemCountPerPage' | 'pageRangeDisplayed' | 'totalItemCount' | 'activePage'
  >
>;
