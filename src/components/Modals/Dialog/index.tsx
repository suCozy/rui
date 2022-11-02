import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';

import Flex from 'components/Common/Flex';
import Icon from 'components/Icon';
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

function HeadIcon() {
  return (
    <DialogIcon>
      <Icon iconName="img_confirm_alert" />
    </DialogIcon>
  );
}

function CloseIcon() {
  return (
    <Close asChild>
      <IconButton type="button" aria-label="Close">
        <Icon iconName="icon_close_s" />
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
  HeadIcon,
  CloseIcon,
  Title,
  Description,
  Content,
});
