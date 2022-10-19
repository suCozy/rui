import React from 'react';
import styled from 'styled-components';

import { getTypographyStyles, TYPOGRAPHY_STYLES } from 'mixins/typography';

export const TypeItem = ({ typography, children }: Props) => (
  <RecentContainer typography={typography}>{children}</RecentContainer>
);

interface Props {
  typography: keyof typeof TYPOGRAPHY_STYLES;
  children: React.ReactNode;
}

const RecentContainer = styled.div<{
  typography: keyof typeof TYPOGRAPHY_STYLES;
}>`
  ${({ typography }) => getTypographyStyles(typography)};

  text-align: left;
`;

export const TableContainer = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 5px;
  box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.1);
  min-width: 700px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #212322;
`;

export const Title = styled.div`
  ${getTypographyStyles('Headline2_B')};

  margin-bottom: 40px;
`;

export const Td = styled.td`
  border-bottom: 1px solid #ccc;
  vertical-align: top;
  text-align: left;
  padding: 20px 0;
`;

export const Th = styled.th`
  border: 1px solid #646464;
  border-width: 1px 0 1px 0;
  padding: 10px 0;
  text-align: left;
`;
