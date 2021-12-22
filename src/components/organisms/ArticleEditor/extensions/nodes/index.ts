import { Extensions } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';

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
