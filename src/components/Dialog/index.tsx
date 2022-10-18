import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Flex } from 'components';
import { IconClose, IconDialogAlert, IconDialogCheck } from 'assets';
import {
  StyledOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogIcon,
  IconButton,
} from './styled';

interface ContentProps {
  children: React.ReactNode;
  dimmed?: boolean;
}

function Content({ children, dimmed = true, ...props }: ContentProps) {
  return (
    <DialogPrimitive.Portal>
      {dimmed && <StyledOverlay />}
      <DialogContent {...props}>
        <Flex direction="column" align="center">
          {children}
        </Flex>
      </DialogContent>
    </DialogPrimitive.Portal>
  );
}

function Icon({ type = 'alert' }: { type: 'alert' | 'check' }) {
  return (
    <DialogIcon
      src={type === 'alert' ? IconDialogAlert : IconDialogCheck}
      alt="dialog-icon"
    />
  );
}

function CloseIcon() {
  return (
    <Close asChild>
      <IconButton type="button" aria-label="Close">
        <img src={IconClose} alt="close-icon" />
      </IconButton>
    </Close>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <DialogTitle>{children}</DialogTitle>;
}

function Description({ children }: { children: React.ReactNode }) {
  return <DialogDescription>{children}</DialogDescription>;
}

const { Root, Trigger, Close } = DialogPrimitive;

export { Root, Trigger, Close, Icon, CloseIcon, Title, Description, Content };
