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
 * @prop {string} width
 * @prop {string} height
 * @prop {string} gap
 * @prop {React.CSSProperties['alignItems']} align
 * @prop {React.CSSProperties['justifyContent']} justify
 * @prop {React.CSSProperties['flexDirection']} direction
 * @prop {React.CSSProperties['flexWrap']} wrap
 */
export const Flex = styled.div<Partial<FlexProps>>`
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
