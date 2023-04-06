import { createGlobalStyle, css } from 'styled-components';

import { ruiColorTheme } from '@/mixins/colors/theme';
import type { RUIColorMixinsType, ThemeType } from '@/mixins/colors/types';
import { hexToRgb } from '@/mixins/colors/utils';

export const RUIGlobalStyle = createGlobalStyle<{
  customMixins?: RUIColorMixinsType;
  forceTheme?: ThemeType;
}>(
  ({ customMixins, forceTheme }) => css`
    :root {
      ${getThemeCssFragment({ theme: forceTheme || 'light', customMixins })}

      @media (prefers-color-scheme: dark) {
        ${getThemeCssFragment({ theme: forceTheme || 'dark', customMixins })}
      }
    }
  `
);

function getThemeCssFragment({
  theme,
  customMixins,
}: {
  theme: ThemeType;
  customMixins?: RUIColorMixinsType;
}) {
  return Object.entries({
    ...ruiColorTheme[theme],
    ...customMixins?.[theme],
  }).map(
    ([key, value]) => `${key}: ${value}; ${key}__rgb: ${hexToRgb(value)};`
  );
}
