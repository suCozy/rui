import styled from 'styled-components';

import { secondary100 } from 'colors/v3';

export const RadioInput = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
  border: 1px solid ${secondary100};

  &:checked {
    accent-color: ${secondary100};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
