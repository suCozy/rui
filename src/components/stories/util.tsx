import * as Icons from '@/icons';

export type IconNameType = keyof typeof Icons;

export const iconNames = [
  'none' as const,
  ...(Object.keys(Icons) as IconNameType[]),
];

export const isIconName = (value: string): value is IconNameType =>
  Object.keys(Icons).includes(value);

export function getIconComponentFromName(iconName: IconNameType) {
  return Icons[iconName];
}
