import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CompactPagination } from '.';

const meta: ComponentMeta<typeof CompactPagination> = {
  title: 'Common/CompactPagination',
  component: CompactPagination,
  args: {
    totalItemCount: 100,
    itemCountPerPage: 10,
    infinite: true,
    className: 'CompactPagination',
  },
};

export const Basic: ComponentStory<typeof CompactPagination> = (args) => {
  const [pageNumber1, setPageNumber1] = React.useState(1);

  return (
    <CompactPagination
      {...args}
      onChangePage={(page) => {
        setPageNumber1(page);
      }}
      activePage={pageNumber1}
    />
  );
};

export default meta;
