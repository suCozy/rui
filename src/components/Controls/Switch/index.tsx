import { SwitchRoot, SwitchThumb, Label } from './styles';
import { SwitchProps } from './types';

const Switch = ({ children, id, size = 'small', ...props }: SwitchProps) => (
  <Label htmlFor={id}>
    <SwitchRoot
      id={id}
      size={size}
      role="switch"
      aria-label="스위치"
      {...props}
    >
      <SwitchThumb size={size} aria-hidden="true" />
    </SwitchRoot>
    {/* 라벨 디자인 미정 */}
    {children}
  </Label>
);

export default Switch;
