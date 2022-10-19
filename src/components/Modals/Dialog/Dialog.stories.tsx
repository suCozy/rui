import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './styles';
import { Flex } from 'components/Common/Flex';

import * as Dialog from '.';

const DialogComponent = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.CloseIcon />
      <Dialog.Icon type="alert" />
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>
        Make changes to your profile here. Click save when you're done.
      </Dialog.Description>
      <Flex gap="10px">
        {/* 추후 버튼 컴포넌트로 대체 */}
        <Dialog.Close asChild>
          <Button onClick={() => console.log('확인')}>확인</Button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <Button onClick={() => console.log('취소')}>취소</Button>
        </Dialog.Close>
      </Flex>
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
