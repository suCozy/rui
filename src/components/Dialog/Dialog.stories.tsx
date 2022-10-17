import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, IconButton } from './styled';

import * as Dialog from '.';

const DialogComponent = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Icon type="alert" />
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>
        Make changes to your profile here. Click save when you're done.
      </Dialog.Description>
      {/* <Flex style={{ marginTop: 25, justifyContent: 'flex-end' }}> */}
      <Dialog.Close asChild>
        <Button>Save changes</Button>
      </Dialog.Close>
      {/* </Flex> */}
      <Dialog.Close asChild>
        <IconButton aria-label="Close"></IconButton>
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
