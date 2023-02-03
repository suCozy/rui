import styled from 'styled-components';

import { secondary100 } from 'mixins/colors';

export const RadioInput = styled.input`
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:checked {
    accent-color: ${secondary100};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
