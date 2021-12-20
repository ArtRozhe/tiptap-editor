import { createUseStyles } from 'react-jss';

export default createUseStyles({
  organismArticleEditor: {},

  '@global': {
    // Placeholder
    '.ProseMirror p.is-editor-empty:first-child::before': {
      color: '#adb5bd',
      content: 'attr(data-placeholder)',
      float: 'left',
      height: 0,
      pointerEvents: 'none',
    },
  },
});
