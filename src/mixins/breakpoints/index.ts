import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
  landingMobileSizeBreak,
  mobileSizeBreak,
  mobileSmallSizeBreak,
} from './const';
export * from './const';

/** `max-width: ${mobileSmallSizeBreak}px` */
export const mobileSmallOnly = (cssContent: string) => css`
  @media only screen and (max-width: ${mobileSmallSizeBreak}px) {
    ${cssContent}
  }
`;

/** `max-width: ${mobileSizeBreak}px` */
export const mobileOnly = (cssContent: FlattenSimpleInterpolation) => css`
  @media only screen and (max-width: ${mobileSizeBreak}px) {
    ${cssContent}
  }
`;

/** `min-width: ${mobileSizeBreak + 1}px` */
export const webOnly = (cssContent: FlattenSimpleInterpolation) => css`
  @media only screen and (min-width: ${mobileSizeBreak + 1}px) {
    ${cssContent}
  }
`;

/** `max-width: ${landingMobileSizeBreak}px` */
export const landingMobileOnly = (
  cssContent: FlattenSimpleInterpolation
) => css`
  @media only screen and (max-width: ${landingMobileSizeBreak}px) {
    ${cssContent}
  }
`;

/** `min-width: ${landingMobileSizeBreak + 1}px` */
export const landingWebOnly = (cssContent: FlattenSimpleInterpolation) => css`
  @media only screen and (min-width: ${landingMobileSizeBreak + 1}px) {
    ${cssContent}
  }
`;

/** mobileSizeBreak 이하에서 `display: none;` */
export const displayWebOnly = css`
  ${mobileOnly(css`
    display: none !important;
  `)}
`;

/** mobileSizeBreak 이상에서 `display: none;` */
export const displayMobileOnly = css`
  ${webOnly(css`
    display: none !important;
  `)}
`;
