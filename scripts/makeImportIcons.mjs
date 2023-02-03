import path from 'path';
import fs from 'fs';
import { default as humps } from 'humps';

const BASE_DIR = path.join(process.cwd(), '/src');
const ICONS_DIR = path.join(BASE_DIR, 'assets/icons');
const EXPORT_DIR = path.join(BASE_DIR, 'icons');

const createIconFileTemplate = (componentName, fileName) => {
  const iconAbsPath = path.join(ICONS_DIR, fileName);
  const iconRelPath = path.relative(EXPORT_DIR, iconAbsPath);
  return `export { ReactComponent as ${componentName} } from '${iconRelPath}';`;
};

const createIconStoryTemplate = (
  name
) => `import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${name} } from '..';

export default {
  title: 'Icons/${name}',
  component: ${name},
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args) => (
  <${name} {...args} />
);

export const Basic = Template.bind({});
`;

const svgIconFiles = fs
  .readdirSync(path.join(ICONS_DIR))
  .filter((fileName) => /\.svg$/.test(fileName));

const icons = svgIconFiles
  .map((fileName) => {
    const componentName = humps.pascalize(fileName.replace('.svg', ''));
    fs.writeFileSync(
      path.join(EXPORT_DIR, 'stories', `${componentName}.stories.tsx`),
      createIconStoryTemplate(componentName)
    );
    return createIconFileTemplate(componentName, fileName);
  })
  .join('\n');

fs.writeFileSync(path.join(EXPORT_DIR, 'index.ts'), icons);
