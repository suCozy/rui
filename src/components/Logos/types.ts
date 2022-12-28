import { EnvType } from './EnvLabel';

export interface RememberLogoProps
  extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  color?: 'white' | 'black' | string;
  height?: number;
  env?: EnvType;
  customElement?: React.ReactNode;
  backgroundColor?: string;
}
