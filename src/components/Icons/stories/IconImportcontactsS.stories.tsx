import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconImportcontactsS } from '..';

export default {
  title: 'Icons/IconImportcontactsS',
  component: IconImportcontactsS,
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof IconImportcontactsS>;

const Template: ComponentStory<typeof IconImportcontactsS> = (args) => (
  <IconImportcontactsS {...args} />
);

export const Basic = Template.bind({});
