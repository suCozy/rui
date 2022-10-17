import {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { PRETENDARD_FONT_FAMILY, TYPOGRAPHY_STYLES } from './const';
import { TypographyStyle } from './types';
export * from './const';
export * from './types';

/**
 * 해당 스타일명에 해당하는 css 조각을 반환
 */
export const getTypographyStyles = (typographyStyle: TypographyStyle) => {
  const { fontSize, lineHeight, fontWeight } =
    TYPOGRAPHY_STYLES[typographyStyle];
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeight};
    font-family: ${PRETENDARD_FONT_FAMILY};
  `;
};

/**
 * white-space: pre-line; \
 * word-break: normal; \
 * word-wrap: break-word;
 */
export const textBreakPre = css`
  white-space: pre-line;
  word-break: normal;
  word-wrap: break-word;
`;

/**
 * word-break: break-all; \
 * word-wrap: break-word;
 */
export const textBreak = css`
  word-break: break-all;
  word-wrap: break-word;
`;

/**
 * 링크 텍스트 스타일
 *
 * cursor: pointer; \
 * &:hover { text-decoration: underline; }
 */
export const textLink = css`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/**
 * 말줄임표 표시 (1줄)
 *
 * white-space: nowrap; \
 * overflow: hidden; \
 * text-overflow: ellipsis;
 */
export const textEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 * 말줄임표 표시
 *
 * line = 1 인 경우, \
 * white-space: nowrap; \
 * overflow: hidden; \
 * text-overflow: ellipsis;
 *
 * line > 1 인 경우, \
 * overflow: hidden; \
 * text-overflow: ellipsis; \
 * display: -webkit-box; \
 * -webkit-box-orient: vertical; \
 * -webkit-line-clamp: ${line};
 */
export const ellipsis = (line = 1) => {
  if (line === 1) {
    return textEllipsis;
  }

  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line};
  `;
};

/**
 * placeholder에 스타일 적용
 */
export const setPlaceholderStyle = (
  cssContent: FlattenSimpleInterpolation
) => css`
  &::placeholder {
    ${cssContent}
  }
`;
