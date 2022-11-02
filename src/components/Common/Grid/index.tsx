import styled from 'styled-components';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flow: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  columns: number;
  gap: string;
  columnGap: string;
  rowGap: string;
  width: string;
}

/**
 * @prop {string} className
 * @prop {string} width
 * @prop {'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'} align
 * @prop {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'} justify
 * @prop {'row' | 'column' | 'dense' | 'row dense' | 'column dense'} flow
 * @prop {number} columns
 * @prop {string} gap
 * @prop {string} columnGap
 * @prop {string} rowGap
 * @prop {'nowrap' | 'wrap' | 'wrap-reverse'} wrap
 */
export const Grid = styled.div<Partial<GridProps>>`
  box-sizing: border-box;
  display: grid;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  grid-auto-flow: ${({ flow = 'center' }) => flow};
  grid-template-columns: ${({ columns = 1 }) => `repeat(${columns}, 1fr)`};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  gap: ${({ gap = '0px' }) => gap};
  column-gap: ${({ columnGap = '0px' }) => columnGap};
  row-gap: ${({ rowGap = '0px' }) => rowGap};
  width: ${({ width = '100%' }) => width};
`;
