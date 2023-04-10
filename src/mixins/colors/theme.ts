import type { RUIColorThemeType } from './types';

/**
 * {@link https://www.figma.com/file/2qQ5eJPRTiAKyz6Q1IzfMJ/WEB?node-id=2570%3A12136&viewport=347%2C475%2C0.47}
 */
export const ruiColorTheme = {
  light: {
    '--rui-primary100': '#000000',
    '--rui-primary200': '#FFFFF9',
    '--rui-secondary100': '#FF5414',
    '--rui-contents000': '#212322',
    '--rui-contents100': '#61615F',
    '--rui-contents150': '#8B8B87',
    '--rui-contents200': '#B2B1AD',
    '--rui-contents300': '#CDCCC6',
    '--rui-contents999': '#FFFFF9',
    '--rui-disabled': '#CDCCC6',
    '--rui-disabled-role-red': '#FFAA8D',
    '--rui-disabled-secondary': '#FFCBBA',
    '--rui-role-red': '#BB3811',
    '--rui-role-yellow': '#EBA900',
    '--rui-role-blue': '#00B3EA',
    '--rui-role-green': '#29B31E',
    '--rui-bg100': '#FFFFFF',
    '--rui-bg200': '#F7F7F0',
    '--rui-bg300': '#E8E7E0',
    '--rui-bg-modal100': '#FFFFFF',
    '--rui-bg-modal200': '#F7F7F0',
    '--rui-bg-role-red': '#FCE9E6',
    '--rui-bg-secondary100': '#FFF2F0',
    '--rui-bg-highlight': '#FCF6E0',
    '--rui-bg-role-yellow': '#FCF6E0',
    '--rui-bg-role-blue': '#E0F5FC',
    '--rui-bg-role-green': '#E7F6E5',
    '--rui-divider': '#E8E7E0',
    '--rui-fixed-white': '#FFFFF9',
    '--rui-fixed-bg-white': '#000000',
    '--rui-fixed-black': '#000000',
  },
  dark: {
    '--rui-primary100': '#FFFFF9',
    '--rui-primary200': '#000000',
    '--rui-secondary100': '#FF5414',
    '--rui-contents000': '#FFFFF9',
    '--rui-contents100': '#CDCCC6',
    '--rui-contents150': '#B2B1AD',
    '--rui-contents200': '#8B8B87',
    '--rui-contents300': '#61615F',
    '--rui-contents999': '#212322',
    '--rui-disabled': '#61615F',
    '--rui-disabled-role-red': '#FFAA8D',
    '--rui-disabled-secondary': '#FFCBBA',
    '--rui-role-red': '#BB3811',
    '--rui-role-yellow': '#F8CA42',
    '--rui-role-blue': '#7AD3F3',
    '--rui-role-green': '#74CA6B',
    '--rui-bg100': '#000000',
    '--rui-bg200': '#212322',
    '--rui-bg300': '#444443',
    '--rui-bg-modal100': '#212322',
    '--rui-bg-modal200': '#444443',
    '--rui-bg-role-red': '#392119',
    '--rui-bg-secondary100': '#311D16',
    '--rui-bg-highlight': '#45433E',
    '--rui-bg-role-yellow': '#A25E00',
    '--rui-bg-role-blue': '#004273',
    '--rui-bg-role-green': '#006200',
    '--rui-divider': '#444443',
    '--rui-fixed-white': '#FFFFF9',
    '--rui-fixed-bg-white': '#000000',
    '--rui-fixed-black': '#000000',
  },
} as const satisfies RUIColorThemeType;
