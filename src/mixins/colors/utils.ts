import { isSSR } from '@/common/utils/common';

import { RUIColorNameType, ThemeType } from './types';

/** RDS컬러의 rgb값이 필요할 때 사용
 * @example rgba(${getRgb(contents000)},0.5)
 */
export function getRgb(color: RUIColorNameType) {
  return `${color}__rgb`;
}

/** hex로 된 컬러값을 rgb값으로 변경해줌 */
export function hexToRgb(colorHex: string) {
  let hexWithoutHash = colorHex.replace('#', '');

  if (!(hexWithoutHash.length === 3 || hexWithoutHash.length === 6)) {
    throw new Error('Invalid hex color');
  }

  if (hexWithoutHash.length === 3) {
    hexWithoutHash =
      hexWithoutHash[0] +
      hexWithoutHash[0] +
      hexWithoutHash[1] +
      hexWithoutHash[1] +
      hexWithoutHash[2] +
      hexWithoutHash[2];
  }

  const r = parseInt(hexWithoutHash.slice(0, 2), 16);
  const g = parseInt(hexWithoutHash.slice(2, 4), 16);
  const b = parseInt(hexWithoutHash.slice(4, 6), 16);

  return `${r},${g},${b}`;
}

export function getBrowserTheme(): ThemeType {
  if (!isSSR() && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}
