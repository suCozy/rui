import * as SeparatorPrimitive from '@radix-ui/react-separator';
import styled from 'styled-components';

import { divider } from 'mixins/colors';

export interface DividerProps extends SeparatorPrimitive.SeparatorProps {
  color?: string;
}

const StyledDivider = styled(SeparatorPrimitive.Root)<DividerProps>`
  background-color: ${({ color = divider }) => color};
  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
  }
`;

/**
 * @prop {"horizontal" | "vertical"} orientation - default: "horizontal"
 * @prop {boolean} decorative - pure한 장식 컴포넌트 여부. true일 경우 웹 접근성 속성에서 제거됨.
 */
export const Divider = (props: DividerProps) => <StyledDivider {...props} />;
