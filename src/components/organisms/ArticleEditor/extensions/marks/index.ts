import { Extensions } from '@tiptap/react';

import { Bold } from './Bold';
import { Italic } from './Italic';
import { Strike } from './Strike';
import { Underline } from './Underline';
import { Highlight } from './Highlight';

const MarksExtensions: Extensions = [
  Bold,
  Italic,
  Strike,
  Underline,
  Highlight,
];

export default MarksExtensions;
