import { Extensions } from '@tiptap/react';

import FuncsExtensions from './funcs';
import MarksExtensions from './marks';
import NodesExtensions from './nodes';

const extensions: Extensions = [
  ...FuncsExtensions,
  ...MarksExtensions,
  ...NodesExtensions,
];

export default extensions;
