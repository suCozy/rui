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
Dialog.Content = function ({
  children,
  dimmed = true,
  ...props
}: ContentProps) {
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
};

Dialog.CloseIcon = function () {
  return (
    <Close asChild>
      <IconButton type="button" aria-label="Close">
        <IconCloseS />
      </IconButton>
    </Close>
  );
};

Dialog.Title = function ({ children }: { children: React.ReactNode }) {
  return <DialogTitle>{children}</DialogTitle>;
};

Dialog.Description = function ({ children }: { children: React.ReactNode }) {
  return <DialogDescription>{children}</DialogDescription>;
};

Dialog.Trigger = Trigger;
Dialog.Close = Close;
