import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Buttons/Button';
import { Flex } from '@/components/Common/Flex';

import { Dialog } from '.';

type Story = StoryObj<typeof Dialog>;

const meta: Meta = {
  title: 'Modals/Dialog',
  component: DialogComponent,
};

export const Default: Story = { render: () => <DialogComponent /> };

export default meta;

function DialogComponent() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <button type="button">Open Dialog</button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.CloseIcon />
        {/* <Dialog.HeadIcon /> */}
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>all description in here</Dialog.Description>
        <Flex gap="10px" width="100%">
          <Dialog.Close asChild>
            <Button
              variant="outline"
              size="large"
              onClick={() => console.log('확인')}
            >
              확인
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button
              variant="primary"
              size="large"
              onClick={() => console.log('취소')}
            >
              취소
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog>
  );
}
