import { FC, useState } from 'react';
import classNames from 'classnames';
import { Editor, FloatingMenu } from '@tiptap/react';

import { MENU_ITEMS } from './constants';
import useStyles from './InsertNodeMenu.styles';

interface InsertNodeMenuProps {
  editor: Editor;
}

const InsertNodeMenu: FC<InsertNodeMenuProps> = ({ editor }) => {
  const classes = useStyles();
  const [areNodesSelectorVisible, setNodesSelectorVisible] = useState(false);

  const toggleNodesSelectorVisible = () =>
    setNodesSelectorVisible(current => !current);

  return (
    <div className={classes.insertNodeMenu}>
      <FloatingMenu editor={editor}>
        {/* Кнопка для открытия/закрытия блока с выбором нод */}
        <button
          type="button"
          onClick={toggleNodesSelectorVisible}
          className={classes.button}
        >
          {areNodesSelectorVisible ? '-' : '+'}
        </button>

        {areNodesSelectorVisible &&
          MENU_ITEMS.map(({ id, name, runCommand, isActive }) => (
            <button
              key={id}
              type="button"
              className={classNames(classes.button, {
                [classes.activeButton]: isActive(editor),
              })}
              onClick={() => runCommand(editor)}
            >
              {name}
            </button>
          ))}
      </FloatingMenu>
    </div>
  );
};

export default InsertNodeMenu;
