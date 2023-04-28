import styled, { css } from 'styled-components';

import {
  bg200,
  contents000,
  contents200,
  contents300,
  roleRed,
} from '@/mixins/colors';
import type { ColorVariable } from '@/mixins/colors/types';
import { ellipsis, getTypographyStyles } from '@/mixins/typography';

export const InputContainer = styled.div<{
  disabled?: boolean;
  hasError?: boolean;
}>`
  display: flex;
  align-items: center;
  border: 1px solid ${contents300};
  border-radius: 4px;
  padding: 0 12px;
  gap: 8px;

  transition: border-color 0.2s, background-color 0.2s;

  ${({ hasError, disabled }) => [
    hasError
      ? css`
          border-color: ${roleRed};
        `
      : css`
          &:focus-within {
            border-color: ${contents000};
          }
        `,
    disabled &&
      css`
        background-color: ${bg200};
      `,
  ]}
`;

export const InputDecorator = styled.div`
  flex-shrink: 0;
  /* Inline요소가 들어오면 강제로 block으로 처리 (중앙정렬을 위해) */
  > * {
    display: block;
  }
`;

export const InputInner = styled.input`
  ${getTypographyStyles('Body1_M')}
  color: ${contents000};

  display: block;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  border: 0;
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

export const InputLabel = styled.label`
  ${getTypographyStyles('Headline4_B')}
  display: block;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  > mark {
    all: unset;
    color: ${roleRed};
  }
`;

export const InputError = styled.div`
  ${getTypographyStyles('Body2_M')}
  color: ${roleRed};

  margin-top: 8px;
`;

export const InputHintText = styled.span<{ textColor?: ColorVariable }>`
  ${getTypographyStyles('Body1_M')}
  color: ${({ textColor }) => textColor};
  white-space: nowrap;
`;

export const InputTogglePasswordVisibilityButton = styled.button`
  all: unset;
  appearance: none;
  cursor: pointer;
  flex-shrink: 0;

  > svg {
    display: block;
  }
`;
