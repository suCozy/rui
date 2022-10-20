import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';

import { IconClose, IconConfirmAlert } from 'assets';
import { Flex } from 'components/Common/Flex';
import {
  StyledOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogIcon,
  IconButton,
} from './styles';

interface ContentProps {
  children: React.ReactNode;
  dimmed?: boolean;
}

/**
 * @param children React.ReactNode
 */
function Dialog({ children, ...props }: DialogProps) {
  return <Root {...props}>{children}</Root>;
}

/**
 * @param dimmed boolean
 * @see https://www.radix-ui.com/docs/primitives/components/dialog
 */
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

function Icon() {
  return (
    <DialogIcon>
      <IconConfirmAlert width={48} height={48} />
    </DialogIcon>
  );
}

function CloseIcon() {
  return (
    <Close asChild>
      <IconButton type="button" aria-label="Close">
        <IconClose />
      </IconButton>
    </Close>
  );
}

/**
 * @param children React.ReactNode
 */
function Title({ children }: { children: React.ReactNode }) {
  return <DialogTitle>{children}</DialogTitle>;
}

/**
 * @param children React.ReactNode
 */
function Description({ children }: { children: React.ReactNode }) {
  return <DialogDescription>{children}</DialogDescription>;
}

const { Root, Trigger, Close } = DialogPrimitive;

export default Object.assign(Dialog, {
  Trigger,
  Close,
  Icon,
  CloseIcon,
  Title,
  Description,
  Content,
});
