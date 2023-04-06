import type { CSSProperties, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import type { ConvertTransientProps } from '@/common/utils/type';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: string | number;
  $width?: string | number;
  $height?: string | number;
}

const StyledFlex = styled.div<Partial<FlexProps>>(
  ({
    align = 'center',
    direction = 'row',
    justify = 'center',
    wrap = 'nowrap',
    gap = 0,
    $width = 'auto',
    $height = 'auto',
  }) => css`
    box-sizing: border-box;
    display: flex;
    width: ${typeof $width === 'number' ? `${$width}px` : $width};
    height: ${typeof $height === 'number' ? `${$height}px` : $height};

    gap: ${typeof gap === 'number' ? `${gap}px` : gap};
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
  `
);

/**
 * @prop {string} width
 * @prop {string} height
 * @prop {string} gap
 * @prop {CSSProperties['alignItems']} align
 * @prop {CSSProperties['justifyContent']} justify
 * @prop {CSSProperties['flexDirection']} direction
 * @prop {CSSProperties['flexWrap']} wrap
 */
export const Flex = (props: ConvertTransientProps<FlexProps>) => (
  <StyledFlex {...props} />
);
