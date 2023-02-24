import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '.';

const meta: ComponentMeta<typeof Pagination> = {
  title: 'Common/Pagination',
  component: Pagination,
  args: {
    totalItemCount: 100,
    pageRangeDisplayed: 10,
    itemCountPerPage: 10,
    className: 'pagination',
  },
};

export const Basic: ComponentStory<typeof Pagination> = (args) => {
  const [pageNumber1, setPageNumber1] = React.useState(1);

  return (
    <Pagination
      {...args}
      onChangePage={(page) => {
        setPageNumber1(page);
      }}
      activePage={pageNumber1}
    />
  );
};

export default meta;
