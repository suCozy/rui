import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconImportcontactsS } from '..';

export default {
  title: 'Icons/IconImportcontactsS',
  component: IconImportcontactsS,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconImportcontactsS>;

const Template: ComponentStory<typeof IconImportcontactsS> = (args) => (
  <IconImportcontactsS {...args} />
);

export const Basic = Template.bind({});
