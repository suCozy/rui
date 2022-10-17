import styled, { keyframes } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { primary200 } from 'colors/v3';

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

export const StyledContent = styled(DialogPrimitive.Content)`
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

export const Flex = styled.div`
  display: flex;
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

export const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: 20;
  align-items: center;
  margin-bottom: 15;
`;

export const Label = styled.label`
  font-size: 15;
  color: red;
  width: 90;
  text-align: right;
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4;
  padding: 0 10px;
  font-size: 15;
  line-height: 1;
  color: red;
  box-shadow: 0 0 0 1px red;
  height: 35;

  &:focus {
    box-shadow: 0 0 0 2px red;
  }
`;

export const StyledTitle = styled(DialogPrimitive.Title)`
  margin: 0;
  font-weight: 500;
  color: blue;
  font-size: 17;
`;

export const StyledDescription = styled(DialogPrimitive.Description)`
  margin: 10px 0 20px;
  color: red;
  font-size: 15;
  line-height: 1.5;
`;
