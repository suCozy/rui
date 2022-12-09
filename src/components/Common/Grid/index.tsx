import type { CSSProperties, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  flow?: CSSProperties['gridAutoFlow'];
  columns?: number;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
}

const StyledGrid = styled.div<Partial<GridProps>>`
  box-sizing: border-box;
  display: grid;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  grid-auto-flow: ${({ flow = 'center' }) => flow};
  grid-template-columns: ${({ columns = 1 }) => `repeat(${columns}, 1fr)`};
  gap: ${({ gap = '0px' }) => gap};
  column-gap: ${({ columnGap = '0px' }) => columnGap};
  row-gap: ${({ rowGap = '0px' }) => rowGap};
`;

/**
 * @prop {string} width
 * @prop {string} height
 * @prop {CSSProperties['alignItems']} align
 * @prop {CSSProperties['justifyContent']} justify
 * @prop {CSSProperties['gridAutoFlow']} flow
 * @prop {number} columns
 * @prop {string} gap
 * @prop {string} columnGap
 * @prop {string} rowGap
 */
export const Grid = (props: GridProps) => <StyledGrid {...props} />;
