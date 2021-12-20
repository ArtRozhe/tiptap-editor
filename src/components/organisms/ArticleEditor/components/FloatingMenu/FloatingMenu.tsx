import { FC, useState } from 'react';
import classNames from 'classnames';
import { Editor, FloatingMenu as FloatingMenuTipTap } from '@tiptap/react';

import useStyles from './FloatingMenu.styles';

interface FloatingMenuProps {
  editor: Editor;
}

const FloatingMenu: FC<FloatingMenuProps> = ({ editor }) => {
  const classes = useStyles();
  const [areButtonsVisible, setButtonsVisible] = useState(false);

  const toggleButtonsVisible = () => setButtonsVisible(current => !current);

  const isHeadingLevel1 = editor.isActive('heading', {
    level: 1,
  });

  const isHeadingLevel2 = editor.isActive('heading', {
    level: 2,
  });

  return (
    <div className={classes.floatingMenu}>
      <FloatingMenuTipTap editor={editor}>
        <button onClick={toggleButtonsVisible} className={classes.button}>
          {areButtonsVisible ? '-' : '+'}
        </button>

        {areButtonsVisible && (
          <>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={classNames(classes.button, {
                [classes.activeButton]: isHeadingLevel1,
              })}
            >
              h1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={classNames(classes.button, {
                [classes.activeButton]: isHeadingLevel2,
              })}
            >
              h2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={classNames(classes.button, {
                [classes.activeButton]: editor.isActive('bulletList'),
              })}
            >
              bullet list
            </button>
          </>
        )}
      </FloatingMenuTipTap>
    </div>
  );
};

export default FloatingMenu;
