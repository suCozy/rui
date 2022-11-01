import styled from 'styled-components';

export const ControlRoot = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const ControlInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  cursor: inherit;
`;
