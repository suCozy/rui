import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconExternalS } from '..';

export default {
  title: 'Icons/IconExternalS',
  component: IconExternalS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconExternalS>;

const Template: ComponentStory<typeof IconExternalS> = (args) => (
  <IconExternalS {...args} />
);

export const Basic = Template.bind({});
