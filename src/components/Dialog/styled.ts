import styled, { keyframes } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { primary200, contents000, contents100 } from 'colors/v3';
import { getTypographyStyles } from 'mixins/typography';

export const overlayShow = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const contentShow = keyframes`
  0% { opacity: 0; transform: translate(-50%, -48%) scale(.96) }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) }
`;

export const StyledOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const DialogContent = styled(DialogPrimitive.Content)`
  background-color: ${primary200};
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 360px;
  max-height: 85vh;
  padding: 32px 24px 24px;

  &:focus {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  } ;
`;

export const DialogIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
`;

export const Box = styled.div``;

export const Button = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4;
  padding: 0 15px;
  font-size: 15;
  line-height: 1;
  font-weight: 500;
  height: 35;
`;

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25;
  width: 25;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: absolute;
  top: 10;
  right: 10;

  &:hover {
    background-color: white;
  }
  &:focus {
    box-shadow: 0 0 0 2px blue;
  }
`;

export const DialogTitle = styled(DialogPrimitive.Title)`
  ${getTypographyStyles('Headline3_B')}

  color: ${contents000};
  margin: 0;
  padding: 0;
  white-space: pre-line;
`;

export const DialogDescription = styled(DialogPrimitive.Description)`
  ${getTypographyStyles('Body1_M')}

  color: ${contents100};
  margin: 4px 0 24px;
  text-align: center;
  white-space: pre-line;
`;
