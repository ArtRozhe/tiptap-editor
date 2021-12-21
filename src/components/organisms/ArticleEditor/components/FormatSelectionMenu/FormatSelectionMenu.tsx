import { FC } from 'react';
import classNames from 'classnames';
import { Editor, BubbleMenu } from '@tiptap/react';

import { MENU_ITEMS } from './constants';
import useStyles from './FormatSelectionMenu.styles';

interface FormatSelectionMenuProps {
  editor: Editor;
}

const FormatSelectionMenu: FC<FormatSelectionMenuProps> = ({ editor }) => {
  const classes = useStyles();

  return (
    <BubbleMenu editor={editor}>
      <div className={classes.formatSelectionMenu}>
        {MENU_ITEMS.map(({ id, name, runCommand, isActive, isNameHidden }) => (
          <button
            key={id}
            type="button"
            onClick={() => runCommand(editor)}
            className={classNames(classes.button, {
              [classes.buttonActive]: isActive(editor),
              [classes.buttonHighlight]: id === 'highlight',
            })}
          >
            {/* TODO: Возможно, вместо айдишника нужно выводить что-от другое (из локали, или ещё откуда) */}
            {!isNameHidden && name}
          </button>
        ))}
      </div>
    </BubbleMenu>
  );
};

export default FormatSelectionMenu;
