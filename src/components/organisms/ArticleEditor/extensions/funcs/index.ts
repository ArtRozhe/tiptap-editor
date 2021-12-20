import { Extensions } from '@tiptap/react';

import { BubbleMenu } from './BubbleMenu';
import { History } from './History';
import { Placeholder } from './Placeholder';
import { Gapcursor } from './Gapcursor';

const FuncsExtensions: Extensions = [
  BubbleMenu,
  History,
  Placeholder,
  Gapcursor,
];

export default FuncsExtensions;
