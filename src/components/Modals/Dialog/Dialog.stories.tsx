import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from 'components/Buttons/Button';
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
        <Dialog.Close asChild>
          <Button
            theme="solid"
            size="large"
            outline
            block
            onClick={() => console.log('확인')}
          >
            확인
          </Button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <Button
            theme="solid"
            size="large"
            block
            onClick={() => console.log('취소')}
          >
            취소
          </Button>
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
