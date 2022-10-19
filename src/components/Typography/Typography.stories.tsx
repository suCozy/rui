import { ComponentMeta, ComponentStory } from '@storybook/react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  Paper,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TitleContainer,
} from 'components/stories/common.styles';
import { TypographyStyle, TYPOGRAPHY_STYLES } from 'mixins/typography';
import { Typography } from './Typography';

export default {
  title: 'Typography/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Overview: ComponentStory<typeof Typography> = () => (
  <Paper $minWidth={640} $maxWidth={800}>
    <TitleContainer>
      <Typography variant="Headline2_B">Typography</Typography>
    </TitleContainer>
    <Table>
      <TableHeader>
        <TableRow>
          <TableColumn isHeader>StyleName</TableColumn>
          <TableColumn isHeader align="center">
            FontSize
          </TableColumn>
          <TableColumn isHeader align="center">
            LineHeight
          </TableColumn>
          <TableColumn isHeader align="center">
            FontWeight
          </TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(TYPOGRAPHY_STYLES).map(([key, value]) => {
          const { fontSize, fontWeight, lineHeight } = value;
          return (
            <TableRow key={key}>
              <TableColumn>
                <Typography variant={key as TypographyStyle}>{key}</Typography>
              </TableColumn>
              <TableColumn align="center">{fontSize}px</TableColumn>
              <TableColumn align="center">{lineHeight}px</TableColumn>
              <TableColumn align="center">{fontWeight}</TableColumn>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

const Template: ComponentStory<typeof Typography> = (args) => (
  <Paper>
    <TitleContainer>
      <Typography variant="Headline4_B">적용 스타일</Typography>
      <Typography {...args}>{args.children || args.variant}</Typography>
    </TitleContainer>
    <Typography variant="Headline4_B">실제 마크업</Typography>
    {renderToStaticMarkup(
      <Typography {...args}>{args.children || args.variant}</Typography>
    )}
  </Paper>
);

export const Variants = Template.bind({});
Variants.args = { variant: 'Headline2_B' };
