import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './styled';
import { Flex } from 'components/Flex';

import * as Dialog from '.';

const DialogComponent = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.CloseIcon />
      <Dialog.Icon type="alert" />
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>
        Make changes to your profile here. Click save when you're done.
      </Dialog.Description>
      <Dialog.Close asChild>
        <Flex gap="10px">
          <Button>Save changes</Button>
          <Button>Save changes</Button>
        </Flex>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Root>
);

export default {
  title: 'Modals/Dialog',
  component: DialogComponent,
} as ComponentMeta<typeof DialogComponent>;

const Template: ComponentStory<typeof DialogComponent> = () => (
  <DialogComponent />
);

export const Primary = Template.bind({});
