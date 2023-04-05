import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CompactPagination } from '.';

type Story = StoryObj<typeof CompactPagination>;

const meta: Meta = {
  title: 'Common/CompactPagination',
  component: CompactPagination,
  args: {
    totalItemCount: 100,
    itemCountPerPage: 10,
    infinite: true,
    className: 'CompactPagination',
  },
};

export const Basic: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageNumber1, setPageNumber1] = useState(1);

    return (
      <CompactPagination
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
