export type GetVariableName<C> = C extends `var(${infer R})` ? R : never;

export type ThemeType = 'light' | 'dark';
export type RUIColorType = typeof import('./variables');
export type RUIColorNameType = keyof RUIColorType;
export type RUIColorVariableType = GetVariableName<
  RUIColorType[RUIColorNameType]
>;
export type RUIColorSetType = Record<RUIColorVariableType, string>;
export type RUIMixinsCSSVariableType = Record<`--rui-${string}`, string>;

export type RUIColorMixinsType = {
  [key in ThemeType]: Record<`--rui-${string}`, string>;
};
export type RUIColorThemeType = {
  [key in ThemeType]: RUIColorSetType;
};
