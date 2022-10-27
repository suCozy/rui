import styled, { keyframes } from 'styled-components';

const RotateAnimation = keyframes`
  to { transform: rotate(360deg); };
`;

export const Container = styled.span`
  animation: ${RotateAnimation} 1.5s linear infinite;
  display: flex;
`;
