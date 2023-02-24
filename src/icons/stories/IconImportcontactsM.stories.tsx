import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconImportcontactsM } from '..';

export default {
  title: 'Icons/IconImportcontactsM',
  component: IconImportcontactsM,
  args: {
    color: 'black',
  },
} as ComponentMeta<typeof IconImportcontactsM>;

const Template: ComponentStory<typeof IconImportcontactsM> = (args) => (
  <IconImportcontactsM {...args} />
);

export const Basic = Template.bind({});
