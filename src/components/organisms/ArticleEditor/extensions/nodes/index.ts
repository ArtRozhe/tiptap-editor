import { Extensions } from '@tiptap/react';

import { Document } from './Document';
import { Paragraph } from './Paragraph';
import { Text } from './Text';
import { Blockquote } from './Blockquote';
import { BulletList } from './BulletList';
import { ListItem } from './ListItem';
import { HardBreak } from './HardBreak';
import { Heading } from './Heading';
import { HorizontalRule } from './HorizontalRule';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

const NodesExtensions: Extensions = [
  Document,
  Paragraph,
  Text,
  Blockquote,
  BulletList,
  ListItem,
  HardBreak,
  Heading,
  HorizontalRule,
  Table,
  TableHeader,
  TableRow,
  TableCell,
];

export default NodesExtensions;
