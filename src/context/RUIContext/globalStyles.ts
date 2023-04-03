import { createGlobalStyle, css } from 'styled-components';

import { ruiColorTheme } from '@/mixins/colors/theme';
import { RUIColorMixinsType, ThemeType } from '@/mixins/colors/types';
import { hexToRgb } from '@/mixins/colors/utils';

export const RUIGlobalStyle = createGlobalStyle<{
  customMixins: RUIColorMixinsType;
  forceTheme?: ThemeType;
}>(({ customMixins, forceTheme }) => {
  switch (forceTheme) {
    case 'light':
      return css`
        :root {
          ${Object.entries({
            ...ruiColorTheme.light,
            ...customMixins.light,
          }).map(
            ([key, value]) =>
              `${key}: ${value}; ${key}__rgb: ${hexToRgb(value)};`
          )}
        }
      `;
    case 'dark':
      return css`
        :root {
          ${Object.entries({
            ...ruiColorTheme.dark,
            ...customMixins.dark,
          }).map(
            ([key, value]) =>
              `${key}: ${value}; ${key}__rgb: ${hexToRgb(value)};`
          )}
        }
      `;
    default:
      return css`
        :root {
          ${Object.entries({
            ...ruiColorTheme.light,
            ...customMixins.light,
          }).map(
            ([key, value]) =>
              `${key}: ${value}; ${key}__rgb: ${hexToRgb(value)};`
          )}
        }

        @media (prefers-color-scheme: dark) {
          :root {
            ${Object.entries({
              ...ruiColorTheme.dark,
              ...customMixins.dark,
            }).map(
              ([key, value]) =>
                `${key}: ${value}; ${key}__rgb: ${hexToRgb(value)};`
            )}
          }
        }
      `;
  }
});
