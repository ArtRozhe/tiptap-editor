import { FC } from 'react';
import classNames from 'classnames';
import { Editor, BubbleMenu as BubbleMenuTipTap } from '@tiptap/react';

import { HIGHLIGHT_COLOR } from './constants';
import useStyles from './BubbleMenu.styles';

interface BubbleMenuProps {
  editor: Editor;
}

const BubbleMenu: FC<BubbleMenuProps> = ({ editor }) => {
  const classes = useStyles();

  const isHighlighted = editor.isActive('highlight', {
    color: HIGHLIGHT_COLOR,
  });

  const handleColorToggle = () => {
    editor.chain().focus().toggleHighlight({ color: HIGHLIGHT_COLOR }).run();
  };

  return (
    <BubbleMenuTipTap editor={editor}>
      <div className={classes.bubbleMenu}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={classNames(classes.button, {
            [classes.buttonActive]: editor.isActive('bold'),
          })}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={classNames(classes.button, {
            [classes.buttonActive]: editor.isActive('italic'),
          })}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={classNames(classes.button, {
            [classes.buttonActive]: editor.isActive('strike'),
          })}
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={classNames(classes.button, {
            [classes.buttonActive]: editor.isActive('underline'),
          })}
        >
          underline
        </button>
        <button
          onClick={handleColorToggle}
          className={classNames(classes.button, classes.buttonHighlight, {
            [classes.buttonActive]: isHighlighted,
          })}
        />
      </div>
    </BubbleMenuTipTap>
  );
};

export default BubbleMenu;
