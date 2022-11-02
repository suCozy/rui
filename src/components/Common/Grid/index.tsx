import styled from 'styled-components';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  flow?: React.CSSProperties['gridAutoFlow'];
  columns?: number;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
}

/**
 * @prop {string} width
 * @prop {string} height
 * @prop {React.CSSProperties['alignItems']} align
 * @prop {React.CSSProperties['justifyContent']} justify
 * @prop {React.CSSProperties['gridAutoFlow']} flow
 * @prop {number} columns
 * @prop {string} gap
 * @prop {string} columnGap
 * @prop {string} rowGap
 */
const Grid = styled.div<Partial<GridProps>>`
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

export default Grid;
