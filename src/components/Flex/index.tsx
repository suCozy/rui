import styled from 'styled-components';

type FlexProps = {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap: string;
  width: string;
};

/**
 * @param direction 'row' | 'column' | 'row-reverse' | 'column-reverse'
 * @param align 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
 * @param justify 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
 * @param wrap 'nowrap' | 'wrap' | 'wrap-reverse'
 * @param gap string
 * @param width string
 */
export const Flex = styled.div<Partial<FlexProps>>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'stretch' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  gap: ${({ gap = '0' }) => gap};
  width: ${({ width = '100%' }) => width};
`;
