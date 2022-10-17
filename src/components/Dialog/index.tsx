import * as Dialog from '@radix-ui/react-dialog';

import {
  StyledOverlay,
  StyledContent,
  Button,
  Fieldset,
  Label,
  Input,
  Flex,
  IconButton,
  StyledTitle,
  StyledDescription,
} from './styled';

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children, ...props }: ContentProps) {
  return (
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </Dialog.Portal>
  );
}

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>
    <Content>
      <StyledTitle>Edit profile</StyledTitle>
      <StyledDescription>
        Make changes to your profile here. Click save when you're done.
      </StyledDescription>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </Fieldset>
      <Flex style={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <Dialog.Close asChild>
          <Button>Save changes</Button>
        </Dialog.Close>
      </Flex>
      <Dialog.Close asChild>
        <IconButton aria-label="Close">
          {/* <Cross2Icon /> */}ㄹㄹㄴㄹㅁㄴㄹㄴㅁ
        </IconButton>
      </Dialog.Close>
    </Content>
  </Dialog.Root>
);

export default DialogDemo;
