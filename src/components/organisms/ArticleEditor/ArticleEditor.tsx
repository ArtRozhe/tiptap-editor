import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

import { FormatSelectionMenu, InsertNodeMenu } from './components';
import extensions from './extensions';
import { simpleArticle } from './mock';
import useStyles from './ArticleEditor.styles';

export interface IArticleEditorProps {
  dataCy?: string;
}

const ArticleEditor: FC<IArticleEditorProps> = ({ dataCy }) => {
  const classes = useStyles();
  const editor = useEditor({
    extensions,
    content: simpleArticle,
    onUpdate: ({ editor }) => {
      console.log(editor.getJSON());
    },
  });

  return (
    <div className={classes.organismArticleEditor} data-cy={dataCy}>
      {editor && <FormatSelectionMenu editor={editor} />}
      {editor && <InsertNodeMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default ArticleEditor;
