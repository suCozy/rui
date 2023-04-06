export type GetVariableName<C> = C extends `var(${infer R})` ? R : never;

export type ThemeType = 'light' | 'dark';

export type ColorVariable<V extends string = string> = `var(--rui-${V})`;
export type ColorVariableName = GetVariableName<ColorVariable>;

export type RUIColorType = typeof import('./variables');
export type RUIColorName = keyof RUIColorType;

export type RUIColorVariable = RUIColorType[RUIColorName];
export type RUIColorVariableName = GetVariableName<RUIColorVariable>;
export type RUIColorSet = Record<RUIColorVariableName, string>;
export type RUIMixinsCSSVariableType = Record<`--rui-${string}`, string>;

export type RUIColorMixinsType = {
  [key in ThemeType]: Record<`--rui-${string}`, string>;
};
export type RUIColorThemeType = {
  [key in ThemeType]: RUIColorSet;
};
