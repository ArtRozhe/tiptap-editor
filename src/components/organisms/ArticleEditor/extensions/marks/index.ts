import { Extensions } from '@tiptap/react';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';

import { Highlight } from './Highlight';

const MarksExtensions: Extensions = [
  Bold,
  Italic,
  Strike,
  Underline,
  Highlight,
];

export default MarksExtensions;
