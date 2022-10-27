export type ButtonSizeType = 'small' | 'medium' | 'large' | 'xLarge';

export type ButtonTheme = 'solid' | 'secondary';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  theme?: ButtonTheme;
  outline?: boolean;
  size?: ButtonSizeType;
  loading?: boolean;
  block?: boolean;
  children: React.ReactNode;
}

export type ButtonStyleType = Required<
  Pick<ButtonProps, 'block' | 'disabled' | 'outline' | 'size' | 'loading'>
> & { theme: ButtonTheme };
