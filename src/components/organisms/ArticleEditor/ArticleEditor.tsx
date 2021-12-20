import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

import { BubbleMenu, FloatingMenu } from './components';
import extensions from './extensions';
import useStyles from './ArticleEditor.styles';

export interface IArticleEditorProps {
  dataCy?: string;
}

const ArticleEditor: FC<IArticleEditorProps> = ({ dataCy }) => {
  const classes = useStyles();
  const editor = useEditor({
    extensions,
    content: '',
  });

  return (
    <div className={classes.organismArticleEditor} data-cy={dataCy}>
      {editor && <BubbleMenu editor={editor} />}
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default ArticleEditor;
