import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import styled from 'styled-components';

import { contents300 } from 'colors/v3';

export const ControlRoot = styled(CheckboxPrimitive.Root)`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:disabled {
    cursor: not-allowed;

    * {
      fill: ${contents300};
    }
  }
`;
