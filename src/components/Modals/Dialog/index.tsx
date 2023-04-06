import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { DialogProps } from '@radix-ui/react-dialog';

import { Flex } from '@/components/Common/Flex';
import { IconCloseS } from '@/icons';

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  IconButton,
  StyledOverlay,
} from './styles';

interface ContentProps {
  children: React.ReactNode;
  dimmed?: boolean;
}

const { Root, Trigger, Close } = DialogPrimitive;

/**
 * @prop {React.ReactNode} children
 * @prop {boolean} open
 * @prop {boolean} defaultOpen
 * @prop {(open: boolean) => void} onOpenChange
 * @prop {boolean} modal
 * @prop {string} id
 */
export function Dialog({ children, ...props }: DialogProps) {
  return <Root {...props}>{children}</Root>;
}

/**
 * @prop {boolean} dimmed
 * @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
Dialog.Content = ({ children, dimmed = true, ...props }: ContentProps) => (
  <DialogPrimitive.Portal>
    {dimmed && <StyledOverlay />}
    <DialogContent {...props}>
      <Flex direction="column" align="center">
        {children}
      </Flex>
    </DialogContent>
  </DialogPrimitive.Portal>
);

Dialog.CloseIcon = () => (
  <Close asChild>
    <IconButton type="button" aria-label="Close">
      <IconCloseS />
    </IconButton>
  </Close>
);

Dialog.Title = ({ children }: { children: React.ReactNode }) => (
  <DialogTitle>{children}</DialogTitle>
);

Dialog.Description = ({ children }: { children: React.ReactNode }) => (
  <DialogDescription>{children}</DialogDescription>
);

Dialog.Trigger = Trigger;
Dialog.Close = Close;
