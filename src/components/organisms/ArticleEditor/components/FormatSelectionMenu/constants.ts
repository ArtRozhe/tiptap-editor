import { IMenuItem } from '../../types';
import { IMenuItemId } from './types';

export const HIGHLIGHT_COLOR = '#c4c2ee';

export const MENU_ITEMS: IMenuItem<IMenuItemId>[] = [
  {
    id: 'bold',
    name: 'Bold',
    runCommand: editor => editor.chain().focus().toggleBold().run(),
    isActive: editor => editor.isActive('bold'),
  },
  {
    id: 'italic',
    name: 'Italic',
    runCommand: editor => editor.chain().focus().toggleItalic().run(),
    isActive: editor => editor.isActive('italic'),
  },
  {
    id: 'strike',
    name: 'Strike',
    runCommand: editor => editor.chain().focus().toggleStrike().run(),
    isActive: editor => editor.isActive('strike'),
  },
  {
    id: 'underline',
    name: 'Underline',
    runCommand: editor => editor.chain().focus().toggleUnderline().run(),
    isActive: editor => editor.isActive('underline'),
  },
  {
    id: 'highlight',
    name: 'Highlight',
    runCommand: editor =>
      editor.chain().focus().toggleHighlight({ color: HIGHLIGHT_COLOR }).run(),
    isActive: editor =>
      editor.isActive('highlight', {
        color: HIGHLIGHT_COLOR,
      }),
    isNameHidden: true,
  },
];
