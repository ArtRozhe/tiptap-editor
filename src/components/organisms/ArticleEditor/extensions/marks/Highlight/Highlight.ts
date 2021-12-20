import { Mark } from '@tiptap/react';

import Highlight, { HighlightOptions } from '@tiptap/extension-highlight';

const configuredHighlight: Mark<HighlightOptions, any> = Highlight.configure({
  multicolor: true,
});

export default configuredHighlight;
