import { Extensions } from '@tiptap/react';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Gapcursor from '@tiptap/extension-gapcursor';
import History from '@tiptap/extension-history';

import { Placeholder } from './Placeholder';

const FuncsExtensions: Extensions = [
  BubbleMenu,
  History,
  Placeholder,
  Gapcursor,
];

export default FuncsExtensions;
