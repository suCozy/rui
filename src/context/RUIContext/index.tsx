import { ReactNode, createContext, useMemo } from 'react';

import { RUIColorMixinsType, ThemeType } from '@/mixins/colors/types';
import { getBrowserTheme } from '@/mixins/colors/utils';

import { RUIGlobalStyle } from './globalStyles';

export interface RUIContentProps {
  customMixins?: RUIColorMixinsType;
  forceTheme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export interface RUIContextValue {
  currentTheme: ThemeType;
  setTheme: RUIContentProps['setTheme'];
}

const RUIContext = createContext<RUIContextValue | null>(null);

/** theme과 setTheme은 사용하는 곳에서 주입,
 * 기본적으로는 브라우저의 미디어쿼리를 통해서 light, dark를 결정 */
export function RUIProvider({
  children,
  customMixins,
  forceTheme,
  setTheme,
}: { children: ReactNode } & RUIContentProps) {
  const currentTheme: ThemeType = forceTheme ?? getBrowserTheme();
  const ruiContextValue: RUIContextValue = useMemo(
    () => ({ currentTheme, setTheme }),
    [currentTheme, setTheme]
  );

  return (
    <RUIContext.Provider value={ruiContextValue}>
      <RUIGlobalStyle customMixins={customMixins} forceTheme={forceTheme} />
      {children}
    </RUIContext.Provider>
  );
}
