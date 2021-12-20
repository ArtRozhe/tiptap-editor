import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import useStyles from './ArticleEditor.styles';

export interface IArticleEditorProps {
  dataCy?: string;
}

const ArticleEditor: FC<IArticleEditorProps> = ({ dataCy }) => {
  const classes = useStyles();
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: '<p>Редактор статей</p>',
  });

  return (
    <div className={classes.organismArticleEditor} data-cy={dataCy}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default ArticleEditor;
