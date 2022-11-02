import styled from 'styled-components';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: React.CSSProperties['alignItems'];
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  wrap?: React.CSSProperties['flexWrap'];
  gap?: string;
  width?: string;
  height?: string;
}

/**
 * @param {string} width
 * @param {string} height
 * @param {string} gap
 * @param {React.CSSProperties['alignItems']} align
 * @param {React.CSSProperties['justifyContent']} justify
 * @param {React.CSSProperties['flexDirection']} direction
 * @param {React.CSSProperties['flexWrap']} wrap
 */
const Flex = styled.div<Partial<FlexProps>>`
  box-sizing: border-box;
  display: flex;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  gap: ${({ gap = '0' }) => gap};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
`;

export default Flex;
