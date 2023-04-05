import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Pagination } from '.';

type Story = StoryObj<typeof Pagination>;

const meta: Meta = {
  title: 'Common/Pagination',
  component: Pagination,
  args: {
    totalItemCount: 100,
    pageRangeDisplayed: 10,
    itemCountPerPage: 10,
    className: 'pagination',
    showFirstButton: true,
    showLastButton: true,
  },
};

export const Basic: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageNumber1, setPageNumber1] = useState(1);

    return (
      <Pagination
        {...args}
        onChangePage={(page) => {
          setPageNumber1(page);
        }}
        activePage={pageNumber1}
      />
    );
  },
};

export default meta;
