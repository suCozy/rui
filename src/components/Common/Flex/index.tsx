import type { CSSProperties, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: string;
  width?: string;
  height?: string;
}

const StyledFlex = styled.div<Partial<FlexProps>>`
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

/**
 * @prop {string} width
 * @prop {string} height
 * @prop {string} gap
 * @prop {CSSProperties['alignItems']} align
 * @prop {CSSProperties['justifyContent']} justify
 * @prop {CSSProperties['flexDirection']} direction
 * @prop {CSSProperties['flexWrap']} wrap
 */
export const Flex = (props: FlexProps) => <StyledFlex {...props} />;
