import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'components/Buttons';
import { Flex } from 'components/Common/Flex';

import Dialog from '.';

const DialogComponent = () => (
  <Dialog>
    <Dialog.Trigger asChild>
      <button>Open Dialog</button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.CloseIcon />
      <Dialog.Icon type="alert" />
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>all description in here</Dialog.Description>
      <Flex gap="10px">
        {/* 추후 버튼 컴포넌트로 대체 */}
        <Dialog.Close asChild>
          <Button.Root theme="" onClick={() => console.log('확인')}>
            확인
          </Button.Root>
        </Dialog.Close>
        <Dialog.Close asChild>
          <Button onClick={() => console.log('취소')}>취소</Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  </Dialog>
);

export default {
  title: 'Modals/Dialog',
  component: DialogComponent,
} as ComponentMeta<typeof DialogComponent>;

const Template: ComponentStory<typeof DialogComponent> = () => (
  <DialogComponent />
);

export const Primary = Template.bind({});
