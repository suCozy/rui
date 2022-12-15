import styled, { css } from 'styled-components';
import * as Label from '@radix-ui/react-label';

import {
  bg200,
  contents000,
  contents200,
  contents300,
  contents999,
  roleRed,
} from 'colors/v3';
import { ellipsis, getTypographyStyles } from 'mixins/typography';

export const InputContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${contents300};
  border-radius: 4px;
  padding: 0 12px;
  background-color: ${contents999};
  gap: 8px;

  transition: border-color 0.2s, background-color 0.2s;

  &:focus-within {
    border-color: ${contents000};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${bg200};
    `}
`;

export const InputInner = styled.input`
  ${getTypographyStyles('Body1_M')}

  display: block;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  border: 0;
  color: ${contents000};
  background-color: transparent;

  &:placeholder-shown {
    ${ellipsis()}
  }

  &::placeholder {
    color: ${contents200};
  }

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled(Label.Label)`
  ${getTypographyStyles('Headline4_B')}
  display: block;
  margin-bottom: 12px;
`;

export const InputHintText = styled.span`
  ${getTypographyStyles('Body1_M')}
  color: ${roleRed};
  white-space: nowrap;
`;
